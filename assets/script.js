// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var pwLength = prompt(
    "Choose a password length between 8 and 128 characters "
  );
  var pwNumbers = confirm("Would you like to use numbers?");
  var pwLowercase = confirm("Would you like to use lowercase?");
  var pwUppercase = confirm("Would you like to use uppercase?");
  var pwSpecial = confirm("Would you like to use special characters?");

  var randomChoices = [];
  var numberarr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var lower = "abcdefghijklmnopqrstuvwxyz".split("");
  var upper = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
  var special = ["!", "@", "#", "$", "%", "*", "<", "^", "<"];
  var storepw = "";

  if (pwNumbers) {
    randomChoices = randomChoices.concat(numberarr);
  }
  if (pwLowercase) {
    randomChoices = randomChoices.concat(lower);
  }
  if (pwUppercase) {
    randomChoices = randomChoices.concat(upper);
  }
  if (pwSpecial) {
    randomChoices = randomChoices.concat(special);
  }
  for (var i = 0; i < parseInt(pwLength); i++) {
    var ran = Math.floor(Math.random * randomChoices.length);
    storepw = storepw + randomChoices[ran];
  }
  return storepw;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
