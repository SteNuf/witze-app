import { getJoke } from "./fetch.js";
import "./main.scss";

const newJokeButtonElement = document.querySelector(
  ".joke__handling--new-button"
);

newJokeButtonElement.addEventListener("click", getJoke);

const saveJokeButtonElement = document.querySelector(
  ".joke__handling--save-button"
);

saveJokeButtonElement.addEventListener("click", saveJoke);

function saveJoke() {
  console.log("Test");
}
