var button = document.querySelector(".button")
var inputValue = document.querySelector(".inputValue")
var Name = document.querySelector(".name")
var desc = document.querySelector(".desc")
var temp = document.querySelector(".temp")
var feelsLike = document.querySelector(".feelsLike")
var humid = document.querySelector(".humid")
var windspeed = document.querySelector(".windSpeed")


button.addEventListener('click', function() {
     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=473db4ea3f461e643f9848936f18d634&units=imperial`)

          .then(response => response.json())
          .then(data => {
               let nameValue = data['name'];
               let tempValue = data['main']['temp']
               let descValue = data['weather'][0]['description'];
               let feelslike = data['main']['feels_like']
               let humidity = data['main']['humidity']
               let windSpeed = data['wind']['speed']


               Name.innerHTML = `City: ${nameValue}`;
               temp.innerHTML = `Tempreture: ${tempValue}°`;
               desc.innerHTML = `Today: ${descValue}`;
               feelsLike.innerHTML = `Feels Like: ${feelslike}°`;
               humid.innerHTML = `Humidity: ${humidity}%`;
               windspeed.innerHTML = `Wind Speed: ${windSpeed} mph`;

          })

     .catch(error => alert("wrong City Name"))
})


// basic fitch using inspect
fetch('https://api.openweathermap.org/data/2.5/weather?q=london&appid=473db4ea3f461e643f9848936f18d634')
     .then(response => response.json())
     .then(data =>
          console.log(data))
