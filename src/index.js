function search(event); {
    Event.preventDefault();
    alert("searching");
}

let searchForm = document.querySelector("search-form");
searchForm.addEventListener("submit", search);
