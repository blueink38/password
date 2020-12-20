// Assignment code here

// Elements
const yourPasswordElement = document.getElementById('password');
const yourLengthElement = document.getElementById('passwordLengthNumber');
const yourUpperElement = document.getElementById('chooseUppercase');
const yourLowerElement = document.getElementById('chooseLowercas');
const yourNumberElement = document.getElementById('chooseNumbers');
const yourSymbolElement = document.getElementById('chooseSymbols');
const yourGenerate = document.getElementById('generate');


// randomizing function
const randomizer = {
  getUpperCase: randomUpper,
  getLowerCase: randomLower,
  getNumber: randomNumber,
  getSymbol: randomSymbol,
};

yourGenerate.addEventListener('click', () => {
  const hasPasswordLength = +yourLengthElement.value;
  const hasUpperCase = yourUpperElement.checked;
  const hasLowerCase = yourLowerElement.checked;
  const hasNumber = yourNumberElement.checked;
  const hasSymbol = yourSymbolElement.checked;

  console.log(hasPasswordLength, hasUpperCase, hasLowerCase, hasNumber, hasSymbol);
});



// Choose LENGTH of password 8-128
// function passwordLength() {
//  return number(passwordLengthNumber);
//}
 //console.log(passwordLength())

// generate random LOWERCASE letter
function randomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
console.log(randomLower())

// generate random UPPERCASE letter
function randomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
console.log(randomUpper())

// generate random NUMBER
function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
console.log(randomNumber())

// generate random SYMBOL
function randomSymbol() {
  const symbols = '!@#$%^&*(){}[]?';
  return symbols[Math.floor(Math.random() * symbols.length)];
}
console.log(randomSymbol())



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener('click', () => {
  const length = +yourLengthElement.value;
  const upper = yourUpperElement.checked;
  const lower = yourLowerElement.checked;
  const number = yourNumberElement.checked;
  const symbol = yourSymbolElement.checked;

  console.log(length, upper, lower, number, symbol);
});


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);
