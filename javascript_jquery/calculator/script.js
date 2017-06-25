function add(num1, num2) {
  return num1 + num2
}

function subtract(num1, num2) {
  return num1 - num2
}

function multiply(num1, num2) {
  return num1 * num2
}

function divide(num1, num2) {
  return num1 / num2
}

var numbers = document.getElementsByClassName("number");
var operators = document.getElementsByClassName("operators");
var equals = document.getElementById("equals");
var numForCalc = [];
var operatorsUsed = [];

var loopThroughNumbers = function() {
  // print the number clicked on.
  // console.log(this.innerHTML);
  numForCalc.push(this.innerHTML);
};

for (var i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", loopThroughNumbers, false);
}

var loopThroughOperators = function() {
  // print the operators clicked on.
  // console.log(this.innerHTML);
  operatorsUsed.push(this.innerHTML);
};

for (var i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", loopThroughOperators, false);
}

equals.onclick = function() {
  switch (operatorsUsed[0]) {
    case "+":
      alert(parseInt(numForCalc[0]) + " + " + parseInt(numForCalc[1]) + " = " + (numForCalc[0] + numForCalc[1]));
      break;
    case "-":
      alert(parseInt(numForCalc[0]) + " - " + parseInt(numForCalc[1]) + " = " + (numForCalc[0] - numForCalc[1]));
      break;
    case "*":
      alert(parseInt(numForCalc[0]) + " * " + parseInt(numForCalc[1]) + " = " + (numForCalc[0] / numForCalc[1]));
      break;
    case "/":
      alert(parseInt(numForCalc[0]) + " / " + parseInt(numForCalc[1]) + " = " + (numForCalc[0] / numForCalc[1]));
      break;
  }
};
