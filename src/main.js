import { getJoke } from "./fetch.js";
import "./main.scss";

const newJokeButtonElement = document.querySelector(
  ".joke__handling--new-button"
);

newJokeButtonElement.addEventListener("click", getJoke);
