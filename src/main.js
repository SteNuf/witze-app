import "./main.scss";
import "./fetch.js";

const newJokeButtonElement = document.getElementById("joke-new-button");

newJokeButtonElement.addEventListener("click", getJoke);

function getJoke() {
  getJokeAPI();
}

async function getJokeAPI() {
  const response = await fetch("https://witzapi.de/api/joke/");

  const body = await response.json();
  console.log(body);

  const jokeArray = body;

  console.log(jokeArray[0].text);

  const jokeOutput = document.getElementById("text");
  jokeOutput.innerHTML = jokeArray[0].text;
}
