// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["~","!","@","#","$","%","&","-","+","=", "_"];

var passwordArray = [];

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function writePassword (){

  var Length = parseInt(prompt ("How long would you like your password to be? It can be between 8 and 128 characters long."));
  while (Length > 128 || Length < 8) {
      Length = parseInt(prompt ("Whoops, your password has to be between 8 and 128 characters.  How long would you like it to be?"));

    }

    var confirmUpper = confirm("Whould you like to include upper case letter?");
    var confirmLower = confirm("Would you like to include lower case letter?");
    var confirmSymbols = confirm("Would you like to include special characters?");
    var confirmNumbers = confirm("Would you like to include numbers?");

    
    if (confirmUpper) {
      passwordArray = passwordArray.concat(upperCase)
    }
    if(confirmLower) {
      passwordArray = passwordArray.concat(lowerCase)
    }
    if(confirmSymbols) {
      passwordArray = passwordArray.concat(symbols)
    }
    if (confirmNumbers) {
      passwordArray = passwordArray.concat(numeric)
    }

console.log(passwordArray);
   
  var fatMan = ""
  for (let i = 0; i < Length; i++) {
    var farts = Math.floor(Math.random() *passwordArray.length) +1;
   fatMan += passwordArray[farts];
    console.log(fatMan);
    return fatMan

}

};