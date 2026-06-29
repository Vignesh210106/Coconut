/* =========================================================================
   THANJAVUR FRESH COCONUTS — Design tokens
   Palette grounded in the subject: husk brown, coir tan, coconut-water
   white, palm green, and a terracotta accent pulled from Thanjavur's
   temple brickwork.
   ========================================================================= */
:root {
  --husk-brown: #3D2817;
  --husk-brown-light: #5A3D26;
  --coir-tan: #C9A66B;
  --coir-tan-light: #E4D2AC;
  --coconut-white: #F5F3ED;
  --coconut-white-dim: #ECE8DC;
  --palm-green: #4A6741;
  --palm-green-dark: #344A2D;
  --temple-terracotta: #B5542D;
  --temple-terracotta-dark: #8F3F1F;
  --ink: #2A1F15;
  --ink-soft: #5C4F40;
  --white: #FFFFFF;

  --font-display: "Fraunces", Georgia, serif;
  --font-body: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: "JetBrains Mono", monospace;

  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 18px;

  --shadow-soft: 0 4px 18px rgba(61, 40, 23, 0.08);
  --shadow-card: 0 8px 28px rgba(61, 40, 23, 0.12);

  --max-width: 1180px;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }

body {
  margin: 0;
  font-family: var(--font-body);
  background: var(--coconut-white);
  color: var(--ink);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

img, svg { max-width: 100%; display: block; }
a { color: inherit; text-decoration: none; }

.section-inner {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 24px;
}

.section-title {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: clamp(1.8rem, 3.2vw, 2.6rem);
  color: var(--husk-brown);
  margin: 0 0 12px;
  letter-spacing: -0.01em;
}

.section-sub {
  font-size: 1.05rem;
  color: var(--ink-soft);
  max-width: 620px;
  margin: 0 0 40px;
}

/* =========================================================================
   BUTTONS
   ========================================================================= */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: var(--radius-sm);
  font-weight: 600;
  font-size: 0.95rem;
  border: 2px solid transparent;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease;
  font-family: var(--font-body);
}
.btn:hover { transform: translateY(-1px); }
.btn:focus-visible {
  outline: 3px solid var(--temple-terracotta);
  outline-offset: 2px;
}

.btn-primary {
  background: var(--temple-terracotta);
  color: var(--white);
  box-shadow: 0 4px 14px rgba(181, 84, 45, 0.35);
}
.btn-primary:hover { background: var(--temple-terracotta-dark); }
.btn-primary:disabled {
  background: var(--coir-tan);
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.btn-outline {
  background: transparent;
  border-color: var(--husk-brown);
  color: var(--husk-brown);
}
.btn-outline:hover { background: var(--husk-brown); color: var(--white); }

.btn-lg { padding: 15px 30px; font-size: 1.02rem; }
.btn-block { width: 100%; }

/* =========================================================================
   TOP BAR + HEADER
   ========================================================================= */
.topbar {
  background: var(--husk-brown);
  color: var(--coir-tan-light);
  font-size: 0.85rem;
}
.topbar-inner {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 7px 24px;
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
}
.topbar-link:hover { color: var(--white); }

.site-header {
  background: var(--coconut-white);
  border-bottom: 1px solid rgba(61, 40, 23, 0.1);
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(6px);
}
.header-inner {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 14px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}
.logo {
  display: flex;
  align-items: center;
  gap: 12px;
}
.logo-mark { font-size: 2rem; line-height: 1; }
.logo-text { display: flex; flex-direction: column; }
.logo-title {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 1.15rem;
  color: var(--husk-brown);
}
.logo-tagline {
  font-size: 0.72rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--temple-terracotta);
  font-weight: 600;
}

.main-nav {
  display: flex;
  gap: 32px;
  font-weight: 600;
  font-size: 0.95rem;
}
.main-nav a { color: var(--ink-soft); transition: color 0.15s; }
.main-nav a:hover { color: var(--temple-terracotta); }

.nav-cta { white-space: nowrap; }

