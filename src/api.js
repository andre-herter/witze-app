export async function getApi() {
  let API_ENDPOINT = "https://witzapi.de/api/joke"; // Initialisierung von API_ENDPOINT
  const selectedValue = getSelectValue();

  if (selectedValue === "flachwitze") {
    API_ENDPOINT += "/?category=flachwitze&language=de";
  }
  if (selectedValue === "lehrerwitze") {
    API_ENDPOINT += "/?category=lehrerwitze&language=de";
  }
  if (selectedValue === "programmierwitze") {
    API_ENDPOINT += "/?category=programmierwitze&language=de";
  }
  if (selectedValue === "scherzfragen") {
    API_ENDPOINT += "/?category=scherzfragen&language=de";
  }
  if (selectedValue === "chuck-norris-witze") {
    API_ENDPOINT += "/?category=chuck-norris-witze&language=de";
  }
  if (selectedValue === "antiwitze") {
    API_ENDPOINT += "/?category=antiwitze&language=de";
  }
  if (selectedValue === "blondinenwitze") {
    API_ENDPOINT += "/?category=blondinenwitze&language=de";
  }
  if (selectedValue === "schulwitze") {
    API_ENDPOINT += "/?category=schulwitze&language=de";
  }
  if (selectedValue === "arztwitze") {
    API_ENDPOINT += "/?category=arztwitze&language=de";
  }

  const response = await fetch(API_ENDPOINT);

  const data = await response.json();
  return data[0].text;
}

function getSelectValue() {
  const dropdown = document.querySelector(".select-wrapper__category");
  return dropdown.value;
}
