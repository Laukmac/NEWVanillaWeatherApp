
function formatDate (timestamp){
    let date = new Date (timestamp);
    let hours = date.getHours ();
    if (hours < 10 ){
        hours = `0${hours}`;
    }
    let minutes = date.getMinutes ();
    if (minutes < 10 ){
        minutes = `0${minutes}`;
    }
    
    let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"] 
    let day = weekdays[date.getDay ()];
    return  `${day}, ${hours}:${minutes}`;

}



function showTemperature (response) { 
    console.log(response.data);
let currentCity = document.querySelector("#city"); 
let  currentTemperature = document.querySelector("#temperature");
let  currentDescription = document.querySelector("#description");
let  currentHumidity = document.querySelector("#humidity");
let  currentWind = document.querySelector("#windspeed");
let  currentDate = document.querySelector("#date");
currentCity.innerHTML = response.data.name;
currentTemperature.innerHTML = Math.round(response.data.main.temp);
currentDescription.innerHTML = response.data.weather[0].description;
currentHumidity.innerHTML = response.data.main.humidity;
currentWind.innerHTML = Math.round(response.data.wind.speed);
currentDate.innerHTML = formatDate(response.data.dt * 1000) ;

}


let apiKey = "e304b015eb7af663852222eb9928a3f7";
let city = "New York";
let apiURL= `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric&wind.speed=imperial`;
axios.get(apiURL).then(showTemperature);