@media (max-width: 760px) {
  .main-nav { display: none; }
}

@media (max-width: 480px) {
  .header-inner { padding: 12px 16px; gap: 12px; }
  .logo { gap: 8px; min-width: 0; }
  .logo-mark { font-size: 1.5rem; }
  .logo-title { font-size: 0.92rem; line-height: 1.2; }
  .logo-tagline { font-size: 0.62rem; }
  .nav-cta { padding: 10px 14px; font-size: 0.85rem; white-space: nowrap; flex-shrink: 0; }
  .topbar-inner { gap: 10px 16px; font-size: 0.76rem; }
}

/* =========================================================================
   HERO
   ========================================================================= */
.hero {
  position: relative;
  background: linear-gradient(160deg, var(--coconut-white) 0%, var(--coconut-white-dim) 100%);
  overflow: hidden;
  padding: 80px 0 60px;
}
.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  color: var(--palm-green);
}
.palm-texture { width: 100%; height: 100%; }

.hero-inner {
  position: relative;
  z-index: 1;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 24px;
  text-align: left;
}

.hero-eyebrow {
  font-family: var(--font-mono);
  font-size: 0.82rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--palm-green-dark);
  background: rgba(74, 103, 65, 0.1);
  display: inline-block;
  padding: 6px 14px;
  border-radius: 100px;
  margin: 0 0 24px;
}

.hero-title {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: clamp(2.4rem, 5.5vw, 4.2rem);
  line-height: 1.08;
  color: var(--husk-brown);
  margin: 0 0 24px;
  letter-spacing: -0.015em;
  max-width: 900px;
}
.hero-title-accent { color: var(--temple-terracotta); }

.hero-sub {
  font-size: 1.15rem;
  color: var(--ink-soft);
  max-width: 600px;
  margin: 0 0 36px;
}

.hero-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 56px;
}

.hero-trust {
  display: flex;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
}
.trust-item {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.trust-item strong {
  font-family: var(--font-display);
  font-size: 1.7rem;
  color: var(--palm-green-dark);
}
.trust-item span {
  font-size: 0.85rem;
  color: var(--ink-soft);
}
.trust-divider {
  width: 1px;
  height: 36px;
  background: rgba(61, 40, 23, 0.15);
}
@media (max-width: 600px) {
  .trust-divider { display: none; }
}

/* =========================================================================
   PRICE COMPARISON STRIP — signature element
   ========================================================================= */
.price-strip {
  background: var(--husk-brown);
  color: var(--coconut-white);
  padding: 72px 0;
}
.price-strip .section-title { color: var(--coconut-white); }
.price-strip .section-sub { color: var(--coir-tan-light); }

.compare-chain {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.chain-step {
  background: rgba(245, 243, 237, 0.05);
  border: 1px solid rgba(245, 243, 237, 0.12);
  border-radius: var(--radius-lg);
  padding: 24px 28px;
}
.chain-new {
  background: rgba(74, 103, 65, 0.18);
  border-color: var(--palm-green);
}

.chain-label {
  display: block;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--coir-tan-light);
  margin-bottom: 16px;
}

.chain-nodes {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 16px;
}
.chain-node {
  background: rgba(245, 243, 237, 0.08);
  border: 1px solid rgba(245, 243, 237, 0.18);
  border-radius: 100px;
  padding: 8px 16px;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--coconut-white);
}
.chain-node-you {
  background: var(--temple-terracotta);
  border-color: var(--temple-terracotta);
}
.chain-node-farm {
  background: var(--palm-green);
  border-color: var(--palm-green);
}
.chain-arrow {
  color: var(--coir-tan);
  font-size: 1.1rem;
}
.chain-arrow-direct {
  color: var(--palm-green);
  font-size: 1.4rem;
  font-weight: 700;
}

