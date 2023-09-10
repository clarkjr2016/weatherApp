// write a function that calls to the WeatherAPI

const key = "03b2b867cacd431cb3e161908230409"; //this is my key to authenticate my API call
const baseUrl = `http://api.weatherapi.com/v1/current.json`; //this os the base url to the data for the current weather

async function callCurrentWeather(location, apiKey = key, base = baseUrl) {
  const url = `${base}?key=${encodeURIComponent(apiKey)}&q=${encodeURIComponent(
    location
  )}`; //this combines the key and user inputted location on to the URL as parameters

  try {
    const request = await fetch(url, {
      mode: "cors",
    }); // this makes the call to the API and stores the response object in a variable

    const responseJSON = parseJSON(request); // takes in the response from the fetch request and retuns the json version of it.

    return responseJSON;
    // const searchResult = await request.json(); // this applies the json method  to the response object that we receeived

    // return searchResult;
  } catch (error) {
    console.error("Fetch error:", error);
  }
} // this is a function that calls to the currentweather portion of the API and returns a location object based on user input

async function parseJSON(responseObj) {
  try {
    const responseJSON = await responseObj.json();
    return responseJSON;
  } catch (err) {
    console.error("This is the error: ", err);
  }
} // this function takes in a response object and then parses that response object into JSON and then returns that value

export { callCurrentWeather };
