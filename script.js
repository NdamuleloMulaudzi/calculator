let firstNumber = 0;
let secondNumber = 0;

const inputDisplay = document.querySelector("#displayNumber");
const container = document.querySelector("#container");
const one = document.querySelector("#one");

function add(num_1, num_2) {
  return num_1 + num_2;
}

function subtract(num_1, num_2) {
  return num_1 - num_2;
}
function multiply(num_1, num_2) {
  return num_1 * num_2;
}

function divide(num_1, num_2) {
  return num_1 / num_2;
}

function operate(operator, num_1, num_2) {
  if (operator == "+") {
    return add(num_1, num_2);
  } else if (operator == "-") {
    return subtract(num_1, num_2);
  } else if (operator == "*") {
    return multiply(num_1, num_2);
  } else if (operator == "/") {
    return divide(num_1, num_2);
  }
}

// one.addEventListener("click", () => {
//   inputDisplay.value += 1;
// });
function display() {}

container.addEventListener("click", (e) => {
  let target = e.target;
  switch (target.id) {
    case "zero":
      inputDisplay.value = 0;
      break;
    case "one":
      inputDisplay.value = 1;
      break;
    case "two":
      inputDisplay.value = 2;
      break;
    case "three":
      inputDisplay.value = 3;
      break;
    case "four":
      inputDisplay.value = 4;
      break;
    case "five":
      inputDisplay.value = 5;
      break;
    case "six":
      inputDisplay.value = 6;
      break;
    case "seven":
      inputDisplay.value = 7;
      break;
    case "eight":
      inputDisplay.value = 8;
      break;
    case "nine":
      inputDisplay.value = 9;
      break;
    case "addition":
      inputDisplay.value = "+";
      break;
    case "subraction":
      inputDisplay.value = "-";
      break;
    case "multiplication":
      inputDisplay.value = "*";
      break;
    case "division":
      inputDisplay.value = "/";
      break;
  }
});
