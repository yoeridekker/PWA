var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

window.onload = () => {
  "use strict";

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js");
  }

  //function that gets the location and returns it
  function getLocation() {
    if (navigator.geolocation) {
      console.log("Geo Location enabled");
      navigator.geolocation.getCurrentPosition(success, error, options);
    } else {
      console.log("Geo Location not supported by browser");
    }
  }

  //function that retrieves the position
  function showPosition(position) {
    var location = {
      longitude: position.coords.longitude,
      latitude: position.coords.latitude
    };
    console.log(location);
  }

  function success(pos) {
    var crd = pos.coords;

    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  //request for location
  getLocation();
  
};
