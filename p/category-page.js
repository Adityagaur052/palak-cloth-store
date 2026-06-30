const categoryProducts = {
  tshirts: [
    { name: "Classic White Oxford Tee", price: 599, image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80", badge: "New" },
    { name: "Vintage Black Graphic Tee", price: 749, image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80" },
    { name: "Soft Heather Stripe Tee", price: 699, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80", badge: "Hot" },
    { name: "Minimalist Navy Round Neck", price: 649, image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80" },
    { name: "Linen Blend Summer Tee", price: 799, image: "https://images.unsplash.com/photo-1495385794356-15371f348c31?auto=format&fit=crop&w=800&q=80", badge: "Trending" },
    { name: "Muted Green Basic Tee", price: 629, image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80" }
  ],
  jeans: [
    { name: "Vintage Blue Denim Jeans", price: 1099, image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80", badge: "New" },
    { name: "Dark Wash Straight Jeans", price: 1199, image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80" },
    { name: "Clean Light Blue Jeans", price: 1049, image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80", badge: "Best Seller" },
    { name: "Muted Grey Wide Jeans", price: 1149, image: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=800&q=80" },
    { name: "Coastal Blue Relaxed Jeans", price: 1249, image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80", badge: "Trending" },
    { name: "Black Slim Fit Jeans", price: 1129, image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80" }
  ],
  shirts: [
    { name: "Classic White Oxford Shirt", price: 1299, image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80", badge: "New" },
    { name: "Sky Blue Linen Shirt", price: 1199, image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80" },
    { name: "Dusty Pink Poplin Shirt", price: 1249, image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80", badge: "Hot" },
    { name: "Structured Ivory Shirt", price: 1349, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80" },
    { name: "Chambray Work Shirt", price: 1149, image: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=800&q=80" },
    { name: "Crisp White Tailored Shirt", price: 1399, image: "https://images.unsplash.com/photo-1495385794356-15371f348c31?auto=format&fit=crop&w=800&q=80", badge: "Trending" }
  ],
  trousers: [
    { name: "Tailored Beige Trousers", price: 1399, image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80", badge: "New" },
    { name: "Slim Black Utility Trousers", price: 1499, image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80" },
    { name: "Soft Olive Cargo Trousers", price: 1449, image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80", badge: "Best Seller" },
    { name: "Wide Leg Taupe Trousers", price: 1549, image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80" },
    { name: "Lightweight Khaki Trousers", price: 1399, image: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=800&q=80" },
    { name: "Structured Stone Pants", price: 1499, image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80", badge: "Trending" }
  ]
};

const pageKey = document.body.dataset.category;
const products = categoryProducts[pageKey] || [];
const container = document.getElementById("category-products");

if (container) {
  container.innerHTML = products.map((item) => `
    <article class="card-hover overflow-hidden rounded-3xl border border-stone-200 bg-white">
      <img src="${item.image}" alt="${item.name}" class="h-56 w-full object-cover" />
      <div class="p-5">
        <div class="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.25em] text-stone-500">
          <span>${pageKey.charAt(0).toUpperCase() + pageKey.slice(1)}</span>
          ${item.badge ? `<span class="rounded-full bg-amber-100 px-2 py-1 text-amber-700">${item.badge}</span>` : ""}
        </div>
        <h3 class="text-lg font-semibold text-stone-800">${item.name}</h3>
        <div class="mt-4 flex items-center justify-between">
          <span class="text-xl font-semibold text-stone-900">₹${item.price}</span>
          <button class="rounded-full bg-stone-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-amber-600">Add to Cart</button>
        </div>
      </div>
    </article>
  `).join("");
}
