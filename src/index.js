function search(event); {
    event.preventDefault();
    alert("searching");
}

let searchForm = document.querySelector("search-form");
searchForm.addEventListener("submit", search);
