let productFormElement = document.querySelector("#form-group");
productFormElement.addEventListener("submit", callApi);

function callApi(event) {
  event.preventDefault();
  let apiKey = "a3f9ff86f4t0ab9cbe395o06803b6fc9";
  let userProductName = document.querySelector(
    "#user-instructions-product-name"
  );
  let userProductDetails = document.querySelector(
    "#user-instructions-product-details"
  );
  let prompt = `Generate a product description about ${userProductName.value} with a word count between 80 to 100 words.`;
  let context = `Use the provided product details ${userProductDetails.value} to create an attractive and concise product description.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=a3f9ff86f4t0ab9cbe395o06803b6fc9`;
  axios.get(apiUrl).then(generateDescription);
}

function generateDescription(response) {
  new Typewriter("#description", {
    strings: response.data.answer,
    autoStart: true,
    delay: 30,
    cursor: "",
  });
}