.chain-price {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 600;
}
.chain-price-old { color: var(--coir-tan); text-decoration: line-through; text-decoration-color: var(--temple-terracotta); }
.chain-price-new { color: #8FD17A; }

@media (min-width: 860px) {
  .compare-chain { flex-direction: row; }
  .chain-step { flex: 1; }
}

/* =========================================================================
   PRODUCTS
   ========================================================================= */
.products { padding: 80px 0; background: var(--coconut-white); }

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 22px;
}

.product-card {
  background: var(--white);
  border: 1px solid rgba(61, 40, 23, 0.08);
  border-radius: var(--radius-lg);
  padding: 26px;
  box-shadow: var(--shadow-soft);
  transition: transform 0.18s ease, box-shadow 0.18s ease;
  display: flex;
  flex-direction: column;
}
.product-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-card);
}

.product-icon { font-size: 2.4rem; margin-bottom: 12px; }

.product-name {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 1.2rem;
  color: var(--husk-brown);
  margin: 0 0 6px;
}

.product-desc {
  font-size: 0.92rem;
  color: var(--ink-soft);
  margin: 0 0 18px;
  flex-grow: 1;
}

.product-price-row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  border-top: 1px dashed rgba(61, 40, 23, 0.15);
  padding-top: 14px;
}
.product-price {
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--temple-terracotta);
}
.product-unit {
  font-size: 0.8rem;
  color: var(--ink-soft);
}
.product-min {
  font-size: 0.78rem;
  color: var(--palm-green-dark);
  font-weight: 600;
  margin-top: 8px;
}

.loading-msg {
  color: var(--ink-soft);
  font-style: italic;
}

/* =========================================================================
   HOW IT WORKS
   ========================================================================= */
.how-it-works {
  background: var(--coconut-white-dim);
  padding: 80px 0;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 24px;
}

.step-card {
  background: var(--white);
  border-radius: var(--radius-md);
  padding: 24px;
  border-left: 4px solid var(--palm-green);
}
.step-num {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--temple-terracotta);
  font-weight: 600;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.step-card h3 {
  font-family: var(--font-display);
  margin: 0 0 8px;
  color: var(--husk-brown);
  font-size: 1.1rem;
}
.step-card p {
  margin: 0;
  font-size: 0.92rem;
  color: var(--ink-soft);
}

/* =========================================================================
   ORDER FORM
   ========================================================================= */
.order-section {
  padding: 80px 0 100px;
  background: var(--coconut-white);
}

.order-inner {
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
}

@media (min-width: 920px) {
  .order-inner {
    grid-template-columns: 0.8fr 1.2fr;
    align-items: start;
  }
}

.order-help {
  background: var(--coir-tan-light);
  border-radius: var(--radius-md);
  padding: 20px;
  margin-top: 24px;
}
.order-help p {
  margin: 0 0 12px;
  font-weight: 600;
  color: var(--husk-brown);
}

.order-form {
  background: var(--white);
  border-radius: var(--radius-lg);
  padding: 32px;
  box-shadow: var(--shadow-card);
  border: 1px solid rgba(61, 40, 23, 0.06);
}

.form-row { margin-bottom: 20px; }
.form-row-split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
@media (max-width: 480px) {
  .form-row-split { grid-template-columns: 1fr; }
}

label {
  display: block;
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--husk-brown);
  margin-bottom: 6px;
}

input[type="text"],
input[type="tel"],
input[type="email"],
input[type="number"],
textarea {
  width: 100%;
  padding: 11px 14px;
  border: 1.5px solid rgba(61, 40, 23, 0.18);
  border-radius: var(--radius-sm);
  font-family: var(--font-body);
  font-size: 0.96rem;
  background: var(--coconut-white);
  color: var(--ink);
  transition: border-color 0.15s ease;
}
input:focus, textarea:focus {
  outline: none;
  border-color: var(--temple-terracotta);
  background: var(--white);
}
textarea { resize: vertical; }

