// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var pwlength = prompt(
    "Choose a password length between 8 and 128 characters "
  );
  var pwNumbers = confirm("Would you like to use numbers?");
  var pwLowercase = confirm("Would you like to use lowercase?");
  var pwUppercase = confirm("Would you like to use uppercase?");
  var pwSpecial = confirm("Would you like to use special characters?");
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
