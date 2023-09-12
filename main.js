import { farenheit } from "./functions/weatherFunctions.js"; //this function returns the farenheight temperature recorded for the location entered in

const input = document.querySelector("#location"); // this selects the input element

const button = document.querySelector("button"); // this selects the button element

const weatherText = document.querySelector("h1"); // this selects the h2 for the weather to be updated with

button.addEventListener("click", async () => {
  let userInput = input.value; // assign the current input value to a variable
  try {
    const farenheitTemp = await farenheit(userInput); // await for the results off farenheit to be resolved
    weatherText.innerText = farenheitTemp; // sets the innertext of the H1 element to be the value retured from the farenheit function
    input.value = "";
  } catch (err) {
    console.error(err);
  }
  //create a function  that will take in the number data as an argument and chage the inner value of the H2 element to match the temp associated with
});
