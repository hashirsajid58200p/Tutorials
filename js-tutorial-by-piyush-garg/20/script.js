const button = document.getElementById("getLocationButton");

async function getData(lat, long) {
  const promise = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=8290b52eb7c84c75b5892820252809&q=${lat},${long}&aqi=yes`
  );
  return await promise.json();
}

async function gotLocation(position) {
  const result = await getData(
    position.coords.latitude,
    position.coords.longitude
  );
  console.log(result);
}

function failedToGet() {
  console.log("There was some issues");
}

button.addEventListener("click", async () => {
  navigator.geolocation.getCurrentPosition(gotLocation, failedToGet);
});
