const API_ENDPOINT = "https://witzapi.de/api/joke";

export async function getApi() {
  let apiEndpoint = API_ENDPOINT;
  const selectedValue = getSelectValue();

  if (selectedValue === "flachwitze") {
    apiEndpoint += "/?category=flachwitze&language=de";
  }
  if (selectedValue === "lehrerwitze") {
    apiEndpoint += "/?category=lehrerwitze&language=de";
  }
  if (selectedValue === "programmierwitze") {
    apiEndpoint += "/?category=programmierwitze&language=de";
  }
  if (selectedValue === "scherzfragen") {
    apiEndpoint += "/?category=scherzfragen&language=de";
  }
  if (selectedValue === "chuck-norris-witze") {
    apiEndpoint += "/?category=chuck-norris-witze&language=de";
  }
  if (selectedValue === "antiwitze") {
    apiEndpoint += "/?category=antiwitze&language=de";
  }
  if (selectedValue === "blondinenwitze") {
    apiEndpoint += "/?category=blondinenwitze&language=de";
  }
  if (selectedValue === "schulwitze") {
    apiEndpoint += "/?category=schulwitze&language=de";
  }
  if (selectedValue === "arztwitze") {
    apiEndpoint += "/?category=arztwitze&language=de";
  }

  const response = await fetch(apiEndpoint);

  const data = await response.json();
  return data[0].text;
}

function getSelectValue() {
  const dropdown = document.querySelector(".select-wrapper__category");
  return dropdown.value;
}
