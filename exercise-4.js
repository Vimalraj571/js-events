console.log("Excercise 4");

const inputCount = document.querySelector("#input_text_count");
const outputPara = document.querySelector("#output_para");

let tempValue = "";

inputCount.addEventListener("input", (e) => {
  tempValue = e.target.value;
  let temp = `Length is ${tempValue.length}`;
  outputPara.innerHTML = temp;
});