export function getJoke() {
  getJokeAPI();
}

async function getJokeAPI() {
  const response = await fetch("https://witzapi.de/api/joke/");

  const body = await response.json();
  //const jokeArray = body;

  const jokeOutput = document.querySelector(".joke__actuality--text");
  jokeOutput.innerText = body[0].text;
}
