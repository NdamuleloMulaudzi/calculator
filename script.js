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

function display() {}
