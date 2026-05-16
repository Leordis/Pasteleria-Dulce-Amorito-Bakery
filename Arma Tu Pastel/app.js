// ── CONFIG ────────────────────────────────────────
const WA = '14073122435';

const state = {
  size:    { val: 'small', label: '6" · 8 personas',   price: 45 },
  flavor:  { val: 'vanilla',        label: 'Vainilla' },
  filling: { val: 'chantilly cream',label: 'Chantilly' },
  deco:    { val: 'fresh flowers',  label: 'Flores frescas' },
  color:   { val: 'white and blush pink', label: 'Blanco / Rosa' },
};

const imageCache = {};
let debounceTimer = null;
let generating = false;

// ── PROMPT ────────────────────────────────────────
function buildPrompt() {
  const sizeMap = {
    small:  'elegant single layer artisan cake',
    medium: 'beautiful two layer artisan cake',
    large:  'impressive three layer artisan cake',
    tiered: 'stunning three tier wedding cake',
  };
  return [
    'ultra realistic professional cake photography',
    sizeMap[state.size.val] || 'elegant cake',
    state.flavor.val + ' flavored sponge',
    state.filling.val + ' filling',
    state.deco.val + ' decoration',
    state.color.val + ' color scheme',
    'cinematic lighting',
    'luxury food photography',
    'sharp focus',
    'white studio background',
    '8k',
  ].join(', ');
}

function makeUrl(prompt) {
  const seed = hashCode(prompt);
  return 'https://image.pollinations.ai/prompt/' +
    encodeURIComponent(prompt) +
    '?width=800&height=800&model=flux&nologo=true&seed=' + seed;
}

function hashCode(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = Math.imul(31, h) + s.charCodeAt(i) | 0;
  return Math.abs(h) % 1000000;
}

// ── SELECTION ─────────────────────────────────────
function pick(btn, field) {
  btn.closest('.chips').querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');

  const val   = btn.dataset.val;
  const label = btn.textContent.trim().replace(/^[\p{Emoji}\s]+/u, '').trim();

  if (field === 'size') {
    state.size = { val, label: label, price: +btn.dataset.price };
    document.getElementById('s-size').textContent  = label;
    document.getElementById('price-val').textContent = btn.dataset.price;
  } else if (field === 'flavor') {
    state.flavor = { val, label };
    document.getElementById('s-flavor').textContent = label;
  } else if (field === 'filling') {
    state.filling = { val, label };
    document.getElementById('s-filling').textContent = label;
  } else if (field === 'deco') {
    state.deco = { val, label };
    document.getElementById('s-deco').textContent = label;
  }

  scheduleGenerate();
}

function pickColor(el) {
  document.querySelectorAll('.swatch').forEach(s => s.classList.remove('active'));
  el.classList.add('active');
  state.color = { val: el.dataset.val, label: el.title };
  document.getElementById('s-color').textContent = el.title;
  scheduleGenerate();
}

// ── GENERATION ────────────────────────────────────
function scheduleGenerate() {
  clearTimeout(debounceTimer);
  // Show spinner immediately so user knows something is happening
  setLoading(true, 'Preparando tu pastel…');
  debounceTimer = setTimeout(generate, 1200);
}

function generateNow() {
  clearTimeout(debounceTimer);
  // Force a new image by temporarily altering seed
  const extra = '&t=' + Date.now();
  const prompt = buildPrompt();
  updatePromptDisplay(prompt);
  const url = makeUrl(prompt) + extra;
  loadImage(url);
}

function generate() {
  const prompt = buildPrompt();
  updatePromptDisplay(prompt);

  // Check cache
  if (imageCache[prompt]) {
    const img = document.getElementById('cake-img');
    img.src = imageCache[prompt];
    setLoading(false);
    return;
  }

  loadImage(makeUrl(prompt), prompt);
}

function loadImage(url, cacheKey) {
  if (generating) return;
  generating = true;
  setLoading(true, 'Generando con IA… (~15 seg)');

  const img = document.getElementById('cake-img');

  // Track loading steps
  const steps = ['Construyendo prompt…','Enviando a Flux AI…','Procesando imagen…','Finalizando detalles…'];
  let si = 0;
  const stepEl = document.getElementById('loading-step');
  const interval = setInterval(() => {
    if (si < steps.length - 1) stepEl.textContent = steps[++si];
  }, 4000);

  img.onload = () => {
    clearInterval(interval);
    if (cacheKey) imageCache[cacheKey] = url;
    setLoading(false);
    generating = false;
    showToast('✨ Pastel generado con IA');
  };

  img.onerror = () => {
    clearInterval(interval);
    setLoading(false);
    generating = false;
    showToast('⚠️ Reintentando… espera un momento');
    // Retry once after 3s
    setTimeout(() => { img.src = url + '&retry=1'; }, 3000);
  };

  img.src = url;
}

function updatePromptDisplay(prompt) {
  const short = prompt.split(',').slice(0, 4).join(', ') + '…';
  document.getElementById('prompt-display').textContent = short;
}

// ── LOADING STATE ─────────────────────────────────
function setLoading(show, msg = '') {
  const overlay = document.getElementById('loading-overlay');
  const btn     = document.getElementById('btn-gen');
  const stepEl  = document.getElementById('loading-step');

  overlay.classList.toggle('show', show);
  btn.disabled = show;

  if (msg) stepEl.textContent = msg;

  if (show) {
    btn.innerHTML = '⚡ Generando…';
  } else {
    btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> Generar nueva versión`;
  }
}

function onImageLoad()  { setLoading(false); generating = false; }
function onImageError() { setLoading(false); generating = false; }

// ── WHATSAPP ──────────────────────────────────────
function orderWhatsApp() {
  const msg =
    `🎂 *PEDIDO — Dulce Amorito Bakery*\n\n` +
    `✦ Configurado con el Lab IA:\n\n` +
    `📏 Tamaño: ${state.size.label}\n` +
    `🍰 Sabor: ${state.flavor.label}\n` +
    `🍯 Relleno: ${state.filling.label}\n` +
    `🎨 Decoración: ${state.deco.label}\n` +
    `🎨 Color: ${state.color.label}\n` +
    `💰 Precio desde: $${state.size.price}\n\n` +
    `¡Hola! Me gustaría ordenar este pastel 🌸`;

  const a = document.createElement('a');
  a.href = `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;
  a.target = '_blank'; a.rel = 'noopener';
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
}

function downloadImage() {
  const img = document.getElementById('cake-img');
  const a = document.createElement('a');
  a.href = img.src;
  a.download = `pastel-dulce-amorito-${Date.now()}.jpg`;
  a.target = '_blank';
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  showToast('⬇️ Abriendo imagen…');
}

function copyPrompt() {
  const p = buildPrompt();
  navigator.clipboard.writeText(p)
    .then(() => showToast('📋 Prompt copiado'))
    .catch(() => showToast('Prompt: ' + p.slice(0, 50) + '…'));
}

// ── TOAST ─────────────────────────────────────────
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

// ── PARTICLES ─────────────────────────────────────
function initParticles() {
  const c = document.getElementById('particles');
  for (let i = 0; i < 20; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const sz = Math.random() * 3 + 1;
    p.style.cssText = `width:${sz}px;height:${sz}px;left:${Math.random()*100}%;` +
      `animation-duration:${Math.random()*12+8}s;animation-delay:${Math.random()*8}s;`;
    c.appendChild(p);
  }
}

// ── INIT ──────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  // Show loading right away and generate first image
  setLoading(true, 'Generando tu primer pastel…');
  generate();
});
