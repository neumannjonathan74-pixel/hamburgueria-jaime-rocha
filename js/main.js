/* =========================================================
   CONFIGURAÇÃO: edite aqui os dados da hamburgueria
   ========================================================= */
const CONFIG = {
  whatsapp: "5554999279500",          // DDI + DDD + número, só dígitos
  ifood: "https://www.ifood.com.br/busca?q=hamburgueria%20jaime%20rocha", // troque pelo link direto da loja no iFood
  // Horários por dia da semana (0 = domingo ... 6 = sábado). Formato "HH:MM-HH:MM".
  horarios: {
    0: [],
    1: ["11:00-14:00", "18:00-23:00"],
    2: ["11:00-14:00", "18:00-23:00"],
    3: ["11:00-14:00", "18:00-23:00"],
    4: ["11:00-14:00", "18:00-23:00"],
    5: ["11:00-14:00", "18:00-23:00"],
    6: ["11:00-14:00", "18:00-23:00"],
  },
};

/* Categorias do cardápio (ordem das abas) */
const CATEGORIAS = [
  { id: "especiais", nome: "Especiais" },
  { id: "hamburgueres", nome: "Hambúrgueres" },
  { id: "torpedos", nome: "Torpedos" },
  { id: "mignon", nome: "Mignon" },
  { id: "batatas", nome: "Batatas" },
  { id: "doces", nome: "Doces & Shakes" },
];

