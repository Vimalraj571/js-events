console.log("Excercise 5");

const inputTextBox = document.querySelector("#input_hex");
const outputBox = document.querySelector("#output_color");

let inputHex = "";
inputTextBox.addEventListener("input", (e) => {
  inputHex = e.target.value;
  console.log(e.target.value);
  const RGB = convertToRGB(inputHex);
  console.log(RGB);
  outputBox.style.height = "70px";
  outputBox.style.width = "70px";
  outputBox.style.backgroundColor = `rgb(${RGB})`;
});

const convertToRGB = (input) => {
  if (input.length >= 7) {
    const r = parseInt(input[1] + input[2], 16);
    const g = parseInt(input[3] + input[4], 16);
    const b = parseInt(input[5] + input[6], 16);
    return `${r},${g},${b}`;
  }
};
