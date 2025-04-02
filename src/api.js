const API_ENDPOINT = "https://witzapi.de/api/joke";

export async function getApi() {
  const selectedValue = getSelectValue();

  let apiEndpoint = API_ENDPOINT;

  if (selectedValue === "Alle Kategorien") {
    apiEndpoint;
  } else {
    apiEndpoint += `/?category=${selectedValue}&language=de`;
  }

  const response = await fetch(apiEndpoint);

  const data = await response.json();
  return data[0].text;
}

function getSelectValue() {
  const dropdown = document.querySelector(".select-wrapper__category");
  return dropdown.value;
}
