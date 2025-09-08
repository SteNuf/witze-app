import {
  getJokeAPI,
  saveLocalStorageJoke,
  getLocalStorageJoke,
} from "./fetch.js";
import "./main.scss";

let currentJoke = "";
let saveListJokeArray = getLocalStorageJoke();

const newJokeButtonElement = document.querySelector(".joke__new-button");
const saveJokeButtonElement = document.querySelector(".joke__save-button");
const jokeSaveListElement = document.querySelector(".joke-save__list");

const hidden = document.getElementById("hidden-button");
const placeHolderElement = document.getElementById(
  "joke-save__list--placeholder"
);

//Witz laden
newJokeButtonElement.addEventListener("click", async () => {
  currentJoke = await getJokeAPI();
  hidden.style.display = "inline-block";
});

// Witz speichern
saveJokeButtonElement.addEventListener("click", () => {
  if (!currentJoke) {
    alert("Bitte erst einen Witz laden!");
    return;
  }

  if (saveListJokeArray.includes(currentJoke)) {
    alert("Dieser Witz ist schon gespeichert!");
    return;
  }

  if (placeHolderElement) {
    placeHolderElement.remove();
  }

  saveListJokeArray.push(currentJoke);
  localStorage.setItem("witze-app", JSON.stringify(saveListJokeArray));

  renderJoke(currentJoke);
});

function renderJoke(joke) {
  const jokeListDiv = document.createElement("div");
  jokeListDiv.classList.add("joke-saves");
  jokeListDiv.innerHTML = `
    <div class="joke-saves__text">${joke}</div>
    <button class="joke-saves__delete">
     <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="joke-saves__delete--icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m3 3 1.664 1.664M21 21l-1.5-1.5m-5.485-1.242L12 17.25 4.5 21V8.742m.164-4.078a2.15 2.15 0 0 1 1.743-1.342 48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185V19.5M4.664 4.664 19.5 19.5"
                />
              </svg>    
    
    </button> `;

  jokeListDiv
    .querySelector(".joke-saves__delete")
    .addEventListener("click", () => {
      jokeListDiv.remove();
      saveListJokeArray = saveListJokeArray.filter((j) => j !== joke);
      saveLocalStorageJoke(saveListJokeArray);

      if (saveListJokeArray.length === 0) {
        jokeSaveListElement.innerHTML = `<p id="joke-save__list--placeholder"><em>Kein Witz ist gespeichert!</em></p>`;
      }
    });

  jokeSaveListElement.prepend(jokeListDiv);
}

saveListJokeArray.forEach(renderJoke);

if (saveListJokeArray.length > 0 && placeHolderElement) {
  placeHolderElement.remove();
}
