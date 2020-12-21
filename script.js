// Assignment code here

var letterUpper = ["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var letterLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}"];

function getPasswords() {
  var ul = document.getElementById('passwords');
  var count = +promptValue.value;
  for(var i = 0; i < promptValue; i++)
    generatePassword();
};



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

  while(promptValue === false && promptUpper === false && promptLower === false && promptNumber === false && promptSymbol === false) {
    window.alert('Please choose at least one character set to continue');
    var promptUpper = window.confirm('Would you like to use Upper Case Letter?');
    var promptLower = window.confirm('Would you like to use Lower Case Letters?');
    var promptNumber = window.confirm('Would you like to use Numbers?');
    var promptSymbol = window.confirm('Would you like to use Symbols?')
  }
  
  var chosen =[]
  var passwordCharacters = []
    if (promptUpper) {
      passwordCharacters = passwordCharacters.concat(letterUpper)
    }
    if (promptLower) {
      passwordCharacters = passwordCharacters.concat(letterLower)
    }
    if (promptNumber) {
      passwordCharacters = passwordCharacters.concat(number)
    }
    if (promptSymbol) {
      passwordCharacters = passwordCharacters.concat(symbol)
    }


// Write password to the #password input
var password = [];
var length = +promptValue.length;
for(var i= 0; i < length; i++) {
  var password = math.floor(Math.random() * chosen.length);
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