.order-items-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.order-item-row {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 14px;
  border: 1.5px solid rgba(61, 40, 23, 0.12);
  border-radius: var(--radius-sm);
  padding: 12px 14px;
  background: var(--coconut-white);
}
.order-item-info { display: flex; flex-direction: column; }
.order-item-name { font-weight: 600; font-size: 0.93rem; color: var(--husk-brown); }
.order-item-meta { font-size: 0.78rem; color: var(--ink-soft); }

.qty-control {
  display: flex;
  align-items: center;
  gap: 0;
  border: 1.5px solid rgba(61, 40, 23, 0.18);
  border-radius: var(--radius-sm);
  overflow: hidden;
}
.qty-btn {
  background: var(--coir-tan-light);
  border: none;
  width: 32px;
  height: 32px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  color: var(--husk-brown);
}
.qty-btn:hover { background: var(--coir-tan); }
.qty-input {
  width: 50px;
  text-align: center;
  border: none;
  padding: 6px 0;
  font-weight: 600;
  background: var(--white);
}
.qty-input:focus { outline: none; }

.order-total-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  font-family: var(--font-display);
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--husk-brown);
  padding: 16px 0;
  border-top: 1px dashed rgba(61, 40, 23, 0.2);
  margin-bottom: 20px;
}
#orderTotal { color: var(--temple-terracotta); }

.form-message {
  font-size: 0.9rem;
  font-weight: 600;
  margin: 0 0 14px;
  min-height: 1.2em;
}
.form-message.error { color: var(--temple-terracotta-dark); }
.form-message.success { color: var(--palm-green-dark); }

.form-footnote {
  font-size: 0.78rem;
  color: var(--ink-soft);
  text-align: center;
  margin: 14px 0 0;
}

/* =========================================================================
   FOOTER
   ========================================================================= */
.site-footer {
  background: var(--husk-brown);
  color: var(--coir-tan-light);
  padding: 56px 0 0;
}
.footer-inner {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 24px 40px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 36px;
}
@media (min-width: 760px) {
  .footer-inner { grid-template-columns: 1.4fr 1fr 1fr; }
}

.footer-brand {
  display: flex;
  gap: 14px;
  align-items: flex-start;
}
.footer-title {
  font-family: var(--font-display);
  font-size: 1.2rem;
  color: var(--coconut-white);
  margin: 0 0 6px;
}
.footer-tagline {
  font-size: 0.88rem;
  color: var(--coir-tan-light);
  margin: 0;
  max-width: 280px;
}

.footer-contact h4, .footer-hours h4 {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--coir-tan);
  margin: 0 0 14px;
}
.footer-link {
  display: block;
  margin-bottom: 10px;
  font-size: 0.95rem;
  color: var(--coconut-white);
}
.footer-link:hover { color: var(--temple-terracotta); }
.footer-static { color: var(--coir-tan-light); }
.footer-hours p { margin: 0 0 8px; font-size: 0.92rem; }

.footer-bottom {
  border-top: 1px solid rgba(245, 243, 237, 0.12);
  padding: 18px 24px;
  text-align: center;
  font-size: 0.82rem;
  color: var(--coir-tan);
}

/* =========================================================================
   MODAL
   ========================================================================= */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(42, 31, 21, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  padding: 20px;
}
.modal-overlay[hidden] { display: none; }

.modal-card {
  background: var(--white);
  border-radius: var(--radius-lg);
  padding: 36px;
  max-width: 380px;
  text-align: center;
  box-shadow: 0 20px 60px rgba(0,0,0,0.25);
}
.modal-icon { font-size: 3rem; margin-bottom: 12px; }
.modal-card h3 {
  font-family: var(--font-display);
  color: var(--husk-brown);
  margin: 0 0 12px;
  font-size: 1.4rem;
}
.modal-card p { color: var(--ink-soft); margin: 0 0 8px; }
.modal-card .btn { margin-top: 18px; }

/* =========================================================================
   ACCESSIBILITY / MOTION
   ========================================================================= */
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  .btn, .product-card { transition: none; }
}

:focus-visible {
  outline: 3px solid var(--temple-terracotta);
  outline-offset: 2px;
}
