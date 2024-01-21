function search(event) {
  event.preventDefault();
  alert("searhing");
}

let searchForm = document.querySelector("search-form");
searchForm.addEventListener("submit", search);
