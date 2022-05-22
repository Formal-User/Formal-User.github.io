const API_KEY = "89dbb1f39f09b42e026c487bdd0eca6b";
const weatherBox = document.querySelector("#weather-box");
const weatherIcon = document.querySelectorAll(".weather-icon");
const weatherInfo = document.querySelector(".weather-info");

function getPosition(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then((data) => {
            const name = data.name;
            const weather = data.weather[0].description;
            const icon = data.weather[0].icon;
            const iconUrl = `http://openweathermap.org/img/w/${icon}.png`
            const temp = data.main.temp;
            console.log(temp);
            weatherIcon.forEach(iconbox => {
                iconimg = iconbox.querySelector("img");
                iconimg.setAttribute("src",iconUrl);
                iconimg.setAttribute("height","80%");
                iconimg.setAttribute("width","80%");
            });
            weatherInfo.innerText = `${temp}°C ${weather}`;
        });
}

function failPosition(){
    alert("fail to get geolocation data!!!");
}

navigator.geolocation.getCurrentPosition(getPosition,failPosition);