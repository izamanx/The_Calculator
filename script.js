let input = "";
let result;
const display = document.querySelector(".upper-part");
const buttons = document.querySelectorAll("button");
const Operators = ["+", "-", "/", "*", ".", "reset", "delete", "="];

const processInput = (btnValue) => {
  switch (btnValue) {
    case "delete":
      input = input !== result ? input.slice(0, -1) : input;
      break;
    case "reset":
      input = "";
      break;
    case "=":
      input = result = input === "" ? "NaN!" : eval(input);
      break;
    default:
      input += Operators.includes(btnValue) && input === "" ? "NaN!" : btnValue;
  }
  display.value = input;
};

buttons.forEach((button) => {
  button.addEventListener("click", (item) => processInput(item.target.value));
});



// done by zaman