/* Cardápio. Para mostrar preço, troque `preco: null` por um número, ex.: preco: 32.9 */
const CARDAPIO = [
  // Hambúrgueres especiais
  { id: "america", cat: "especiais", nome: "America Burguer", desc: "Hambúrguer de alcatra levemente apimentado ou de vazio da costela magro, queijo, cheddar, cebola crua, pepino agridoce, alface, tomate e maionese. Acompanha batata rústica.", preco: null, selo: "Com rústica" },
  { id: "cebola-caramelizada", cat: "especiais", nome: "Hambúrguer c/ Cebola Caramelizada", desc: "Hambúrguer, queijo, cebola caramelizada, alface, tomate e maionese.", preco: null },
  { id: "alcatra", cat: "especiais", nome: "Hambúrguer de Alcatra", desc: "Hambúrguer de 200g levemente apimentado, ovo, presunto, queijo, alface, tomate e maionese.", preco: null, selo: "200g" },
  { id: "cordeiro", cat: "especiais", nome: "Hambúrguer de Cordeiro", desc: "Hambúrguer de cordeiro, ovo, alface, tomate e maionese.", preco: null },
  { id: "picanha", cat: "especiais", nome: "Hambúrguer de Picanha", desc: "Hambúrguer de picanha, queijo, ovo, alface, tomate e maionese.", preco: null },
  { id: "borrussia", cat: "especiais", nome: "Hambúrguer de Salsichão Borrussia", desc: "Hambúrguer de salsichão Borrussia, ovo, queijo, alface, tomate e maionese.", preco: null },
  { id: "vazio", cat: "especiais", nome: "Hambúrguer de Vazio de Costela Magro", desc: "Hambúrguer de 200g de vazio da costela magro, queijo, ovo, alface, tomate e maionese.", preco: null, selo: "200g" },

  // Hambúrgueres
  { id: "cheese-bacon", cat: "hamburgueres", nome: "Cheese Bacon Salada", desc: "Hambúrguer, bacon, queijo, ovo, alface, tomate e maionese.", preco: null },
  { id: "cheese-tomate-seco", cat: "hamburgueres", nome: "Cheese Burguer Salada Tomate Seco", desc: "Hambúrguer, ovo, presunto, queijo, tomate seco, alface e tomate.", preco: null },
  { id: "cheese-champignon", cat: "hamburgueres", nome: "Cheese Burguer ao Champignon", desc: "Hambúrguer, 2 queijos, champignon, alface, tomate e maionese.", preco: null },
  { id: "cheese-cheddar", cat: "hamburgueres", nome: "Cheese Burguer ao Cheddar", desc: "Hambúrguer, 2 fatias de cheddar, 1 fatia de mussarela, alface e tomate.", preco: null },
  { id: "cheese-burguer-salada", cat: "hamburgueres", nome: "Cheese Burguer Salada", desc: "Hambúrguer, 2 queijos, alface, tomate e maionese.", preco: null },
  { id: "cheese-salada", cat: "hamburgueres", nome: "Cheese Salada", desc: "Hambúrguer, presunto, queijo, alface, tomate e maionese.", preco: null },
  { id: "cheese-salada-acebolado", cat: "hamburgueres", nome: "Cheese Salada Acebolado", desc: "Hambúrguer, presunto, queijo, alface, tomate, cebola e maionese.", preco: null },
  { id: "casa-especial", cat: "hamburgueres", nome: "Hambúrguer Casa Especial", desc: "Hambúrguer, ovo, presunto, queijo, alface, tomate, milho, ervilha, batata palha e maionese.", preco: null, selo: "Da casa" },

  // Torpedos (pão cacetinho 150g)
  { id: "torpedo-picanha-catupiry", cat: "torpedos", nome: "Torpedo Picanha ao Catupiry", desc: "Pão cacetinho 150g, picanha picada, catupiry, 2 queijos, 2 presuntos, tomate, alface e maionese.", preco: null, selo: "O hit" },
  { id: "torpedo-cheese-picanha", cat: "torpedos", nome: "Torpedo Cheese Picanha", desc: "Pão cacetinho 150g, picanha picada, 2 presuntos, 2 queijos, tomate, alface e maionese.", preco: null },
  { id: "torpedo-picanha-acebolado", cat: "torpedos", nome: "Torpedo Picanha Acebolado", desc: "Pão cacetinho 150g, picanha picada, 4 fatias de queijo, tomate, alface, cebola frita e maionese.", preco: null },
  { id: "torpedo-picanha-alho", cat: "torpedos", nome: "Torpedo Picanha ao Alho", desc: "Pão cacetinho 150g, picanha picada, 4 fatias de queijo, tomate, alface, alho frito e maionese.", preco: null },
  { id: "torpedo-casa", cat: "torpedos", nome: "Torpedo da Casa", desc: "Pão cacetinho 150g, hambúrguer, ovo, presunto, queijo, alface, tomate e maionese.", preco: null },
  { id: "torpedo-americano", cat: "torpedos", nome: "Torpedo de Americano", desc: "Pão cacetinho 150g, mignon, ovo, 2 presuntos, 2 queijos, alface, tomate e maionese.", preco: null },
  { id: "torpedo-lombao", cat: "torpedos", nome: "Torpedo Lombão", desc: "Pão cacetinho 150g, lombo, ovo, 2 presuntos, 2 queijos, alface, tomate e maionese.", preco: null },
  { id: "torpedo-frango", cat: "torpedos", nome: "Torpedo de Frango", desc: "Pão cacetinho 150g, frango, ovo, 2 queijos, alface, tomate e maionese.", preco: null },
  { id: "torpedo-calabresa", cat: "torpedos", nome: "Torpedo de Calabresa", desc: "Pão cacetinho 150g, calabresa, ovo, 2 queijos, alface, tomate e maionese.", preco: null },
  { id: "torpedo-coracao", cat: "torpedos", nome: "Torpedo Coração", desc: "Pão cacetinho 150g, coração, ovo, 3 queijos, alface, tomate e maionese.", preco: null },
  { id: "torpedo-atum", cat: "torpedos", nome: "Torpedo Atum", desc: "Pão cacetinho 150g, atum, ovo, queijo, alface, tomate e maionese.", preco: null },
  { id: "torpedo-nuggets", cat: "torpedos", nome: "Torpedo Nuggets", desc: "Pão cacetinho 150g, 6 nuggets, 4 fatias de queijo, ovo, alface, tomate e maionese.", preco: null },

  // Mignon
  { id: "americano", cat: "mignon", nome: "Americano", desc: "Mignon, ovo, presunto, queijo, alface, tomate e maionese.", preco: null },
  { id: "americano-catupiry", cat: "mignon", nome: "Americano ao Catupiry", desc: "Mignon, catupiry, ovo, presunto, queijo, alface, tomate e maionese.", preco: null },
  { id: "cheese-mignon", cat: "mignon", nome: "Cheese Mignon", desc: "Mignon, 2 queijos, alface, tomate e maionese.", preco: null },
  { id: "mignon-acebolado", cat: "mignon", nome: "Mignon Acebolado", desc: "Mignon, ovo, 2 queijos, alface, tomate, cebola frita e maionese.", preco: null },
  { id: "mignon-champignon", cat: "mignon", nome: "Mignon ao Champignon", desc: "Mignon, 2 queijos, champignon, alface, tomate e maionese.", preco: null },
  { id: "mignon-palmito", cat: "mignon", nome: "Mignon ao Palmito", desc: "Mignon, queijos, palmito, alface, tomate e maionese.", preco: null },
  { id: "mignon-tomate-seco", cat: "mignon", nome: "Mignon ao Tomate Seco", desc: "Mignon, tomate seco, 2 queijos, alface, tomate e maionese.", preco: null },

  // Batatas
  { id: "batata-cheddar-bacon", cat: "batatas", nome: "Batata Cheddar e Bacon", desc: "Batata frita coberta com cheddar cremoso e bacon crocante.", preco: null },
  { id: "batata-rustica", cat: "batatas", nome: "Batata Rústica", desc: "Batata com casca, temperada e dourada.", preco: null },
  { id: "batata-sorriso", cat: "batatas", nome: "Batata Sorriso", desc: "A preferida da criançada.", preco: null },
  { id: "batata-1", cat: "batatas", nome: "Porção de Batata (1 pessoa)", desc: "Batata frita sequinha e crocante.", preco: null },
  { id: "batata-2", cat: "batatas", nome: "Porção de Batata (2 pessoas)", desc: "Batata frita sequinha e crocante, para dividir.", preco: null },

  // Doces
  { id: "cheese-choc-preto-california", cat: "doces", nome: "Cheese Chocolate Preto à Califórnia", desc: "Pão, 2 queijos, chocolate Nestlé, abacaxi, pêssego e figo.", preco: null, selo: "Só aqui" },
  { id: "cheese-choc-branco-nozes", cat: "doces", nome: "Cheese Chocolate Branco c/ Nozes", desc: "Pão, 2 queijos, chocolate branco Nestlé e nozes.", preco: null },
  { id: "cheese-choc-preto", cat: "doces", nome: "Cheese Chocolate Preto", desc: "Pão, 2 queijos e chocolate Nestlé.", preco: null },
  { id: "cheese-choc-branco", cat: "doces", nome: "Cheese Chocolate Branco", desc: "Pão, 2 queijos e chocolate branco Nestlé.", preco: null },
  { id: "shake-chocolate", cat: "doces", nome: "Milk-shake de Chocolate", desc: "Cremoso, batido na hora.", preco: null },
  { id: "shake-morango", cat: "doces", nome: "Milk-shake de Morango", desc: "Cremoso, batido na hora.", preco: null },
];

