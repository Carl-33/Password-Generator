var generateBtn = document.querySelector("#generate");
// creating character arrays
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["~","!","@","#","$","%","&","-","+","=", "_"];
// Creating an empty array to concat arrays to.
var passwordArray = [];
// password generator
generateBtn.addEventListener("click", myFunction); 
function myFunction() {
  var Pword = "";
  var password = generatePassword();
  function generatePassword (){
    // password length prompt
    var Length = parseInt(prompt ("How long would you like your password to be? It can be between 8 and 128 characters long."));
    // If a number lower than 8 or higher than 128 is answered the user is prompted again for a password length.
    while (Length > 128 || Length < 8 ) {
      Length = parseInt(prompt ("Whoops, your password has to be between 8 and 128 characters.  How long would you like it to be?"));
    }
    // character confirms
    var confirmUpper = confirm("Would you like to include upper case letter? OK for yes, Cancel for no.");
    var confirmLower = confirm("Would you like to include lower case letter? OK for yes, Cancel for no.");
    var confirmSymbols = confirm("Would you like to include special characters? OK for yes, Cancel for no.");
    var confirmNumbers = confirm("Would you like to include numbers? OK for yes, Cancel for no.");
    // adding the coresponding arrays to passwordArray, the formerlly empty array.
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
  // generating the random password
    for (let i = 0; i < Length; i++) {
      var variables = Math.floor(Math.random()*passwordArray.length);
      Pword += passwordArray[variables];
    }
  }
  // adding the password to the HTML page for the ID=password
  var passwordText = document.querySelector("#password");
  passwordText.value = Pword;
};

