/**
 * Thanjavur Fresh Coconuts — Frontend logic
 * ------------------------------------------
 * Talks to the backend API to:
 *   1. Load the live product list (with prices) and render product cards
 *   2. Render quantity selectors in the order form
 *   3. Calculate the running total as the customer adjusts quantities
 *   4. Submit the order and show a confirmation
 *
 * IMPORTANT: Change API_BASE_URL below once you deploy the backend
 * somewhere other than your own computer (e.g. Render, Railway, a VPS).
 */

// ---------------------------------------------------------------------------
// Configuration — point this at wherever backend/server.js is running.
// During local development this is correct as-is.
// ---------------------------------------------------------------------------
const API_BASE_URL = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
  ? "http://localhost:4000/api"
  : "https://YOUR-BACKEND-DOMAIN.com/api"; // <-- replace after deploying the backend

let PRODUCTS = [];
const quantities = {}; // productId -> qty

// ---------------------------------------------------------------------------
// Load products from backend and render both the showcase grid and
// the order-form quantity selectors.
// ---------------------------------------------------------------------------
async function loadProducts() {
  const grid = document.getElementById("productGrid");
  const orderItems = document.getElementById("orderItems");

  try {
    const res = await fetch(`${API_BASE_URL}/products`);
    if (!res.ok) throw new Error("Failed to load products");
    PRODUCTS = await res.json();

    renderProductGrid();
    renderOrderItems();
  } catch (err) {
    console.error(err);
    const errorHtml = `<p class="loading-msg">
      Couldn't load live prices right now. Please call us directly at
      <a href="tel:7397250301" style="color:var(--temple-terracotta);font-weight:600;">7397250301</a>
      to place your order.
    </p>`;
    grid.innerHTML = errorHtml;
    orderItems.innerHTML = errorHtml;
  }
}

const PRODUCT_ICONS = {
  "tender-coconut": "🥥",
  "dry-coconut": "🌰",
  "coconut-husked-100": "🔪",
  "coconut-bulk-sack": "📦",
};

function renderProductGrid() {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = PRODUCTS.map((p) => `
    <div class="product-card">
      <div class="product-icon">${PRODUCT_ICONS[p.id] || "🥥"}</div>
      <h3 class="product-name">${escapeHtml(p.name)}</h3>
      <p class="product-desc">${escapeHtml(p.description)}</p>
      <div class="product-price-row">
        <span class="product-price">₹${p.price}</span>
        <span class="product-unit">${escapeHtml(p.unit)}</span>
      </div>
      <div class="product-min">Min order: ${p.minOrder} ${p.unit.replace("per ", "")}${p.minOrder > 1 ? "s" : ""}</div>
    </div>
  `).join("");
}

function renderOrderItems() {
  const container = document.getElementById("orderItems");
  container.innerHTML = PRODUCTS.map((p) => {
    quantities[p.id] = 0;
    return `
      <div class="order-item-row">
        <div class="order-item-info">
          <span class="order-item-name">${escapeHtml(p.name)}</span>
          <span class="order-item-meta">₹${p.price} ${escapeHtml(p.unit)} · min ${p.minOrder}</span>
        </div>
        <div class="qty-control">
          <button type="button" class="qty-btn" data-action="dec" data-id="${p.id}" aria-label="Decrease quantity">−</button>
          <input type="number" class="qty-input" id="qty-${p.id}" data-id="${p.id}" value="0" min="0" step="1" inputmode="numeric" aria-label="Quantity for ${escapeHtml(p.name)}" />
          <button type="button" class="qty-btn" data-action="inc" data-id="${p.id}" aria-label="Increase quantity">+</button>
        </div>
      </div>
    `;
  }).join("");

  // Wire up +/- buttons
  container.querySelectorAll(".qty-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      const product = PRODUCTS.find((p) => p.id === id);
      const step = product ? product.minOrder : 1;
      const current = quantities[id] || 0;

      if (btn.dataset.action === "inc") {
        quantities[id] = current === 0 ? step : current + step;
      } else {
        quantities[id] = Math.max(0, current - step);
      }
      document.getElementById(`qty-${id}`).value = quantities[id];
      updateTotal();
    });
  });

  // Wire up direct number input
  container.querySelectorAll(".qty-input").forEach((input) => {
    input.addEventListener("input", () => {
      const id = input.dataset.id;
      const val = Math.max(0, parseInt(input.value, 10) || 0);
      quantities[id] = val;
      updateTotal();
    });
  });
}

