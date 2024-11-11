document.querySelector(".searchbar .fa").addEventListener("click", function () {
  const searchInput = document.querySelector(".searchbar input");
  searchInput.classList.toggle("active");
  searchInput.focus();
});

const searchinput = document.getElementById("inputbox");
const formsubmit = document.getElementById("myform");

const container = document.getElementById("container");
const wrapper = document.getElementById("wrapper");

const weatherimage = document.getElementById("image1");

const tempreature = document.getElementById("temperature");
const timeZone = document.querySelector(".timezone");
const long = document.querySelector(".long")
const lat = document.querySelector(".lat")



const description = document.getElementById("description");
const wind = document.getElementById("windspeed");
const humid = document.getElementById("humid");
async function checkWeather(city) {
  const api_key = "e5708a84eab866cd2eb9f08daf2f4be3";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

  try {
    const response = await fetch(url);
    if(!response.ok){
        throw new Error(`Unable to Fetch the info ${response.status}`);
    }
    const weather = await response.json();
    console.log(weather);
   

    tempreature.innerText = weather.main.temp;
    description.innerText = weather.weather[0].description;
    wind.innerText = weather.wind.speed;
    humid.innerText = weather.main.humidity;
    timeZone.innerText = weather.timezone
    long.innerText = weather.coord.lon
    lat.innerText = weather.coord.lat

  } catch (error) {
    console.error("Error fetching the weather data:", error);
  }
}

formsubmit.addEventListener("submit", function (event) {
  event.preventDefault();
  checkWeather(searchinput.value);

  const name = document.querySelector(".name");
  name.innerText = searchinput.value;
});
