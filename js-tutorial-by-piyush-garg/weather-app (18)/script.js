const button = document.getElementById("searchButton");
const input = document.getElementById("cityInput");
const cityName = document.getElementById("cityName");
const cityTime = document.getElementById("cityTime");
const cityTemp = document.getElementById("cityTemp");

async function getData(cityName) {
  const promise = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=8290b52eb7c84c75b5892820252809&q=${cityName}&aqi=yes`
  );
  return await promise.json();
}

button.addEventListener("click", async () => {
  const value = input.value;
  const result = await getData(value);
  cityName.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`;
  cityTime.innerText = result.location.localtime;
  cityTemp.innerText = `${result.current.temp_c} C`;
});
