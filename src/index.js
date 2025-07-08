let productFormElement = document.querySelector("#form-group");
productFormElement.addEventListener("submit", generateDescription);

function generateDescription(event) {
  event.preventDefault();
  new Typewriter("#description", {
    strings: "Brown wooden truck toy...",
    autoStart: true,
    delay: 50,
    cursor: "",
  });
}
