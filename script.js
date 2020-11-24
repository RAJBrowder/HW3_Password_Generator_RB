// Assignment Code
var generateBtn = document.querySelector("#generate");

// Establish arrays for password content
var alphaLower = "abcdefghijklmnopqrstuvwxyz";
var alphaLowerArr = alphaLower.split("");

var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var alphaUpperArr = alphaUpper.split("");

var numbers = "0123456789";
var numbersArr = numbers.split("");

var specChar = "!#$%&()*+,-./:;<=>?@^[\\]^_`{|}~";
var specCharArr = specChar.split("");

function generatePassword() {
  var passwordCharacters = [];
  var passwordLength = prompt(
    "Please enter the number of characters of your password.\nChoose between 8 and 128 characters."
  );
  // Get user input and validate input for password length
  if (!passwordLength) {
    alert("Please enter a value for password length.");
  } else if (
    isNaN(passwordLength) ||
    passwordLength < 8 ||
    passwordLength > 128
  ) {
    alert(
      "Please enter a numerical value between 8 and 128 for password length."
    );
    // Obtain user input regarding the other password contents
  } else {
    containAlphaLower = confirm(
      "Should your pasword contain lowercase letters?"
    );
    containAlphaUpper = confirm(
      "Should your pasword contain uppercase letters?"
    );
    containNumber = confirm("Should your pasword contain numbers?");
    containSpecChar = confirm(
      "Should your pasword contain special characters?"
    );

    if (
      !containAlphaLower &&
      !containAlphaUpper &&
      !containNumber &&
      !containSpecChar
    ) {
      alert("You must select at least 1 password criteria.");
    } else {
      if (containAlphaLower) {
        Array.prototype.push.apply(passwordCharacters, alphaLowerArr);
      }

      if (containAlphaUpper) {
        Array.prototype.push.apply(passwordCharacters, alphaUpperArr);
      }

      if (containNumber) {
        Array.prototype.push.apply(passwordCharacters, numbersArr);
      }

      if (containSpecChar) {
        Array.prototype.push.apply(passwordCharacters, specCharArr);
      }

      var userPassword = "";

      for (var i = 0; i < passwordLength; i++) {
        userPassword =
          userPassword +
          passwordCharacters[
            Math.floor(Math.random() * passwordCharacters.length)
          ];
      }

      if (passwordCharacters.length > 0) {
        var passwordText = document.querySelector("#password");
        passwordText.value = userPassword;
      }
    }
  }
}
