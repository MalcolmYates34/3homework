//Assignment Code 
document.querySelector("#generate").addEventListener("click", writePassword);

// Arrays 
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var letterLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var letterUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Variables
var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

// Prompt to confirm how many characters the user wants in their password
function generatePassword() {
  var confirmLength = (prompt("How many characters would you like your password to be? Has to be between 8 and 20"));

  // Loop if answer is false
  while(confirmLength <= 7 || confirmLength >= 21) {
      alert("Password must be between 8-20 characters Please Try again");
      var confirmLength = (prompt("how many characters would you like your password to be? Has to be between 8 and 10"));
      } 

      // Tell the user how many characters the password will have  
      alert(`Your password will have ${confirmLength} characters`);

    // Add criteria to password
    var confirmSpecialCharacter = confirm("Click OK if you would like to include special characters");
    var confirmNumericCharacter = confirm("Click OK if you would like to include numeric characters");    
    var confirmLowerCase = confirm("Click OK to if you would like to include lowercase letters");
    var confirmUpperCase = confirm("Click OK to if you would like to include uppercase letters");
      // Loop if answer is false
      while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
        alert("You must choose at least one parameter");
        var confirmSpecialCharacter = confirm("Click OK if you would like to include special characters");
        var confirmNumericCharacter = confirm("Click OK if you would like to include numeric characters");    
        var confirmLowerCase = confirm("Click OK if you would like to include lowercase letters");
        var confirmUpperCase = confirm("Click OK if you would like to include uppercase letters");   
    } 

      var passwordCharacters = []
      
    if (confirmSpecialCharacter) {
      passwordCharacters = passwordCharacters.concat(specialChar)
    }

    if (confirmNumericCharacter) {
      passwordCharacters = passwordCharacters.concat(number)
    }
      
    if (confirmLowerCase) {
      passwordCharacters = passwordCharacters.concat(letterLower)
    }

    if (confirmUpperCase) {
      passwordCharacters = passwordCharacters.concat(letterUpper)
    }

      console.log(passwordCharacters)

      var randomPassword = ""
      
      for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
      return randomPassword;
}

// Write password to the #password display
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}