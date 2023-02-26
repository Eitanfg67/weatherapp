const apiKey = "5e1d26f673c37721f3b1fe7f3c774fb4";


function getWeather(location) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const temperature = data.main.temp;
      const description = data.weather[0].description;
      const icon = data.weather[0].icon;
      const city = data.name;
      const country = data.sys.country;
      const wind = data.wind.speed;
      const humidity = data.main.humidity;
      const pressure = data.main.pressure;
      
      // update UI with weather data
      document.getElementById("temperature").textContent = `${temperature} °C`;
      document.getElementById("description").textContent = description;
      document.getElementById("city").textContent = `${city}, ${country}`;
      document.getElementById("wind").textContent = `${wind} m/s`;
      document.getElementById("humidity").textContent = `${humidity} %`;
      document.getElementById("pressure").textContent = `${pressure} hPa`;
      document.getElementById("icon").setAttribute("src", `https://openweathermap.org/img/wn/${icon}.png`);
    })
    .catch(error => console.log("error"));
}

// get weather data when form is submitted
document.getElementById("form").addEventListener("submit", event => {
  event.preventDefault();
  const location = document.getElementById("location").value;
  getWeather(location);
});
