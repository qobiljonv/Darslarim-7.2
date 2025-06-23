import formatNumber from "./formatnumber.js";
import { addBasked } from "./basked.js";

const productsList = document.getElementById("products-list");

export function renderUi(products) {
  productsList.textContent = "";

  products.forEach((product) => {
    const {
      title,
      description,
      thumbnail,
      price,
      discountPercentage,
      rating,
      stock,
    } = product;

    const discountPrice = formatNumber(price, discountPercentage);
    const fullPrice = formatNumber(price);

    const cardHTML = `
      <li class="card bg-base-100 shadow-xl m-4">
        <figure><img class="card-image" src="${thumbnail}" alt="${title}" /></figure>
        <div class="card-body">
          <h2 class="card-title text-lg font-bold">${title}</h2>
          <p class="description text-sm">${description}</p>
          <div class="rating  text-sm">⭐ ${rating} (${stock} ta sharh)</div>
          <div class="price font-semibold ">${fullPrice}</div>
          <div class="description-price line-through opacity-40">${discountPrice}</div>
          <div class="card-actions justify-end">
            <button class="buy-buttone btn btn-primary">Buy</button>
          </div>
        </div>
      </li>
    `;

    const wrapper = document.createElement("div");
    wrapper.innerHTML = cardHTML;
    const cardElement = wrapper.firstElementChild;

    const buyBtn = cardElement.querySelector(".buy-buttone");
    buyBtn.addEventListener("click", () => {
      addBasked({ ...product, amount: 1 });
    });

    productsList.appendChild(cardElement);
  });
}
