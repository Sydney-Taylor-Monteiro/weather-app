function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = searchInputElement.value;
}

function formattedDate(date) {
  let minutes = currentDate.getMinutes();
  let hours = currentDate.getHours();
  let day = currentDate.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];

  return `${formattedDay} ${hours}:${minutes}`;
}

let currentDateElement = document.querySelector("current-date");
let currentDate = new Date();

currentDateElement.innerHTML = formatDate(currentDate);
