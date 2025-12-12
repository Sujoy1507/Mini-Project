const cityInput = document.querySelector(".city");
const searchBtn = document.querySelector(".search-btn");

const tempBig = document.querySelector(".temp-big .deg");
const tempSmall = document.querySelector(".temp-small span");

const humidity = document.querySelector(".stat:nth-child(1) .value span");
const wind = document.querySelector(".stat:nth-child(2) .value span");

const sunrise = document.querySelector(".stat:nth-child(3) .value");
const sunset = document.querySelector(".stat:nth-child(4) .value");

const whichCity = document.querySelector(".brand-title");


function formatTime(unix) {
    const date = new Date(unix * 1000);
    const h = date.getHours();
    const m = String(date.getMinutes()).padStart(2, "0");
    return `${h}:${m}`;
}

let apikey = `f85d18001d3c3038012c3ad2b9608cf9`;
async function getWeather() {
    let city = cityInput.value;
    let raw = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
    );
    let realData = await raw.json();

    console.log(realData);
    whichCity.textContent = realData.name;
    tempBig.textContent = realData.main.temp;
    tempSmall.textContent = realData.main.feels_like;
    humidity.textContent = realData.main.humidity;
    wind.textContent = realData.wind.speed;
    sunrise.textContent = formatTime(realData.sys.sunrise);
    sunset.textContent = formatTime(realData.sys.sunset);
}

searchBtn.addEventListener("click", getWeather);
document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        getWeather();
    }
});
