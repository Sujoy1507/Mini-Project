const cityInput = document.querySelector(".city");
const searchBtn = document.querySelector(".search-btn");

const tempBig = document.querySelector(".temp-big .deg");
const tempSmall = document.querySelector(".temp-small span");

const humidity = document.querySelector(".stat:nth-child(1) .value span");
const wind = document.querySelector(".stat:nth-child(2) .value span");

const sunrise = document.querySelector(".stat:nth-child(3) .value");
const sunset = document.querySelector(".stat:nth-child(4) .value");

const whichCity = document.querySelector(".brand-title");

const main = document.querySelector("main");


const errorDiv = document.createElement("div");
errorDiv.classList.add("error");
errorDiv.textContent = "City Not Found";
errorDiv.style.display = "none";

const retryKeys = document.createElement("div");
retryKeys.classList.add("retryKeys");
retryKeys.innerHTML = `<h2 class="hint-escape">
  Press <span class="key">Escape</span> key to return to main screen
</h2>

<h2 class="hint-enter">
   <span class="key">Right Click</span> on your mouse to try again
</h2>
`;

const retryDiv = document.createElement("div");
retryDiv.classList.add("retry");
retryDiv.textContent = "Retry";

errorDiv.appendChild(retryDiv);
errorDiv.appendChild(retryKeys);

function formatTime(unix) {
    const date = new Date(unix * 1000);
    const h = date.getHours();
    const m = String(date.getMinutes()).padStart(2, "0");
    return `${h}:${m}`;
}

let apikey = `f85d18001d3c3038012c3ad2b9608cf9`;
async function getWeather() {
    try {
        let city = cityInput.value;
        let raw = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
        );
        if (!raw.ok) {
            main.style.display = "none";
            document.body.prepend(errorDiv);
            errorDiv.style.display = "initial";
            throw new Error("Hello I am Sujoy Saha");
        }

        let realData = await raw.json();

        whichCity.textContent = realData.name;
        tempBig.textContent = realData.main.temp;
        tempSmall.textContent = realData.main.feels_like;
        humidity.textContent = realData.main.humidity;
        wind.textContent = realData.wind.speed;
        sunrise.textContent = formatTime(realData.sys.sunrise);
        sunset.textContent = formatTime(realData.sys.sunset);
    } catch (err) {
        console.log(err.message);
    }
}

function removeError() {
    errorDiv.style.display = "none";
    main.style.display = "block";
    cityInput.value = "";
    cityInput.focus();
}

searchBtn.addEventListener("click", getWeather);
document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        getWeather();
    }

    if (event.key === "Escape") {
        removeError();
    }

});

document.addEventListener("contextmenu", (event) => {
   removeError();
});

retryDiv.addEventListener("click", () => {
    removeError();
});
