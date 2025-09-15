const LOCAL_STORAGE_KEY = "witze-app";

export async function getJokeAPI() {
  const response = await fetch("https://witzapi.de/api/joke/");
  const body = await response.json();

  const jokeOutput = document.querySelector(".joke__actuality--text");
  jokeOutput.innerText = body[0].text;

  return body[0].text;
  //jokeSave = jokeOutput.innerText;
}

export function saveJokeToLocalStorage(joke) {
  if (!joke) return;
  const jokes = getJokesFromLocalStorage();
  jokes.push(joke);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(jokes));
  //console.log(localStorage.getItem(LOCAL_STORAGE_KEY));
}

export function getJokesFromLocalStorage() {
  const data = localStorage.getItem("witze-app");
  if (!data) {
    return [];
  }
  return JSON.parse(data);
}
