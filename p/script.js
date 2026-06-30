const products = [
  { category: "T-shirts", name: "Classic White Oxford Tee", price: 29, image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80", isNew: true, featured: true },
  { category: "T-shirts", name: "Vintage Black Graphic Tee", price: 34, image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80", isNew: true, featured: false },
  { category: "T-shirts", name: "Soft Heather Stripe Tee", price: 31, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80", isNew: false, featured: false },
  { category: "T-shirts", name: "Minimalist Navy Round Neck", price: 27, image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80", isNew: false, featured: true },
  { category: "T-shirts", name: "Sunset Coral Oversized Tee", price: 35, image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80", isNew: true, featured: false },
  { category: "T-shirts", name: "Urban Maroon Crewneck", price: 33, image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80", isNew: false, featured: false },
  { category: "T-shirts", name: "Clean Cotton Pocket Tee", price: 30, image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80", isNew: true, featured: false },
  { category: "T-shirts", name: "Stone Wash Relaxed Tee", price: 32, image: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=800&q=80", isNew: false, featured: false },
  { category: "T-shirts", name: "Linen Blend Summer Tee", price: 36, image: "https://images.unsplash.com/photo-1495385794356-15371f348c31?auto=format&fit=crop&w=800&q=80", isNew: true, featured: true },
  { category: "T-shirts", name: "Muted Green Basic Tee", price: 28, image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80", isNew: false, featured: false },

  { category: "Trousers", name: "Tailored Beige Trousers", price: 49, image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80", isNew: true, featured: false },
  { category: "Trousers", name: "Slim Black Utility Trousers", price: 54, image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80", isNew: false, featured: true },
  { category: "Trousers", name: "Soft Olive Cargo Trousers", price: 52, image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80", isNew: true, featured: false },
  { category: "Trousers", name: "Structured Cream Trousers", price: 57, image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80", isNew: false, featured: false },
  { category: "Trousers", name: "Wide Leg Taupe Trousers", price: 55, image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80", isNew: true, featured: false },
  { category: "Trousers", name: "Everyday Navy Trousers", price: 48, image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80", isNew: false, featured: false },
  { category: "Trousers", name: "Pleated Sand Trousers", price: 53, image: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=800&q=80", isNew: true, featured: false },
  { category: "Trousers", name: "Lightweight Khaki Trousers", price: 51, image: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=800&q=80", isNew: false, featured: true },
  { category: "Trousers", name: "Satin Finish Charcoal Trousers", price: 58, image: "https://images.unsplash.com/photo-1495385794356-15371f348c31?auto=format&fit=crop&w=800&q=80", isNew: true, featured: false },
  { category: "Trousers", name: "Relaxed Indigo Trousers", price: 50, image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80", isNew: false, featured: false },

  { category: "Shirts", name: "Classic White Oxford Shirt", price: 47, image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80", isNew: true, featured: false },
  { category: "Shirts", name: "Sky Blue Linen Shirt", price: 44, image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80", isNew: false, featured: true },
  { category: "Shirts", name: "Dusty Pink Poplin Shirt", price: 46, image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80", isNew: true, featured: false },
  { category: "Shirts", name: "Chambray Work Shirt", price: 43, image: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=800&q=80", isNew: false, featured: false },
  { category: "Shirts", name: "Muted Green Button-Up", price: 45, image: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=800&q=80", isNew: true, featured: false },
  { category: "Shirts", name: "Soft Beige Camp Shirt", price: 42, image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80", isNew: false, featured: false },
  { category: "Shirts", name: "Structured Ivory Shirt", price: 48, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80", isNew: true, featured: true },
  { category: "Shirts", name: "Deep Blue Casual Shirt", price: 41, image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80", isNew: false, featured: false },
  { category: "Shirts", name: "Crisp White Tailored Shirt", price: 49, image: "https://images.unsplash.com/photo-1495385794356-15371f348c31?auto=format&fit=crop&w=800&q=80", isNew: true, featured: false },
  { category: "Shirts", name: "Desert Sand Linen Shirt", price: 44, image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80", isNew: false, featured: false },

  { category: "Hoodies", name: "Cloud Grey Hoodie", price: 59, image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80", isNew: true, featured: false },
  { category: "Hoodies", name: "Winter Black Zip Hoodie", price: 64, image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80", isNew: false, featured: true },
  { category: "Hoodies", name: "Moss Green Oversized Hoodie", price: 61, image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80", isNew: true, featured: false },
  { category: "Hoodies", name: "Soft Cream Pullover Hoodie", price: 58, image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80", isNew: false, featured: false },
  { category: "Hoodies", name: "Rust Fleece Hoodie", price: 62, image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80", isNew: true, featured: false },
  { category: "Hoodies", name: "Navy Minimal Hoodie", price: 60, image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80", isNew: false, featured: false },
  { category: "Hoodies", name: "Ash Brown Heavy Hoodie", price: 63, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80", isNew: true, featured: false },
  { category: "Hoodies", name: "Stone Knit Hoodie", price: 57, image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80", isNew: false, featured: true },
  { category: "Hoodies", name: "Olive Utility Hoodie", price: 65, image: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=800&q=80", isNew: true, featured: false },
  { category: "Hoodies", name: "Warm Beige Hoodie", price: 56, image: "https://images.unsplash.com/photo-1495385794356-15371f348c31?auto=format&fit=crop&w=800&q=80", isNew: false, featured: false },

  { category: "Jeans", name: "Vintage Blue Denim Jeans", price: 69, image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80", isNew: true, featured: false },
  { category: "Jeans", name: "Dark Wash Straight Jeans", price: 71, image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80", isNew: false, featured: true },
  { category: "Jeans", name: "Clean Light Blue Jeans", price: 67, image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80", isNew: true, featured: false },
  { category: "Jeans", name: "Black Slim Fit Jeans", price: 70, image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80", isNew: false, featured: false },
  { category: "Jeans", name: "Worn Indigo Denim", price: 73, image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80", isNew: true, featured: false },
  { category: "Jeans", name: "Muted Grey Wide Jeans", price: 72, image: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=800&q=80", isNew: false, featured: false },
  { category: "Jeans", name: "Mid Rise Bootcut Jeans", price: 68, image: "https://images.unsplash.com/photo-1495385794356-15371f348c31?auto=format&fit=crop&w=800&q=80", isNew: true, featured: false },
  { category: "Jeans", name: "Stonewash Carpenter Jeans", price: 74, image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80", isNew: false, featured: false },
  { category: "Jeans", name: "Coastal Blue Relaxed Jeans", price: 75, image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80", isNew: true, featured: true },
  { category: "Jeans", name: "Seamed Black Denim", price: 70, image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80", isNew: false, featured: false },

  { category: "Pants", name: "Tailored Charcoal Pants", price: 61, image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80", isNew: true, featured: false },
  { category: "Pants", name: "Loose Fit Cream Pants", price: 59, image: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=800&q=80", isNew: false, featured: false },
  { category: "Pants", name: "Slim Olive Cargo Pants", price: 63, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80", isNew: true, featured: true },
  { category: "Pants", name: "Soft Meadow Pants", price: 58, image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80", isNew: false, featured: false },
  { category: "Pants", name: "Everyday Brown Pants", price: 60, image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80", isNew: true, featured: false },
  { category: "Pants", name: "Plain Black Relaxed Pants", price: 62, image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80", isNew: false, featured: false },
  { category: "Pants", name: "Double Pleat Navy Pants", price: 64, image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80", isNew: true, featured: false },
  { category: "Pants", name: "Minimal Sand Pants", price: 57, image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80", isNew: false, featured: false },
  { category: "Pants", name: "Cozy Wool Blend Pants", price: 66, image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80", isNew: true, featured: false },
  { category: "Pants", name: "Structured Stone Pants", price: 61, image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80", isNew: false, featured: true },

  { category: "Formal Combos", name: "Classic Navy Suit Combo", price: 129, image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80", isNew: true, featured: false },
  { category: "Formal Combos", name: "Charcoal Blazer & Trouser Set", price: 139, image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80", isNew: false, featured: true },
  { category: "Formal Combos", name: "Ivory Shirt + Grey Pants", price: 124, image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80", isNew: true, featured: false },
  { category: "Formal Combos", name: "Black Tie Combo Set", price: 149, image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80", isNew: false, featured: false },
  { category: "Formal Combos", name: "Brown Formal Layer Set", price: 135, image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80", isNew: true, featured: false },
  { category: "Formal Combos", name: "Slate Blue Tailored Combo", price: 131, image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80", isNew: false, featured: false },
  { category: "Formal Combos", name: "Pinstripe Office Set", price: 142, image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80", isNew: true, featured: false },
  { category: "Formal Combos", name: "Cream Wedding Combo", price: 145, image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80", isNew: false, featured: false },
  { category: "Formal Combos", name: "Silver Grey Executive Set", price: 138, image: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=800&q=80", isNew: true, featured: true },
  { category: "Formal Combos", name: "Deep Olive Formal Combo", price: 133, image: "https://images.unsplash.com/photo-1495385794356-15371f348c31?auto=format&fit=crop&w=800&q=80", isNew: false, featured: false }
];

products.forEach((item) => {
  item.priceInr = Math.floor(Math.random() * 1201) + 300;
});

const categoryButtons = ["All", "T-shirts", "Trousers", "Shirts", "Hoodies", "Jeans", "Pants", "Formal Combos"];
let cart = [];
let coupon = "";
let discount = 0;

const recipientEmail = "adbusiness766@gmail.com";

const productGrid = document.getElementById("products-grid");
const newGrid = document.getElementById("new-grid");
const featuredGrid = document.getElementById("featured-grid");
const categoryButtonsContainer = document.getElementById("category-buttons");
const cartButton = document.getElementById("cart-button");
const cartDrawer = document.getElementById("cart-drawer");
const cartOverlay = document.getElementById("cart-overlay");
const cartItemsContainer = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const subtotalEl = document.getElementById("subtotal");
const discountEl = document.getElementById("discount");
const totalEl = document.getElementById("total");
const couponInput = document.getElementById("coupon-input");
const applyCouponBtn = document.getElementById("apply-coupon");
const buyBtn = document.getElementById("buy-btn");
const closeCartBtn = document.getElementById("close-cart");
const checkoutModal = document.getElementById("checkout-modal");
const closeCheckoutModalBtn = document.getElementById("close-checkout-modal");
const checkoutForm = document.getElementById("checkout-form");
const checkoutStatus = document.getElementById("checkout-status");

function formatPrice(value) {
  return `₹${value.toLocaleString("en-IN")}`;
}

function toggleCart(show) {
  cartDrawer.classList.toggle("active", show);
  cartOverlay.classList.toggle("active", show);
}

function updateCart() {
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = itemCount;

  if (itemCount === 0) {
    cartItemsContainer.innerHTML = '<p class="text-sm text-stone-500">Your cart is empty.</p>';
    subtotalEl.textContent = formatPrice(0);
    discountEl.textContent = formatPrice(0);
    totalEl.textContent = formatPrice(0);
    return;
  }

  const subtotal = cart.reduce((sum, item) => sum + item.priceInr * item.quantity, 0);
  const discountAmount = subtotal > 0 && coupon === "PALAK10" ? Math.round(subtotal * 0.1) : 0;
  const total = subtotal - discountAmount;

  cartItemsContainer.innerHTML = cart.map((item) => `
    <div class="rounded-2xl border border-stone-200 p-3">
      <div class="flex items-start justify-between gap-2">
        <div>
          <p class="font-medium text-stone-800">${item.name}</p>
          <p class="text-sm text-stone-500">${formatPrice(item.priceInr)}</p>
        </div>
        <p class="font-semibold text-stone-900">${formatPrice(item.priceInr * item.quantity)}</p>
      </div>
      <div class="mt-3 flex items-center justify-between">
        <div class="flex items-center gap-2 rounded-full border border-stone-300 p-1">
          <button class="quantity-btn h-7 w-7 rounded-full text-lg text-stone-700 hover:bg-stone-100" data-action="decrease" data-name="${item.name}">−</button>
          <span class="min-w-6 text-center text-sm font-semibold text-stone-800">${item.quantity}</span>
          <button class="quantity-btn h-7 w-7 rounded-full text-lg text-stone-700 hover:bg-stone-100" data-action="increase" data-name="${item.name}">+</button>
        </div>
        <button class="text-sm text-amber-700" data-remove="${item.name}">Remove</button>
      </div>
    </div>
  `).join("");

  subtotalEl.textContent = formatPrice(subtotal);
  discountEl.textContent = formatPrice(discountAmount);
  totalEl.textContent = formatPrice(total);

  document.querySelectorAll('[data-remove]').forEach((button) => {
    button.addEventListener("click", () => {
      const name = button.getAttribute("data-remove");
      cart = cart.filter((item) => item.name !== name);
      updateCart();
    });
  });

  document.querySelectorAll('.quantity-btn').forEach((button) => {
    button.addEventListener("click", () => {
      const name = button.getAttribute("data-name");
      const action = button.getAttribute("data-action");
      const existing = cart.find((item) => item.name === name);
      if (!existing) return;

      if (action === "increase") {
        existing.quantity += 1;
      } else if (action === "decrease") {
        existing.quantity -= 1;
        if (existing.quantity <= 0) {
          cart = cart.filter((item) => item.name !== name);
        }
      }
      updateCart();
    });
  });
}

function addToCart(productName) {
  const selected = products.find((item) => item.name === productName);
  if (!selected) return;

  const existing = cart.find((item) => item.name === selected.name);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...selected, quantity: 1 });
  }
  updateCart();
}

function renderProductCards(items, target) {
  target.innerHTML = items.map((item) => `
    <article class="card-hover overflow-hidden rounded-3xl border border-stone-200 bg-white">
      <img src="${item.image}" alt="${item.name}" class="h-56 w-full object-cover" />
      <div class="p-5">
        <div class="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.25em] text-stone-500">
          <span>${item.category}</span>
          ${item.isNew ? '<span class="rounded-full bg-amber-100 px-2 py-1 text-amber-700">New</span>' : ""}
        </div>
        <h3 class="text-lg font-semibold text-stone-800">${item.name}</h3>
        <div class="mt-4 flex items-center justify-between">
          <span class="text-xl font-semibold text-stone-900">${formatPrice(item.priceInr)}</span>
          <button class="add-to-cart rounded-full bg-stone-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-stone-700" data-product="${item.name}">Add to Cart</button>
        </div>
      </div>
    </article>
  `).join("");

  target.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", () => addToCart(button.dataset.product));
  });
}

function renderCategoryButtons() {
  categoryButtonsContainer.innerHTML = categoryButtons.map((category) => `
    <button class="category-btn rounded-full border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 transition hover:border-stone-900 hover:text-stone-900 ${category === "All" ? "bg-stone-900 text-white" : ""}" data-category="${category}">
      ${category}
    </button>
  `).join("");

  document.querySelectorAll(".category-btn").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".category-btn").forEach((btn) => btn.classList.remove("bg-stone-900", "text-white"));
      button.classList.add("bg-stone-900", "text-white");
      const selectedCategory = button.dataset.category;
      const filtered = selectedCategory === "All"
        ? products
        : products.filter((item) => item.category === selectedCategory);
      renderProductCards(filtered.slice(0, 12), productGrid);
    });
  });
}

function handleDropdownCategoryClick() {
  document.querySelectorAll('[data-category]').forEach((link) => {
    if (link.getAttribute('data-category')) {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const selectedCategory = link.getAttribute('data-category');
        document.querySelectorAll('.category-btn').forEach((btn) => {
          btn.classList.toggle('bg-stone-900', btn.getAttribute('data-category') === selectedCategory);
          btn.classList.toggle('text-white', btn.getAttribute('data-category') === selectedCategory);
        });
        const filtered = selectedCategory === 'All'
          ? products
          : products.filter((item) => item.category === selectedCategory);
        renderProductCards(filtered.slice(0, 12), productGrid);
        document.getElementById('collection').scrollIntoView({ behavior: 'smooth' });
      });
    }
  });
}

cartButton.addEventListener("click", () => toggleCart(true));
closeCartBtn.addEventListener("click", () => toggleCart(false));
cartOverlay.addEventListener("click", () => toggleCart(false));

function openCheckoutModal() {
  checkoutModal.classList.remove("hidden");
  checkoutModal.classList.add("flex");
}

function closeCheckoutModal() {
  checkoutModal.classList.remove("flex");
  checkoutModal.classList.add("hidden");
  checkoutForm.reset();
  checkoutStatus.textContent = "The details will be opened in your email app for sending.";
}

applyCouponBtn.addEventListener("click", () => {
  coupon = couponInput.value.trim().toUpperCase();
  updateCart();
});

buyBtn.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty.");
    return;
  }
  openCheckoutModal();
});

closeCheckoutModalBtn.addEventListener("click", closeCheckoutModal);
checkoutModal.addEventListener("click", (event) => {
  if (event.target === checkoutModal) {
    closeCheckoutModal();
  }
});

checkoutForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(checkoutForm);
  const values = Object.fromEntries(formData.entries());
  const subtotal = cart.reduce((sum, item) => sum + item.priceInr * item.quantity, 0);
  const discountAmount = subtotal > 0 && coupon === "PALAK10" ? Math.round(subtotal * 0.1) : 0;
  const total = subtotal - discountAmount;
  const itemSummary = cart.map((item) => `${item.name} x${item.quantity}`).join("\n");

  const subject = `New order from ${values.name} - Palak Clothe Store`;
  const body = [
    `Name: ${values.name}`,
    `Phone: ${values.phone}`,
    `Email: ${values.email}`,
    `Address: ${values.address}`,
    `PIN Code: ${values.pincode}`,
    `Notes: ${values.notes || "-"}`,
    "",
    "Items:",
    itemSummary,
    "",
    `Subtotal: ₹${subtotal.toLocaleString("en-IN")}`,
    `Discount: ₹${discountAmount.toLocaleString("en-IN")}`,
    `Total: ₹${total.toLocaleString("en-IN")}`
  ].join("\n");

  const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoLink;

  checkoutStatus.textContent = "Your email app should open with the order details. Please send it to complete the order.";

  cart = [];
  coupon = "";
  couponInput.value = "";
  updateCart();
  toggleCart(false);
  closeCheckoutModal();
});

function init() {
  renderCategoryButtons();
  handleDropdownCategoryClick();
  renderProductCards(products.slice(0, 12), productGrid);
  renderProductCards(products.filter((item) => item.isNew).slice(0, 8), newGrid);
  renderProductCards(products.filter((item) => item.featured).slice(0, 4), featuredGrid);
  updateCart();
}

init();
