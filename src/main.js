import { getJoke, saveLocalStorageJoke, getLocalStorageJoke } from "./fetch.js";
import "./main.scss";

let joke = getLocalStorageJoke();
let saveListJokeArray = [];

const newJokeButtonElement = document.querySelector(".joke__new-button");
const saveJokeButtonElement = document.querySelector(".joke__save-button");
const jokeSaveListElement = document.querySelector(".joke-save__list");

const hidden = document.getElementById("hidden-button");
const hiddenSaveJoke = document.getElementById("hidden-joke");
const placeHolderElement = document.getElementById(
  "joke-save__list--placeholder"
);

newJokeButtonElement.addEventListener("click", getJoke);
newJokeButtonElement.addEventListener("click", () => {
  hidden.style.display = "inline-block";
});

saveJokeButtonElement.addEventListener("click", () => {
  saveLocalStorageJoke();

  // Witz in das Array speichern:
  saveListJokeArray.push(joke);

  hiddenSaveJoke.style.display = "none";

  console.log(saveListJokeArray);
  // if (placeHolderElement) {
  //   placeHolderElement.remove();
  // }
});

placeHolderElement.remove;

const jokeListDiv = document.createElement("div");
jokeListDiv.classList.add("joke-saves");

jokeListDiv.innerHTML = `<div class="joke-saves__text">${joke}</div>
<button class="joke-saves__delete"></button>`;

jokeSaveListElement.appendChild(jokeListDiv);

// if (!jokeSaveListElement.querySelector(".joke-saves")) {
//   const newPlaceholder = document.createElement("p");
//   newPlaceholder.id = "placeholder";
//   newPlaceholder.textContent = "Noch keine Witze gespeichert.";
//   jokeSaveListElement.appendChild(newPlaceholder);
// }
