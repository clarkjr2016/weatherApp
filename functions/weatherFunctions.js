import { callCurrentWeather } from "./apiCall.js";

async function farenheit(userEnteredLocation) {
  const locationObject = await callCurrentWeather(userEnteredLocation); //placing the returned object in a variable by invoking the callCurrentweather function
  const farenheitTemp = locationObject.current.temp_f; //accessing the farenheit tempature by selecting the appropriate property
  return farenheitTemp;
}

export { farenheit };
