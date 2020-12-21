// Assignment code here

var letterUpper = ["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var letterLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}"];





// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// generate password

function generatePassword() {
  var promptValue = window.prompt('Choose a password length between 8-128');
  console.log('promptValue: ', promptValue);
  var promptUpper = window.confirm('Would you like to use Upper Case Letter?');
  console.log('prompUpper: ', promptUpper)
  var promptLower = window.confirm('Would you like to use Lower Case Letters?');
  console.log('prompLower: ', promptLower)
  var promptNumber = window.confirm('Would you like to use Numbers?');
  console.log('prompNumber: ', promptNumber)
  var promptSymbol = window.confirm('Would you like to use Symbols?')
  console.log('prompSymbol: ', promptSymbol)

  


// Write password to the #password input
var password = [];
var length = +promptValue.length;
for(var i= 0; i < length; i++) {
  var password = math.floor(Math.random() * promptValue.length);
  password += chosen[random];
}
return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
