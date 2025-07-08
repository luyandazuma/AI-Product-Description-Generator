let productFormElement = document.querySelector("#form-group");
productFormElement.addEventListener("submit", generateDescription);

function generateDescription(event) {
  event.preventDefault();
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = `Brown wooden truck toy...`;
}