function updateTotal() {
  let total = 0;
  for (const p of PRODUCTS) {
    const qty = quantities[p.id] || 0;
    total += qty * p.price;
  }
  document.getElementById("orderTotal").textContent = `₹${total}`;
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

// ---------------------------------------------------------------------------
// Form submission
// ---------------------------------------------------------------------------
function setFormMessage(text, type) {
  const el = document.getElementById("formMessage");
  el.textContent = text;
  el.className = `form-message ${type || ""}`;
}

async function handleOrderSubmit(e) {
  e.preventDefault();
  setFormMessage("", "");

  const customerName = document.getElementById("customerName").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const address = document.getElementById("address").value.trim();
  const notes = document.getElementById("notes").value.trim();

  // ---- Client-side validation (fast feedback; server re-validates too) ----
  if (!customerName) {
    setFormMessage("Please enter your full name.", "error");
    return;
  }
  if (!/^[0-9]{10}$/.test(phone)) {
    setFormMessage("Please enter a valid 10-digit phone number.", "error");
    return;
  }
  if (!address) {
    setFormMessage("Please enter your delivery address.", "error");
    return;
  }

  const items = PRODUCTS
    .filter((p) => (quantities[p.id] || 0) > 0)
    .map((p) => ({ id: p.id, qty: quantities[p.id] }));

  if (items.length === 0) {
    setFormMessage("Please select at least one item to order.", "error");
    return;
  }

  // Check minimum order quantities client-side for a fast error message
  for (const item of items) {
    const product = PRODUCTS.find((p) => p.id === item.id);
    if (product && item.qty < product.minOrder) {
      setFormMessage(
        `Minimum order for ${product.name} is ${product.minOrder} (${product.unit}).`,
        "error"
      );
      return;
    }
  }

  const submitBtn = document.getElementById("submitBtn");
  submitBtn.disabled = true;
  submitBtn.textContent = "Placing order…";

  try {
    const res = await fetch(`${API_BASE_URL}/orders`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ customerName, phone, email, address, notes, items }),
    });

    const data = await res.json();

    if (!res.ok) {
      setFormMessage(data.error || "Something went wrong. Please try again or call us.", "error");
      submitBtn.disabled = false;
      submitBtn.textContent = "Place Order";
      return;
    }

    showSuccessModal(data.orderId);
    document.getElementById("orderForm").reset();
    Object.keys(quantities).forEach((id) => (quantities[id] = 0));
    renderOrderItems();
    updateTotal();
  } catch (err) {
    console.error(err);
    setFormMessage(
      "Couldn't reach the server. Please check your connection or call us at 7397250301.",
      "error"
    );
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = "Place Order";
  }
}

function showSuccessModal(orderId) {
  document.getElementById("modalOrderId").textContent = orderId;
  document.getElementById("successModal").hidden = false;
}

function hideSuccessModal() {
  document.getElementById("successModal").hidden = true;
}

// ---------------------------------------------------------------------------
// Init
// ---------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  loadProducts();
  document.getElementById("orderForm").addEventListener("submit", handleOrderSubmit);
  document.getElementById("modalCloseBtn").addEventListener("click", hideSuccessModal);
  document.getElementById("successModal").addEventListener("click", (e) => {
    if (e.target.id === "successModal") hideSuccessModal();
  });

  // Phone field: digits only
  document.getElementById("phone").addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/\D/g, "").slice(0, 10);
  });
});
