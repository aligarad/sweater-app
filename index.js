

let weather ={
  "apiKey":"a1d9ada82329f01ab84b8f51bbf490bd",
  fetchWeather: function(city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" +this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayweather(data));
  },
  displayweather: function(data) {
    const { name } = data;
    const {icon, description} = data.weather[0];
    const {temp, humidity} = data.main;
    console.log(name,icon,description,temp)
    document.querySelector(".city").innerText = "temperature in " + name ;
    document.querySelector('.temp').innerText = temp + "°C";
  },
  search: function (){
    this.fetchWeather(document.querySelector(".search-box").value)
  }
};
document
  .querySelector(".search button")
  .addEventListener("click", function() {
  weather.search();
})
document.querySelector(".search-box").addEventListener('keyup', function (event) {
  if (event.key == "Enter"){
    weather.search();
  }
}
)