/* Os 4 destaques da seção "Os hits da chapa" */
const DESTAQUES = [
  { id: "torpedo-picanha-catupiry", tag: "O hit da casa", img: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=700&h=600&fit=crop&q=75" },
  { id: "america", tag: "Com batata rústica", img: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=700&h=600&fit=crop&q=75" },
  { id: "vazio", tag: "200g de vazio", img: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=700&h=600&fit=crop&q=75" },
  { id: "cheese-choc-preto-california", tag: "Só tem aqui", img: "https://images.unsplash.com/photo-1511381939415-e44015466834?w=700&h=600&fit=crop&q=75" },
];

/* =========================================================
   A partir daqui é a lógica do site
   ========================================================= */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const byId = Object.fromEntries(CARDAPIO.map((p) => [p.id, p]));
const brl = (v) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
const icon = (name) => `<svg class="ic"><use href="#i-${name}"/></svg>`;
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const waUrl = (msg) => `https://wa.me/${CONFIG.whatsapp}${msg ? `?text=${encodeURIComponent(msg)}` : ""}`;

/* ---------- Links de WhatsApp e iFood ---------- */
$$("[data-wa-link]").forEach((a) => {
  a.href = waUrl(a.dataset.waMsg || "Olá! Vim pelo site da Jaime Rocha.");
  a.target = "_blank";
  a.rel = "noopener";
});
$$("[data-ifood-link]").forEach((a) => (a.href = CONFIG.ifood));
$("[data-year]").textContent = new Date().getFullYear();

/* ---------- Header: sombra ao rolar + menu mobile ---------- */
const header = $("[data-header]");
const nav = $("[data-nav]");
const burger = $("[data-burger]");

const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 10);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

function toggleNav(force) {
  const open = force ?? !nav.classList.contains("is-open");
  if (open) nav.style.top = `${header.getBoundingClientRect().bottom}px`;
  nav.classList.toggle("is-open", open);
  document.body.classList.toggle("nav-open", open);
  burger.setAttribute("aria-expanded", open);
  burger.innerHTML = icon(open ? "x" : "menu");
  document.body.style.overflow = open ? "hidden" : "";
}
burger.addEventListener("click", () => toggleNav());
$$("a", nav).forEach((a) => a.addEventListener("click", () => toggleNav(false)));

/* Link ativo conforme a seção visível */
const sections = $$("main section[id]");
const navLinks = $$(".nav a:not(.btn)");
const spy = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      navLinks.forEach((l) => l.classList.toggle("is-active", l.getAttribute("href") === `#${e.target.id}`));
    });
  },
  { rootMargin: "-45% 0px -50% 0px" }
);
sections.forEach((s) => spy.observe(s));

