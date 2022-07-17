function showTemperature (response) { 
    console.log(response.data);
let currentCity = document.querySelector("#city"); 
let  currentTemperature = document.querySelector("#temperature");
let  currentDescription = document.querySelector("#description");
let  currentHumidity = document.querySelector("#humidity");
let  currentWind = document.querySelector("#windspeed");
currentCity.innerHTML = response.data.name;
currentTemperature.innerHTML = Math.round(response.data.main.temp);
currentDescription.innerHTML = response.data.weather[0].description;
currentHumidity.innerHTML = response.data.main.humidity;
currentWind.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "e304b015eb7af663852222eb9928a3f7";
let city = "New York";
let apiURL= `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric&wind.speed=imperial`;
axios.get(apiURL).then(showTemperature);