function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  console.log(searchInputElement);
  alert(searchInputElement.value);
}

let searchForm = document.querySelector("search-form");
searchForm.addEventListener("submit", search);
