const LOCAL_STORAGE_KEY = "jokes";

export function getSavedJoke() {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
}

export function saveJoke(joke) {
  const savedJokes = getSavedJoke();

  if (savedJokes.find((saveJoke) => saveJoke === joke)) {
    alert("Witz wurde bereits gespeichert");
    return;
  }

  const newSavedJokes = [joke, ...savedJokes];
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newSavedJokes));
}
