const inputBox = document.getElementById("box");
const submitButton = document.getElementById("button");

const key = "3e4422d6e04655f7e63efa6a0266b041";

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  let cityName = inputBox.value;

  console.log(cityName);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`;

  console.log(url);

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.dir(data));
});