/* ---------- Horário de funcionamento (fuso de Brasília) ---------- */
const DIAS = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
const toMin = (hhmm) => { const [h, m] = hhmm.split(":").map(Number); return h * 60 + m; };
const fmtH = (hhmm) => { const [h, m] = hhmm.split(":"); return m === "00" ? `${+h}h` : `${+h}h${m}`; };

function agoraSP() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Sao_Paulo", weekday: "short", hour: "numeric", minute: "numeric", hourCycle: "h23",
  }).formatToParts(new Date());
  const get = (t) => parts.find((p) => p.type === t).value;
  const dia = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
  return { dia, min: (+get("hour") % 24) * 60 + +get("minute") };
}

function statusLoja() {
  const { dia, min } = agoraSP();
  for (const faixa of CONFIG.horarios[dia]) {
    const [ini, fim] = faixa.split("-");
    if (min >= toMin(ini) && min < toMin(fim)) return { aberto: true, texto: `Aberto agora · até ${fmtH(fim)}` };
  }
  for (let i = 0; i < 7; i++) {
    const d = (dia + i) % 7;
    for (const faixa of CONFIG.horarios[d]) {
      const ini = faixa.split("-")[0];
      if (i === 0 && toMin(ini) <= min) continue;
      const quando = i === 0 ? "hoje" : i === 1 ? "amanhã" : DIAS[d].toLowerCase();
      return { aberto: false, texto: `Fechado · abre ${quando} às ${fmtH(ini)}` };
    }
  }
  return { aberto: false, texto: "Fechado" };
}

function renderStatus() {
  const st = statusLoja();
  $$("[data-status]").forEach((el) => {
    el.classList.toggle("is-open", st.aberto);
    el.classList.toggle("is-closed", !st.aberto);
    $("[data-status-text]", el).textContent = st.texto;
  });
}

function renderHorarios() {
  const hoje = agoraSP().dia;
  const ordem = [1, 2, 3, 4, 5, 6, 0];
  $("[data-hours]").innerHTML = ordem
    .map((d) => {
      const f = CONFIG.horarios[d];
      const txt = f.length ? f.map((x) => x.split("-").map(fmtH).join(" às ")).join(" · ") : '<span class="off">Fechado</span>';
      return `<li class="${d === hoje ? "is-today" : ""}"><strong>${DIAS[d]}${d === hoje ? " (hoje)" : ""}</strong><span>${txt}</span></li>`;
    })
    .join("");
}
renderStatus();
renderHorarios();
setInterval(renderStatus, 60_000);

/* ---------- Destaques ---------- */
const catNome = Object.fromEntries(CATEGORIAS.map((c) => [c.id, c.nome]));

$("[data-hits]").innerHTML = DESTAQUES.map(({ id, tag, img }, i) => {
  const p = byId[id];
  return `
    <article class="hit reveal" style="transition-delay:${i * 80}ms">
      <div class="hit__media">
        <span class="hit__tag">${esc(tag)}</span>
        <img src="${img}" alt="${esc(p.nome)}" loading="lazy">
      </div>
      <div class="hit__body">
        <h3>${esc(p.nome)}</h3>
        <p>${esc(p.desc)}</p>
        <div class="hit__foot">
          ${p.preco != null ? `<span class="hit__price">${brl(p.preco)}</span>` : `<span class="hit__cat">${esc(catNome[p.cat])}</span>`}
          <button class="add-btn" data-add="${id}" aria-label="Adicionar ${esc(p.nome)} ao pedido">${icon("plus")}</button>
        </div>
      </div>
    </article>`;
}).join("");

