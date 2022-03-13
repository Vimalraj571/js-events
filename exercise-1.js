console.log("Excercise 1");

const counterButton1 = document.querySelector("#counter_button_1");

let counter1 = 0;
counterButton1.addEventListener("click", (e) => {
  counter1++;
  e.target.value = counter1;
});