import "/styles/main.scss";
import { getApi } from "./api";

const currentJokeEl = document.querySelector(".current-joke__text");
const loadButton = document.querySelector(".current-joke__load");

async function loadNewJoke() {
  const joke = await getApi();

  currentJokeEl.innerText = joke;
}

loadButton.addEventListener("click", loadNewJoke);
