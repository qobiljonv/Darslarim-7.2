export function fetchAndRenderProducts() {
  const productList = document.getElementById("product-list");

  fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then(({ products }) => {
      products.forEach(
        ({ title, thumbnail, price, stock, rating, brand, category }) => {
          productList.innerHTML += `
          <li class="product__item">
            <button class="product__delete--btn">
              <i class="fas fa-trash"></i>
            </button>
            <img
              class="product__img"
              alt="${title}"
              src="${thumbnail}"
              width="100"
              height="100"
            />
            <div class="product__name">
              <span class="material-symbols-outlined">shopping_bag</span>
              <span>- ${title}</span>
            </div>
            <div class="product__brand">
              <span class="material-symbols-outlined">sell</span>
              <span>- ${brand} (${category})</span>
            </div>
            <div class="product__price">
              <span class="material-symbols-outlined">paid</span>
              <span>- $${price}</span>
            </div>
            <div class="product__stock">
              <span class="material-symbols-outlined">inventory_2</span>
              <span>- ${stock} left</span>
            </div>
            <div class="product__rating">
              <span class="material-symbols-outlined">star</span>
              <span>- ${rating} / 5</span>
            </div>
          </li>
        `;
        }
      );
    })
    .catch((err) => {
      console.error("Xatolik:", err);
      productList.innerHTML = "<li>Xatolik: ma'lumot yuklanmadi.</li>";
    });
}
