console.log("Excercise 2");

const counterBtn2 = document.querySelector("#counter_button_2");
const increment = document.querySelector("#counter_increment");
const decrement = document.querySelector("#counter_decrement");
let counter2 = 0;

increment.addEventListener("click", () => {
  counter2++;
  counterBtn2.value = counter2;
});

decrement.addEventListener("click", () => {
  counter2--;
  counterBtn2.value = counter2;
});

