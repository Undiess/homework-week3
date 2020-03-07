// Assignment Code
var generateBtn = document.querySelector("#generate");

// getting inputs from the user



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
// getting inputs from the user
generateBtn.addEventListener("click", writePassword){
  while (passwordLength => 8 || passwordLength <= 128){
  var passwordLength = prompt("Enter a number between 8 and 128");
  }
  

}
