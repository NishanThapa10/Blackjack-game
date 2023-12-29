/*
let firstName ="Nishan";
let lastName = "Thapa";

let fullName = firstName + " " + lastName;
console.log(fullName);

let name = "Linda";
let greeting = "Hi there, ";

function nameEl(){
  let nameGreet = greeting + "" + name + "!";
  console.log(nameGreet);
}
nameEl();


let myPoints = 3;

function addPoints(){
  myPoints +=3;
}

function removePoint(){
  myPoints -=1;
}

addPoints();
removePoint();
console.log(myPoints);


let errorEl = document.getElementById("error");

function errorText(){
  errorEl.textContent = "Something went wrong, please try again";
}
*/
let num1 = 8;
let num2 = 2;

document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

let sumEl = document.getElementById("sum-el");

function add(){
  let result = num1 + num2;
  sumEl.textContent ="Sum: " + result;
}

function subtract(){
  let result = num1-num2;
  sumEl.textContent ="Sum: " + result;
}
function divide(){
  let result = num1 / num2;
  sumEl.textContent ="Sum: " + result;
}

function multiply(){
  let result = num1 * num2;
  sumEl.textContent ="Sum: " + result;
}
