console.log("Excercise 3");

const inputText = document.querySelector("#input_text");
const outputText = document.querySelector("#output_text");
const encodeBtn = document.querySelector("#encode");
const decodeBtn = document.querySelector("#decode");

const encodeUrl = (input) => {
  console.log(input);
  return encodeURIComponent(input);
};

const decodeUrl = (input) => {
  return decodeURIComponent(input);
};

let tempStore = "";

inputText.addEventListener("change", (e) => {
  tempStore = e.target.value;
});

encodeBtn.addEventListener("click", () => {
  // get the inputBox value
  outputText.value = encodeUrl(tempStore);
});

decodeBtn.addEventListener("click", () => {
  // print the outputbox value
  outputText.value = decodeUrl(tempStore);
});
