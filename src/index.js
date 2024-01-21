function search(event) {
  event.preventDefault();
  console.log(searchInputElement);
}

let searchForm = document.querySelector("search-form");
searchForm.addEventListener("submit", search);
