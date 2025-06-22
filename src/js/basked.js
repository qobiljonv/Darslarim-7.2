const productsCounter = document.getElementById("products-counter");

let products = localStorage.getItem("products")
  ? JSON.parse(localStorage.getItem("products"))
  : [];

export function calculate() {
  return products.reduce((sum, p) => sum + p.amount, 0);
}

export function productsCounterUpdate() {
  productsCounter.textContent = calculate();
}

export function addBasked(product) {
  const item = products.find((p) => p.id === product.id);
  if (item) {
    item.amount += 1;
  } else {
    products.push(product);
  }

  localStorage.setItem("products", JSON.stringify(products));
  productsCounterUpdate();
  products = JSON.parse(localStorage.getItem("products"));
}
