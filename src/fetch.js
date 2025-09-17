const LOCAL_STORAGE_KEY = "witze-app";

export async function getJokeAPI() {
  const response = await fetch("https://witzapi.de/api/joke/");
  const body = await response.json();
  return body[0].text;
}

export function renderJokeText(joke) {
  const jokeOutput = document.querySelector(".joke__actuality--text");
  jokeOutput.innerText = joke;
}

export function saveJokeToLocalStorage(joke) {
  if (!joke) return;
  const jokes = getJokesFromLocalStorage();
  jokes.push(joke);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(jokes));
}

export function getJokesFromLocalStorage() {
  const data = localStorage.getItem("witze-app");
  if (!data) {
    return [];
  }
  return JSON.parse(data);
}
