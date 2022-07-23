
function formatDate (timestamp){
    let date = new Date (timestamp);
    let hours = date.getHours ();
    let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"] 
    let day = weekdays[date.getDay ()];
    if (hours < 10 ){
        hours = `0${hours}`;
    }
    let minutes = date.getMinutes ();
    if (minutes < 10 ){
        minutes = `0${minutes}`;
    }
    return  `${day}, ${hours}:${minutes}`;}

    function displayForecast (){
        let weekForecast = document.querySelector("#weather-forecast");
        let forecastHTML = `<div class="row">`;
        let days = ["Sat", "Sun", "Mon","Tue", "Wed",];
        days.forEach (function(day) {
            forecastHTML = forecastHTML + 
            ` <div class="col-2">
                <div class="forecast-date">
                ${day}
            </div>
                <img src="http://openweathermap.org/img/wn/50d@2x.png" alt="" width="44"/>
                <div class="forecast-temperatures">
                    <span class="forecast-max-temp"> 19</span>  
                     <span class="forecast-min-temp"> 12</span></div>
                     </div>`; });
        
        forecastHTML = forecastHTML + `</div>`;

        weekForecast.innerHTML = forecastHTML;}

function showTemperature (response) { 
let currentCity = document.querySelector("#city"); 
let  currentTemperature = document.querySelector("#temperature");
let  currentDescription = document.querySelector("#description");
let  currentHumidity = document.querySelector("#humidity");
let  currentWind = document.querySelector("#windspeed");
let  currentDate = document.querySelector("#date");
let  weatherIcon = document.querySelector ("#icon");
currentCity.innerHTML = response.data.name;
currentTemperature.innerHTML = Math.round(response.data.main.temp);
currentDescription.innerHTML = response.data.weather[0].description;
currentHumidity.innerHTML = response.data.main.humidity;
currentWind.innerHTML = Math.round(response.data.wind.speed);
currentDate.innerHTML = formatDate(response.data.dt * 1000) ;
weatherIcon.setAttribute ("src", `http://openweathermap.org/img/wn/${response.data. weather[0].icon}@2x.png`);
weatherIcon.setAttribute("alt", response.data.weather[0].description);
celsiusTemperature = response.data.main.temp;}


function search(city) {
    let apiKey = "e304b015eb7af663852222eb9928a3f7";
    let apiURL= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&wind.speed=imperial`;
    axios.get(apiURL).then(showTemperature); 
}

function handleSubmit (event){
    event.preventDefault();
    let searchedCity = document.querySelector("#city-input");
    search (searchedCity.value);
}
displayForecast();
search("new york");

function showFahrenheit (event){
    event.preventDefault();
    let fahrenheitTemperature =  (celsiusTemperature * 9/5) + 32; 
    let currentTemperature = document.querySelector("#temperature");
    celsiusLink.classList.remove("active");
    fahrenheitLink.classList.add("active");
    currentTemperature.innerHTML = Math.round (fahrenheitTemperature);


}
function showCelsius (event){
    event.preventDefault();
    let currentTemperature = document.querySelector("#temperature");
    celsiusLink.classList.add("active");
    fahrenheitLink.classList.remove("active");
    currentTemperature.innerHTML = Math.round(celsiusTemperature);

}
let celsiusTemperature = null;
let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", showCelsius);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener ("click", showFahrenheit);
