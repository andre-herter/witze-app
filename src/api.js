const API_ENDPOINT = "https://witzapi.de/api/joke";
const API_ENDPOINT_FLACHWITZ =
  "https://witzapi.de/api/joke/?category=flachwitze&language=de";
const API_ENDPOINT_LEHRERWITZ =
  "https://witzapi.de/api/joke/?category=lehrerwitze&language=de";
const API_ENDPOINT_PROGRAMMIERWITZE =
  "https://witzapi.de/api/joke/?category=programmierwitze&language=de";
const API_ENDPOINT_SCHERZFRAGEN =
  "https://witzapi.de/api/joke/?limit=1&category=scherzfragen&language=de";
const API_ENDPOINT_CHUCKNORIS =
  "https://witzapi.de/api/joke/?category=chuck-norris-witze&language=de";
const API_ENDPOINT_ANTIWITZE =
  "https://witzapi.de/api/joke/?category=antiwitze&language=de";
const API_ENDPOINT_BLONDINENWITZ =
  "https://witzapi.de/api/joke/?category=blondinenwitze&language=de";
const API_ENDPOINT_SCHULWITZ =
  "https://witzapi.de/api/joke/?category=schulwitze&language=de";
const API_ENDPOINT_ARZTWITZ =
  "https://witzapi.de/api/joke/?category=arztwitze&language=de";

export async function getApi() {
  const selectedValue = getSelectValue();
  const apiEndpoints = {
    flachwitze: API_ENDPOINT_FLACHWITZ,
    lehrerwitze: API_ENDPOINT_LEHRERWITZ,
    programmierwitze: API_ENDPOINT_PROGRAMMIERWITZE,
    scherzfragen: API_ENDPOINT_SCHERZFRAGEN,
    "chuck-norris-witze": API_ENDPOINT_CHUCKNORIS,
    antiwitze: API_ENDPOINT_ANTIWITZE,
    blondinenwitze: API_ENDPOINT_BLONDINENWITZ,
    schulwitze: API_ENDPOINT_SCHULWITZ,
    arztwitze: API_ENDPOINT_ARZTWITZ,
  };

  const apiEndpoint = apiEndpoints[selectedValue] || API_ENDPOINT;

  try {
    const response = await fetch(apiEndpoint);
    if (!response.ok) {
      throw new Error("Netzwerkantwort war nicht okay");
    }
    const data = await response.json();
    return data[0].text;
  } catch (error) {
    alert("Fehler beim Abrufen des Witzes");
    console.error("Es gab ein Problem mit der Fetch-Operation:", error);
    return "Fehler beim Abrufen des Witzes!";
  }
}

function getSelectValue() {
  const dropdown = document.querySelector(".select-wrapper__category");
  return dropdown.value;
}
