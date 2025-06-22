// ✅ app.js
import { renderUi } from "./renderUi.js";
import "./searchproduct.js";
import { productsCounterUpdate } from "./basked.js";

const html = document.documentElement;
const themeToggler = document.getElementById("theme-toggler");
const priceSort = document.getElementById("price-sort");

let allProducts = [];

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then(({ products }) => {
    allProducts = products;
    renderUi(products);
  });

priceSort.addEventListener("change", (e) => {
  const price =
    e.target.options[e.target.selectedIndex].getAttribute("data-price");
  const sorted = [...allProducts];

  if (price == "low") sorted.sort((a, b) => a.price - b.price);
  else if (price == "hight") sorted.sort((a, b) => b.price - a.price);

  renderUi(sorted);
});

document.getElementById("year").textContent = new Date().getFullYear();

const theme = localStorage.getItem("theme");
if (theme) {
  html.dataset.theme = theme;
  themeToggler.checked = html.dataset.theme === "coffee";
}

themeToggler.addEventListener("click", () => {
  html.dataset.theme = html.dataset.theme === "light" ? "coffee" : "light";
  localStorage.setItem("theme", html.dataset.theme);
  themeToggler.checked = html.dataset.theme === "coffee";
});

productsCounterUpdate();
