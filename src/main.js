import { getJoke } from "./fetch.js";
import "./main.scss";

const newJokeButtonElement = document.querySelector(".joke__new-button");

newJokeButtonElement.addEventListener("click", getJoke);

const saveJokeButtonElement = document.querySelector(".joke__save-button");

saveJokeButtonElement.addEventListener("click", saveJoke);

function saveJoke() {
  console.log("Test");
}
