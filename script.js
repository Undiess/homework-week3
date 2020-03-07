// Assignment Code
var generateBtn = document.querySelector("#generate");

// getting inputs from the user



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//user input function 
function UserInputs(){
  var passwordLength = 0
  while (passwordLength < 8 || passwordLength > 128){
    var passwordLength = prompt("Enter a number between 8 and 128");
    } 

  var uppercase = confirm("would you like uppercase");
  var lowercase = confirm("would you like lowercase");
  var numbers = confirm("would you like numbers");
  var specialCharacters = confirm("would you like special charaters");
  
  while(uppercase == false && lowercase == false && numbers == false && specialCharacters == false){
    alert("please pick one");
    var uppercase = confirm("would you like uppercase");
    var lowercase = confirm("would you like lowercase");
    var numbers = confirm("would you like numbers");
    var specialCharacters = confirm("would you like special charaters");
    
  }
  console.log(uppercase)
  var selectionCounter = 0
  if (uppercase== true){
    selectionCounter++;
  }
  if (lowercase== true){
    selectionCounter++;
  }
  if (numbers== true){
    selectionCounter++;
  }
  if (specialCharacters== true){
    selectionCounter++;
  }
  console.log(selectionCounter);

}






// Add event listener to generate buttons

generateBtn.addEventListener("click", UserInputs);
