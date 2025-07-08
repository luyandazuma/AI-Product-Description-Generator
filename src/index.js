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
  let prompt = `User instructions: Generate a product description about ${userProductName.value} with a word count of 80 to 100 words.`;
  let context = `You are a marketing specialist who writes amazing product descriptions. Use the provided product details ${userProductDetails.value} to create an attractive and concise product description. Follow user instructions.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  new Typewriter("#description", {
    strings: `⏳Generating...`,
    autoStart: true,
    delay: 20,
  });
  axios.get(apiUrl).then(generateDescription);
}

function generateDescription(response) {
  new Typewriter("#description", {
    strings: response.data.answer,
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}
