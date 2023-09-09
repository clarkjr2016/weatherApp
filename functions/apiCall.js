// write a function that calls to the WeatherAPI

async function callCurrentWeather(location) {
  const key = "03b2b867cacd431cb3e161908230409"; //this is my key to authenticate my API call
  const query = location; //this is simulating user entry into the query location
  const url = `http://api.weatherapi.com/v1/current.json?key=${encodeURIComponent(
    key
  )}&q=${encodeURIComponent(query)}`; //this sets up the URL to be more controlled

  const request = await fetch(url, {
    mode: "cors",
  }); // this makes the call to the API and stores the response object in a variable

  const searchResult = await request.json(); // this applies the json method  to the response object that we receeived

  return { searchResult };
} // this is used to return a location object based on user input

async function weatherStatus(location) {
  const locationObject = await callCurrentWeather(location); //placing the returned object in a variable
  const farenheit = locationObject.searchResult.current.temp_f;
  console.log(farenheit);
}

export { callCurrentWeather, weatherStatus };
