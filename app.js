// ── DATA ──────────────────────────────────────────
const WA = '14073122435';

function openWA(msg) {
  const a = document.createElement('a');
  a.href = `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;
  a.target = '_blank';
  a.rel = 'noopener';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

const PRODUCTS = {
  artisan: [
    { id:'a1', name:'Milhojas', desc:'Crispy puff pastry layers with pastry cream', emoji:'🥐', badge:'Popular',
      img:"Variedades de dulces /mil hojas/3558802C-34F5-407F-B25E-1779E4B5A472.PNG",
      sizes:[{label:'5 ppl',price:30},{label:'10 ppl',price:50},{label:'20 ppl',price:90}] },
    { id:'a2', name:'Tres Leches de Frutas', desc:'Fluffy sponge cake soaked in tres leches with fresh fruit', emoji:'🍰', badge:'⭐ Favorite',
      img:"Variedades de dulces /tres leche/56002ACB-FB5B-4491-9B9C-A6BAB97BCEC3.PNG",
      sizes:[{label:'6" · 8 ppl',price:45},{label:'8" · 15 ppl',price:70},{label:'10" · 30 ppl',price:95}] },
    { id:'a3', name:'Churros (12 ct)', desc:'Artisanal churros, crispy outside, soft inside', emoji:'🥐',
      img:"Variedades de dulces /churros/churros.png", price:25 },
    { id:'a4', name:'Flan', desc:'Homemade flan with caramel, creamy and smooth', emoji:'🍮',
      img:"Variedades de dulces /flan/IMG_9605.JPG", price:20 },
    { id:'a5', name:'Chocoflan', desc:'The perfect combo: flan + chocolate cake', emoji:'🍫',
      img:"Variedades de dulces /choco Flan/IMG_9606 2.JPG", price:40 },
    { id:'a6', name:'Cheesecake', desc:'Creamy cheesecake · Passion fruit or Strawberry', emoji:'🧁', badge:'2 flavors',
      img:"Variedades de dulces /chescake de maracuya/IMG_9610.JPG", price:40 },
    { id:'a7', name:'Pan de Jamón', desc:'Artisanal bread filled with ham, olives, raisins, and bacon — traditional Venezuelan flavor', emoji:'🥖', badge:'🎄 Seasonal',
      img:"Variedades de dulces /pan de jamon/IMG_9608.JPG",
      sizes:[{label:'Small · 6 ppl',price:18},{label:'Med · 12 ppl',price:28},{label:'Large · 20 ppl',price:38}] },
  ],
  individual: [
    { id:'i1', name:'Passion Fruit Cheesecake', desc:'12 individual units, tropical passion fruit', emoji:'🍊',
      img:"Variedades de dulces /INDIVIDUALES/CHIScake de maracuya/EDE70349-5BD5-4A5D-A898-5851659C0190.PNG", price:45, unit:'12 ct' },
    { id:'i2', name:'Tres Leches Cake', desc:'12 individual portions of classic tres leches', emoji:'🍰',
      img:"Variedades de dulces /INDIVIDUALES/torta de tres leche/68A2C58F-434B-4C70-B9C1-D4C24F40A673 2.PNG", price:45, unit:'12 ct' },
    { id:'i3', name:'Chocolate Cake', desc:'12 portions of moist chocolate cake', emoji:'🍫',
      img:"Variedades de dulces /INDIVIDUALES/torta de chocolate/EAB0E20A-40F8-4575-AF05-F5C16EE93F16.PNG", price:45, unit:'12 ct' },
    { id:'i4', name:'Mini Milhojas', desc:'12 crispy mini milhojas with cream', emoji:'🥐',
      img:"Variedades de dulces /INDIVIDUALES/mini mil hojas/7271511A-4786-4348-983B-4C231B4D518B.PNG", price:50, unit:'12 ct' },
    { id:'i5', name:'Flan / Quesillo', desc:'12 individual caramelized flans', emoji:'🍮',
      img:"Variedades de dulces /INDIVIDUALES/flan quesillo/54828FFA-B50A-4B75-8D3A-F69881747830.PNG", price:40, unit:'12 ct' },
    { id:'i6', name:'Mini Merengón', desc:'12 mini merengones with chantilly cream', emoji:'☁️',
      img:"Variedades de dulces /INDIVIDUALES/mini merengon/IMG_9623.JPG", price:45, unit:'12 ct' },
    { id:'i7', name:'Tiramisú', desc:'12 portions of classic Italian tiramisú', emoji:'☕',
      img:"Variedades de dulces /tiramisu/IMG_9611.JPG", price:45, unit:'12 ct' },
    { id:'i8', name:'Macarons', desc:'12 French macarons in assorted flavors', emoji:'🎀',
      img:"Variedades de dulces /INDIVIDUALES/macarones/IMG_9613.JPG", price:30, unit:'12 ct' },
    { id:'i9', name:'Cake Pops', desc:'12 hand-decorated cake pops', emoji:'🍡',
      img:"Variedades de dulces /INDIVIDUALES/cake pops/IMG_9621.JPG", price:35, unit:'12 ct' },
    { id:'i10', name:'Cupcakes', desc:'12 cupcakes decorated with buttercream', emoji:'🧁',
      img:"Variedades de dulces /cup cake/653D8618-38F1-451E-B125-5B28BC51710E.PNG", price:45, unit:'12 ct' },
  ],
  tortas: [
    { id:'t1', name:'Custom Cake', desc:'Designed 100% to your liking: flavor, filling, decor, and size', emoji:'🎂', badge:'⭐ Specialty',
      img:"tortas personalisadas/torta-personalizada.png", price:45, note:'Price from · use configurator' },
    { id:'t2', name:'Wedding Cake', desc:'Elegance and love in every tier · 2+ tiers, premium decor', emoji:'💒', badge:'Exclusive',
      img:"bodas/7EF59F04-7AF3-4EA2-A5B7-491B6ECA9344.PNG", price:145, note:'Price from' },
    { id:'t3', name:'Quinceañera Cake', desc:'Dream design for your most special day', emoji:'👑',
      img:"torta de quinceañera/IMG_8143.jpg", price:95, note:'Price from' },
    { id:'t4', name:'Birthday Cake', desc:'Customized with your favorite colors, theme, and flavors', emoji:'🎉',
      img:"tortas de cumpleaños/E7A91446-0112-4733-9F76-8190C6BACF87.PNG", price:45, note:'Price from' },
    { id:'t5', name:'Gender Reveal Cake', desc:'Surprise everyone with the secret color inside the cake', emoji:'🎀',
      img:"gender reveal cake/IMG_9630.JPG", price:65, note:'Price from' },
    { id:'t6', name:'Dessert Table', desc:'Full dessert table for your special event', emoji:'✨',
      img:"disert table/mesa-postre.png", price:150, note:'Price from · contact us' },
  ]
};

const TESTIMONIALS = [
  { text:'My wedding cake turned out exactly as I dreamed. All the guests asked who made it — the best cakes in Orlando!', name:'María G.', loc:'Orlando, FL', color:'#c0263d' },
  { text:'I ordered cupcakes for the baby shower and they were the best I have ever tasted in my life. Beautiful presentation and incredible flavor.', name:'Kariela R.', loc:'Kissimmee, FL', color:'#c9973b' },
  { text:'The tres leches with fruit is crazy delicious. I have already ordered it 3 times for different events. It never disappoints!', name:'Paola M.', loc:'Orlando, FL', color:'#e07898' },
  { text:'My daughter\'s quinceañera cake was a dream come true. The design, the flavor, the punctuality — everything was perfect.', name:'Luciana V.', loc:'Orlando, FL', color:'#c0263d' },
];

// ── STATE ─────────────────────────────────────────
let cart = JSON.parse(localStorage.getItem('da_cart') || '[]');
let currentTab = 'tortas';
let cakeOrder = { size:'', sizePrice:0, flavor:'', filling:'', deco:'', color:'', date:'' };

// ── INIT ──────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderCatalog('tortas');
  renderTestimonials();
  updateCartUI();
  // Nav scroll
  window.addEventListener('scroll', () => {
    document.getElementById('main-nav').classList.toggle('scrolled', scrollY > 40);
  });
});

// ── CATALOG ───────────────────────────────────────
function showTab(tab, btn) {
  currentTab = tab;
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderCatalog(tab);
}

function renderCatalog(tab) {
  const grid = document.getElementById('catalog-grid');
  const items = PRODUCTS[tab] || [];
  grid.innerHTML = items.map(p => buildCard(p, tab)).join('');
}

function buildCard(p, tab) {
  const hasSizes = p.sizes && p.sizes.length;
  const sizeOpts = hasSizes ? `<select class="size-select" id="sel-${p.id}" onchange="updateCardPrice('${p.id}',this.value,${JSON.stringify(p.sizes).replace(/"/g,"'")})">
    ${p.sizes.map((s,i) => `<option value="${i}">${s.label} · $${s.price}</option>`).join('')}
  </select>` : '';

  const basePrice = hasSizes ? p.sizes[0].price : p.price;
  const priceLabel = p.unit ? `<span>per ${p.unit}</span>` : (p.note ? `<span style="font-size:.68rem">${p.note}</span>` : '');

  return `<div class="product-card">
    <div class="card-img">
      ${p.img
        ? `<img src="${p.img}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;border-radius:16px 16px 0 0;display:block;" onclick="openLightbox(${JSON.stringify(p.img).replace(/"/g,'&quot;')},${JSON.stringify(p.name).replace(/"/g,'&quot;')})" onerror="this.outerHTML='<span>${p.emoji}</span>'"/>`
        : `<span>${p.emoji}</span>`
      }
      ${p.badge ? `<span class="card-badge">${p.badge}</span>` : ''}
    </div>
    <div class="card-body">
      <div class="card-name">${p.name}</div>
      <div class="card-desc">${p.desc}</div>
      ${sizeOpts}
      <div class="card-footer">
        <div class="card-price">$<span id="price-${p.id}">${basePrice}</span> ${priceLabel}</div>
        ${tab === 'tortas' && p.id === 't1'
          ? `<button class="btn-add" onclick="document.getElementById('configurator').scrollIntoView({behavior:'smooth'})">🎂 Configure</button>`
          : `<button class="btn-add" onclick="addToCart('${p.id}','${tab}')">+ Add</button>`
        }
      </div>
    </div>
  </div>`;
}

function updateCardPrice(id, idx, sizes) {
  const s = typeof sizes === 'string' ? JSON.parse(sizes.replace(/'/g,'"')) : sizes;
  document.getElementById('price-'+id).textContent = s[idx].price;
}

function addToCart(id, tab) {
  const p = PRODUCTS[tab].find(x => x.id === id);
  if (!p) return;
  const selEl = document.getElementById('sel-'+id);
  let name = p.name, price = p.price || 0, detail = '';
  if (p.sizes && selEl) {
    const s = p.sizes[selEl.value];
    price = s.price;
    detail = s.label;
  } else if (p.unit) {
    detail = p.unit;
  }
  pushToCart({ id: id+'_'+Date.now(), name, emoji: p.emoji, detail, price });
}

// ── CAKE CONFIGURATOR ─────────────────────────────
function toggleStep(n) {
  const el = document.getElementById('cs'+n);
  el.classList.toggle('active');
}

function pickSize(btn, label, price) {
  document.querySelectorAll('#cs1 .chip').forEach(c => c.classList.remove('sel'));
  btn.classList.add('sel');
  cakeOrder.size = label;
  cakeOrder.sizePrice = price;
  document.getElementById('sv1').textContent = label.split('–')[0].trim();
  document.getElementById('ps-size').textContent = label;
  updateTotal();
  openNextStep(1);
}

function pick(btn, field, svId) {
  const parent = btn.closest('.step-opts');
  parent.querySelectorAll('.chip').forEach(c => c.classList.remove('sel'));
  btn.classList.add('sel');
  const val = btn.textContent.trim();
  cakeOrder[field] = val;
  document.getElementById(svId).textContent = val.substring(0,18);
  // update preview
  const map = { flavor:'ps-flavor', filling:'ps-filling', deco:'ps-deco' };
  if (map[field]) document.getElementById(map[field]).textContent = val;
  openNextStep(parseInt(btn.closest('.config-step').id.replace('cs','')));
}

function pickColor(btn, name, hex) {
  const parent = btn.closest('.step-opts');
  parent.querySelectorAll('.color-dot').forEach(c => c.classList.remove('sel'));
  btn.classList.add('sel');
  cakeOrder.color = name;
  document.getElementById('sv5').textContent = name;
  document.getElementById('ps-color').textContent = name;
  
  // update SVG
  document.getElementById('frosting-main').style.fill = hex;
  document.getElementById('frosting-drip').style.fill = hex;
  document.getElementById('frosting-drip').style.stroke = hex;
  
  openNextStep(5);
}

function pickDate(val) {
  if (!val) return;
  const d = new Date(val+'T00:00:00');
  const fmt = d.toLocaleDateString('en-US',{weekday:'long',year:'numeric',month:'long',day:'numeric'});
  cakeOrder.date = fmt;
  document.getElementById('sv6').textContent = d.toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'});
  document.getElementById('ps-date').textContent = fmt;
}

function openNextStep(current) {
  const next = document.getElementById('cs'+(current+1));
  if (next && !next.classList.contains('active')) {
    next.classList.add('active');
    document.getElementById('cs'+current).classList.add('done');
  }
}

function updateTotal() {
  document.getElementById('ps-total').textContent = '$'+cakeOrder.sizePrice;
}

function orderCake() {
  const o = cakeOrder;
  if (!o.size) { alert('⚠️ Please select the size of your cake first'); return; }
  const msg =
    `🎂 *CAKE ORDER — Dulce Amorito Bakery*\n\n` +
    `📏 Size: ${o.size}\n` +
    `🍰 Flavor: ${o.flavor || 'To be decided'}\n` +
    `🍯 Filling: ${o.filling || 'To be decided'}\n` +
    `🎨 Decoration: ${o.deco || 'To be decided'}\n` +
    `🖌️ Color: ${o.color || 'To be decided'}\n` +
    `📅 Event Date: ${o.date || 'To be decided'}\n` +
    `💰 Estimated Price: $${o.sizePrice}\n\n` +
    `¡Hola! I would like to confirm this order 🌸`;
  openWA(msg);
}

function addCakeToCart() {
  const o = cakeOrder;
  if (!o.size) { alert('Please select the size first'); return; }
  pushToCart({
    id: 'cake_'+Date.now(),
    name: 'Custom Cake',
    emoji: '🎂',
    detail: `${o.size} · ${o.flavor||'—'} · ${o.color||'—'}`,
    price: o.sizePrice
  });
  showToast('✅ Cake added to cart');
}

// ── CART ──────────────────────────────────────────
function pushToCart(item) {
  cart.push(item);
  saveCart();
  updateCartUI();
  showToast(`✅ ${item.name} added`);
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
  updateCartUI();
}

function clearCart() {
  if (!cart.length) return;
  cart = [];
  saveCart();
  updateCartUI();
}

function saveCart() {
  localStorage.setItem('da_cart', JSON.stringify(cart));
}

function updateCartUI() {
  const count = cart.length;
  const total = cart.reduce((s,i) => s + (i.price||0), 0);

  // FAB count
  const badge = document.getElementById('cart-count');
  badge.textContent = count;
  badge.classList.toggle('hidden', count === 0);

  // Total
  document.getElementById('cart-total').textContent = '$'+total;

  // Items
  const container = document.getElementById('cart-items');
  if (!count) {
    container.innerHTML = `<div class="cart-empty"><span>🛒</span>Your cart is empty.<br/><small>Add products from the menu or build your cake.</small></div>`;
    return;
  }
  container.innerHTML = cart.map(i => `
    <div class="cart-item">
      <span class="cart-item-icon">${i.emoji}</span>
      <div class="cart-item-info">
        <div class="cart-item-name">${i.name}</div>
        ${i.detail ? `<div class="cart-item-detail">${i.detail}</div>` : ''}
      </div>
      <span class="cart-item-price">$${i.price}</span>
      <button class="cart-item-del" onclick="removeFromCart('${i.id}')" title="Eliminar">✕</button>
    </div>
  `).join('');
}

function toggleCart() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('overlay');
  drawer.classList.toggle('open');
  overlay.classList.toggle('show');
}

function checkoutWhatsApp() {
  if (!cart.length) { alert('⚠️ Your cart is empty'); return; }
  const total = cart.reduce((s,i) => s + (i.price||0), 0);
  const lines = cart.map(i => `• ${i.name}${i.detail ? ' (' + i.detail + ')' : ''} — $${i.price}`).join('\n');
  const msg =
    `🎂 *ORDER — Dulce Amorito Bakery*\n\n` +
    `📋 My order:\n${lines}\n\n` +
    `💰 Estimated Total: $${total}\n\n` +
    `¡Hola! I would like to confirm this order 🌸`;
  openWA(msg);
}

// ── CONTACT ───────────────────────────────────────
function sendContact() {
  const name = document.getElementById('cf-name').value.trim();
  const event = document.getElementById('cf-event').value;
  const date = document.getElementById('cf-date').value;
  const msg = document.getElementById('cf-msg').value.trim();
  const text =
    `🎂 *Inquiry — Dulce Amorito Bakery*\n\n` +
    `👤 Name: ${name || '—'}\n` +
    `🎉 Event: ${event || '—'}\n` +
    `📅 Date: ${date || '—'}\n\n` +
    `💬 Message:\n${msg || '—'}\n\n` +
    `¡Hola! I would like more information 🌸`;
  openWA(text);
}

// ── TESTIMONIALS ──────────────────────────────────
function renderTestimonials() {
  document.getElementById('testi-grid').innerHTML = TESTIMONIALS.map(t => `
    <div class="testi-card">
      <div class="stars">★★★★★</div>
      <p class="testi-text">"${t.text}"</p>
      <div class="testi-author">
        <div class="testi-avatar" style="background:${t.color}">${t.name[0]}</div>
        <div>
          <div class="testi-name">${t.name}</div>
          <div class="testi-loc">${t.loc}</div>
        </div>
      </div>
    </div>
  `).join('');
}

// ── MOBILE MENU ───────────────────────────────────
function toggleMenu() {
  const links = document.querySelector('.nav-links');
  if (links.style.display === 'flex') {
    links.style.display = '';
  } else {
    links.style.cssText = 'display:flex;flex-direction:column;position:absolute;top:70px;left:0;right:0;background:#fff;padding:1rem 2rem;gap:1rem;box-shadow:0 8px 24px rgba(0,0,0,.1);z-index:998';
  }
}

// ── TOAST ─────────────────────────────────────────
function showToast(msg) {
  const t = document.createElement('div');
  t.textContent = msg;
  Object.assign(t.style, {
    position:'fixed', bottom:'6rem', left:'50%', transform:'translateX(-50%)',
    background:'#2a1a22', color:'#fff', padding:'.7rem 1.4rem',
    borderRadius:'50px', fontSize:'.85rem', fontWeight:'600',
    zIndex:'9999', opacity:'1', transition:'opacity .4s', whiteSpace:'nowrap',
    boxShadow:'0 4px 20px rgba(0,0,0,.25)'
  });
  document.body.appendChild(t);
  setTimeout(() => { t.style.opacity = '0'; setTimeout(() => t.remove(), 400); }, 2200);
}

// ── LIGHTBOX + GALLERY NAVIGATION ─────────────────
const GALLERY_IMGS = [
  'imagenes/dulce-1.png',  'imagenes/dulce-2.png',  'imagenes/dulce-3.png',
  'imagenes/dulce-4.png',  'imagenes/dulce-5.png',  'imagenes/dulce-6.png',
  'imagenes/dulce-7.png',  'imagenes/dulce-8.png',  'imagenes/dulce-9.png',
  'imagenes/dulce-10.png', 'imagenes/dulce-11.png', 'imagenes/dulce-12.png',
  'imagenes/dulce-13.png', 'imagenes/dulce-14.png', 'imagenes/dulce-15.png',
  'imagenes/dulce-16.png', 'imagenes/dulce-17.png', 'imagenes/dulce-18.png',
  'imagenes/dulce-19.png', 'imagenes/dulce-23.png'
];

let _scrollY      = 0;
let _galleryIdx   = 0;   // current photo index in gallery
let _isGallery    = false; // true when navigating gallery, false for single-image lightbox

function _setLightboxImg(src, caption, counter) {
  const img = document.getElementById('lightbox-img');
  const cap = document.getElementById('lightbox-caption');
  const cnt = document.getElementById('lightbox-counter');
  // Fade out → swap → fade in
  img.style.opacity = '0';
  setTimeout(() => {
    img.src = src;
    img.onload = () => { img.style.opacity = '1'; };
    // If already cached, onload may not fire — force it
    if (img.complete) img.style.opacity = '1';
  }, 150);
  cap.textContent = caption || '';
  cnt.textContent = counter || '';
  // Show/hide nav arrows
  document.getElementById('lb-prev').style.display = _isGallery ? 'flex' : 'none';
  document.getElementById('lb-next').style.display = _isGallery ? 'flex' : 'none';
}

function openGallery(idx) {
  _isGallery  = true;
  _galleryIdx = idx;
  const lb = document.getElementById('lightbox');
  document.getElementById('lightbox-img').style.opacity = '0';
  document.getElementById('lightbox-img').src = GALLERY_IMGS[idx];
  document.getElementById('lightbox-img').style.opacity = '1';
  document.getElementById('lightbox-caption').textContent = 'Our Creations';
  document.getElementById('lightbox-counter').textContent = `${idx + 1} / ${GALLERY_IMGS.length}`;
  document.getElementById('lb-prev').style.display = 'flex';
  document.getElementById('lb-next').style.display = 'flex';
  lb.classList.add('active');
  _lockScroll();
}

function openLightbox(src, caption) {
  _isGallery = false;
  const lb  = document.getElementById('lightbox');
  document.getElementById('lightbox-img').src = src;
  document.getElementById('lightbox-img').style.opacity = '1';
  document.getElementById('lightbox-caption').textContent = caption || '';
  document.getElementById('lightbox-counter').textContent = '';
  document.getElementById('lb-prev').style.display = 'none';
  document.getElementById('lb-next').style.display = 'none';
  lb.classList.add('active');
  _lockScroll();
}

// Only lock scroll on desktop — on mobile the fixed lightbox already covers
// the full viewport, so no lock is needed and we avoid the jarring jump on close.
let _scrollLocked = false;
function _lockScroll() {
  if (window.innerWidth > 900) {
    _scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top      = `-${_scrollY}px`;
    document.body.style.width    = '100%';
    _scrollLocked = true;
  } else {
    _scrollLocked = false;  // mobile: no lock, no jump
  }
}

function galleryNav(dir) {
  if (!_isGallery) return;
  _galleryIdx = (_galleryIdx + dir + GALLERY_IMGS.length) % GALLERY_IMGS.length;
  _setLightboxImg(
    GALLERY_IMGS[_galleryIdx],
    'Our Creations',
    `${_galleryIdx + 1} / ${GALLERY_IMGS.length}`
  );
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  lb.classList.remove('active');  // starts opacity fade-out

  if (_scrollLocked) {
    // Desktop: restore scroll position hidden behind the fade animation
    setTimeout(() => {
      document.documentElement.style.scrollBehavior = 'auto';
      document.body.style.position = '';
      document.body.style.top      = '';
      document.body.style.width    = '';
      window.scrollTo({ top: _scrollY, behavior: 'instant' });
    }, 300);
    setTimeout(() => {
      document.getElementById('lightbox-img').src = '';
      document.documentElement.style.scrollBehavior = '';
      _scrollLocked = false;
    }, 420);
  } else {
    // Mobile: just fade out — no scroll lock was applied, so no jump ever happens
    setTimeout(() => { document.getElementById('lightbox-img').src = ''; }, 380);
  }
}

// ── Keyboard navigation ─────────────────────────────
document.addEventListener('keydown', e => {
  if (!document.getElementById('lightbox').classList.contains('active')) return;
  if (e.key === 'Escape')      closeLightbox();
  if (e.key === 'ArrowRight')  galleryNav(1);
  if (e.key === 'ArrowLeft')   galleryNav(-1);
});

// ── Touch swipe navigation (mobile) ────────────────
// _swipeHandled prevents the synthetic click (fired after touchend on mobile)
// from accidentally closing the lightbox right after a swipe.
let _touchStartX  = 0;
let _touchStartY  = 0;
let _swipeHandled = false;

(function attachSwipe() {
  const lb = document.getElementById('lightbox');
  if (!lb) return;

  lb.addEventListener('touchstart', e => {
    _touchStartX  = e.changedTouches[0].clientX;
    _touchStartY  = e.changedTouches[0].clientY;
    _swipeHandled = false;
  }, { passive: true });

  lb.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - _touchStartX;
    const dy = e.changedTouches[0].clientY - _touchStartY;
    // Only count as a swipe if horizontal movement clearly dominates vertical
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5 && _isGallery) {
      _swipeHandled = true;
      galleryNav(dx < 0 ? 1 : -1);
      // Reset flag after the synthetic click has had time to fire (~300ms)
      setTimeout(() => { _swipeHandled = false; }, 400);
    }
  }, { passive: true });
})();

// Called by onclick on the lightbox backdrop — skips close if a swipe just happened
function handleLightboxClick() {
  if (_swipeHandled) return;
  closeLightbox();
}