/* ---------- Cardápio com abas ---------- */
const tabsEl = $("[data-tabs]");
const menuEl = $("[data-menu]");
let catAtual = CATEGORIAS[0].id;

tabsEl.innerHTML = CATEGORIAS.map(
  (c) => `<button class="tab" role="tab" data-tab="${c.id}" aria-selected="${c.id === catAtual}">${esc(c.nome)}</button>`
).join("");

function renderMenu(cat) {
  catAtual = cat;
  $$(".tab", tabsEl).forEach((t) => t.setAttribute("aria-selected", t.dataset.tab === cat));
  const itens = CARDAPIO.filter((p) => p.cat === cat);
  menuEl.innerHTML = itens.map((p, i) => `
    <div class="item">
      <span class="item__n">${String(i + 1).padStart(2, "0")}</span>
      <div>
        <div class="item__name">
          <h3>${esc(p.nome)}${p.selo ? `<span class="item__badge">${esc(p.selo)}</span>` : ""}</h3>
          ${p.preco != null ? `<span class="dots"></span><span class="price">${brl(p.preco)}</span>` : ""}
        </div>
        <p>${esc(p.desc)}</p>
      </div>
      <button class="add-btn" data-add="${p.id}" aria-label="Adicionar ${esc(p.nome)} ao pedido">${icon("plus")}</button>
    </div>`).join("");
  menuEl.classList.remove("is-switching");
  void menuEl.offsetWidth;
  menuEl.classList.add("is-switching");
}
renderMenu(catAtual);

tabsEl.addEventListener("click", (e) => {
  const t = e.target.closest("[data-tab]");
  if (t) renderMenu(t.dataset.tab);
});

/* Atalhos de categoria (barra de ícones e rodapé) */
$$("[data-cat-jump]").forEach((el) =>
  el.addEventListener("click", (e) => {
    e.preventDefault();
    renderMenu(el.dataset.catJump);
    $("#cardapio").scrollIntoView({ behavior: "smooth" });
    $(`[data-tab="${el.dataset.catJump}"]`)?.scrollIntoView({ inline: "center", block: "nearest" });
  })
);

/* ---------- Carrinho ---------- */
const STORE_KEY = "jr-pedido";
let carrinho = {};
try { carrinho = JSON.parse(localStorage.getItem(STORE_KEY)) || {}; } catch { carrinho = {}; }
Object.keys(carrinho).forEach((id) => { if (!byId[id]) delete carrinho[id]; });

const drawer = $("[data-drawer]");
const overlay = $("[data-drawer-overlay]");
const form = $("[data-cart-form]");
const sendBtn = $("[data-send-order]");

function salvar() {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(carrinho)); } catch {}
}

function totalItens() {
  return Object.values(carrinho).reduce((a, b) => a + b, 0);
}

function renderCarrinho() {
  const ids = Object.keys(carrinho);
  const n = totalItens();

  $$("[data-cart-count]").forEach((el) => { el.textContent = n; el.hidden = n === 0; });
  $("[data-fab-cart]").hidden = n === 0;

  $("[data-cart-list]").innerHTML = ids.map((id) => {
    const p = byId[id];
    return `
      <li>
        <div class="ci__info">
          <strong>${esc(p.nome)}</strong>
          <small>${p.preco != null ? brl(p.preco * carrinho[id]) : esc(catNome[p.cat])}</small>
        </div>
        <div class="qty">
          <button data-dec="${id}" aria-label="Diminuir">${icon("minus")}</button>
          <span>${carrinho[id]}</span>
          <button data-inc="${id}" aria-label="Aumentar">${icon("plus")}</button>
        </div>
      </li>`;
  }).join("");

  $("[data-cart-empty]").hidden = n > 0;
  form.classList.toggle("is-hidden", n === 0);
  sendBtn.disabled = n === 0;

  const todosComPreco = ids.length > 0 && ids.every((id) => byId[id].preco != null);
  $("[data-cart-total]").hidden = !todosComPreco;
  if (todosComPreco) {
    $("[data-cart-total-value]").textContent = brl(ids.reduce((s, id) => s + byId[id].preco * carrinho[id], 0));
  }
}

