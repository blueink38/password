// Assignment code here

// Choose LENGTH of password 8-128
function passwordLength() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
console.log(passwordLength())

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

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
