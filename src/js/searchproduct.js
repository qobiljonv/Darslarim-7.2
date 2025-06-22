const searchEl = document.getElementById("search");

searchEl.addEventListener("input", () => {
  const titles = document.querySelectorAll(".card-title");
  const searchText = searchEl.value.toLowerCase();

  titles.forEach((title) => {
    const card = title.closest("li");
    if (title.textContent.toLowerCase().includes(searchText)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