function adicionar(id, btn) {
  carrinho[id] = (carrinho[id] || 0) + 1;
  salvar();
  renderCarrinho();
  toast(`<b>+1</b> ${esc(byId[id].nome)} no pedido`);
  if (btn) { btn.classList.remove("is-added"); void btn.offsetWidth; btn.classList.add("is-added"); }
}

document.addEventListener("click", (e) => {
  const add = e.target.closest("[data-add]");
  if (add) return adicionar(add.dataset.add, add);

  const inc = e.target.closest("[data-inc]");
  if (inc) { carrinho[inc.dataset.inc]++; salvar(); return renderCarrinho(); }

  const dec = e.target.closest("[data-dec]");
  if (dec) {
    const id = dec.dataset.dec;
    if (--carrinho[id] <= 0) delete carrinho[id];
    salvar();
    return renderCarrinho();
  }
});

function abrirCarrinho() {
  drawer.classList.add("is-open");
  drawer.setAttribute("aria-hidden", "false");
  overlay.hidden = false;
  document.body.style.overflow = "hidden";
  setTimeout(() => $("[data-close-cart]").focus(), 50);
}
function fecharCarrinho() {
  drawer.classList.remove("is-open");
  drawer.setAttribute("aria-hidden", "true");
  overlay.hidden = true;
  document.body.style.overflow = "";
}
$$("[data-open-cart]").forEach((b) => b.addEventListener("click", abrirCarrinho));
$("[data-close-cart]").addEventListener("click", fecharCarrinho);
overlay.addEventListener("click", fecharCarrinho);
document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  fecharCarrinho();
  if (nav.classList.contains("is-open")) toggleNav(false);
});

sendBtn.addEventListener("click", () => {
  if (!form.reportValidity()) return;
  const nome = form.nome.value.trim();
  const obs = form.obs.value.trim();
  const ids = Object.keys(carrinho);

  const linhas = ids.map((id) => {
    const p = byId[id];
    return `• ${carrinho[id]}x ${p.nome}${p.preco != null ? ` (${brl(p.preco * carrinho[id])})` : ""}`;
  });

  let msg = `Olá, Jaime Rocha! Quero fazer um pedido para *retirada no balcão*:\n\n${linhas.join("\n")}`;
  if (ids.every((id) => byId[id].preco != null)) {
    msg += `\n\n*Total:* ${brl(ids.reduce((s, id) => s + byId[id].preco * carrinho[id], 0))}`;
  }
  msg += `\n\n*Nome:* ${nome}`;
  if (obs) msg += `\n*Observações:* ${obs}`;

  window.open(waUrl(msg), "_blank", "noopener");
});

renderCarrinho();

/* ---------- Toast ---------- */
const toastEl = $("[data-toast]");
let toastT;
function toast(html) {
  toastEl.innerHTML = html;
  toastEl.classList.add("is-show");
  clearTimeout(toastT);
  toastT = setTimeout(() => toastEl.classList.remove("is-show"), 2200);
}

