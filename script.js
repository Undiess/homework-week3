// Assignment Code
var generateBtn = document.querySelector("#generate");

// getting inputs from the user



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function UserInputs(){
  var passwordLength = 0
  while (passwordLength < 8 || passwordLength > 128){
    var passwordLength = prompt("Enter a number between 8 and 128");
    }  
    console.log(passwordLength);
}


// Add event listener to generate buttons
// getting inputs from the user
generateBtn.addEventListener("click", UserInputs);
