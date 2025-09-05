import { getJoke, saveLocalStorageJoke, getLocalStorageJoke } from "./fetch.js";
import "./main.scss";

const newJokeButtonElement = document.querySelector(".joke__new-button");
const saveJokeButtonElement = document.querySelector(".joke__save-button");
const jokeSaveListElement = document.querySelector(".joke-save__list");

newJokeButtonElement.addEventListener("click", getJoke);
saveJokeButtonElement.addEventListener("click", saveLocalStorageJoke);

let joke = getLocalStorageJoke();

console.log(joke);

// const jokeSaved = document.createElement("div");
// jokeSaved.classList.add("");
const listOutput = document.querySelector(".joke-saves__text");
listOutput.innerHTML = joke;