/* ---------- Hambúrguer que se abre com a rolagem (Motion) ---------- */
(function burgerScroll() {
  const hero = $("[data-hero]");
  const burger = $("[data-stack]");
  if (!hero || !burger) return;

  const ORIGINAL_H = 960; // altura do quadro do lanche aberto (px), base do data-close
  // tamanho do lanche fechado; no celular um pouco menor para a alface não encostar na borda
  const scaleClosed = () => (innerWidth <= 600 ? 0.92 : 1.06);
  const scaleOpen = () => (innerWidth <= 600 ? 0.93 : 1); // aberto precisa caber inteiro
  const CROSSFADE = 0.12; // trecho inicial em que a foto fechada vira as camadas (alinhadas por baixo)
  const layers = $$("[data-close]", burger).map((el) => ({ el, close: +el.dataset.close }));
  const closedImg = $("[data-stack-closed]", burger);
  const labels = $$("[data-stack-label]", burger);
  const shadow = $("[data-stack-shadow]", burger);
  const hint = $("[data-scroll-hint]");

  const clamp01 = (v) => Math.min(1, Math.max(0, v));
  const smooth = (t) => t * t * (3 - 2 * t);
  // rolagem 0 → 1 vira abertura 0 → 1; o último trecho segura o lanche aberto
  const openFromScroll = (p) => smooth(clamp01((p - 0.04) / 0.66));

  let unit = burger.clientHeight / ORIGINAL_H;
  let open = 0;       // 0 = fechado, 1 = aberto
  let scrollP = 0;    // progresso bruto da rolagem na seção
  let time = 0;       // relógio da flutuação

  function render() {
    const e = clamp01(open);
    // fechado (montado) aparece grande; aberto encolhe para caber inteiro na tela
    const sc = scaleClosed();
    burger.style.transform = `scale(${(sc + (scaleOpen() - sc) * e).toFixed(4)})`;

    // 1) a foto do lanche fechado some enquanto as camadas (ainda juntas) aparecem no lugar
    const fade = smooth(clamp01(e / CROSSFADE));
    closedImg.style.opacity = (1 - fade).toFixed(3);

    // 2) as camadas se separam até a posição da foto aberta (começam a se mexer junto com a troca)
    const sep = smooth(clamp01((e - CROSSFADE * 0.25) / (1 - CROSSFADE * 0.25)));
    const bob = Math.sin(time * 1.1) * 8 * e; // flutuação leve, igual para todas
    // as camadas ficam opacas logo no início, por baixo da foto: sem "apagão" na troca
    const layerOpacity = e > 0.002 ? Math.min(1, fade * 5 + 0.2) : 0;
    for (const L of layers) {
      const y = L.close * (1 - sep) * unit + bob;
      L.el.style.opacity = layerOpacity.toFixed(3);
      L.el.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0)`;
    }

    const labelIn = clamp01((e - 0.6) / 0.3);
    labels.forEach((l, i) => {
      const a = clamp01(labelIn * 1.4 - i * 0.12);
      l.style.opacity = a;
      l.style.transform = `translate(${((1 - a) * 10).toFixed(1)}px, -50%)`;
    });

    // a sombra acompanha o pão de baixo
    const base = layers[0];
    const baseY = base.close * (1 - sep) * unit;
    shadow.style.transform = `translateY(${baseY.toFixed(2)}px) scaleX(${(1 - 0.3 * e).toFixed(3)})`;
    shadow.style.opacity = (1 - 0.45 * e).toFixed(3);
    if (hint) hint.style.opacity = (1 - clamp01(scrollP * 8)).toFixed(3);
  }

  new ResizeObserver(() => { unit = burger.clientHeight / ORIGINAL_H; render(); }).observe(burger);

  // lanche sempre aberto; só flutua de leve (sem abrir com a rolagem)
  hero.classList.add("is-still");
  open = 1;
  scrollP = 1;
  render();
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const M = window.Motion;

  // entrada do texto do hero ao carregar (em sequência)
  if (M && M.animate && M.stagger) {
    M.animate("[data-intro]", { opacity: [0, 1], y: [24, 0] }, { duration: 0.7, delay: M.stagger(0.08, { startDelay: 0.1 }), ease: [0.16, 1, 0.3, 1] });
    M.animate(burger, { opacity: [0, 1] }, { duration: 0.8, ease: "easeOut" });
  }

  // flutuação: só roda enquanto o hero está na tela
  const floatLoop = (t) => { time = t / 1000; render(); rafId = requestAnimationFrame(floatLoop); };
  let rafId = 0;
  new IntersectionObserver(([en]) => {
    cancelAnimationFrame(rafId);
    if (en.isIntersecting) rafId = requestAnimationFrame(floatLoop);
  }).observe(hero);

  // no celular, os botões flutuantes somem enquanto o hero (que já tem o botão de WhatsApp) está na tela
  new IntersectionObserver(([en]) => document.body.classList.toggle("in-hero", en.isIntersecting), { threshold: 0.6 }).observe(hero);
})();

/* ---------- Animação de entrada ---------- */
const io = new IntersectionObserver(
  (entries) => entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
  }),
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);
$$(".reveal").forEach((el) => io.observe(el));
