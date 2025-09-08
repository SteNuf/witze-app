export function getJoke() {
  getJokeAPI();
}
const LOCAL_STORAGE_KEY = "witze-app";

let jokeSave = "";

async function getJokeAPI() {
  const response = await fetch("https://witzapi.de/api/joke/");

  const body = await response.json();

  const jokeOutput = document.querySelector(".joke__actuality--text");
  jokeOutput.innerText = body[0].text;

  jokeSave = jokeOutput.innerText;
  console.log(jokeSave);
}

export function saveLocalStorageJoke() {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(jokeSave));
  //console.log(localStorage.getItem(LOCAL_STORAGE_KEY));
}

export function getLocalStorageJoke() {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
}
