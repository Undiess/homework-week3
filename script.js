// Assignment Code
var generateBtn = document.querySelector("#generate");

// getting inputs from the user



// Write password to the #password input
function writePassword(characterArray) {
  var passwordText = document.querySelector("#password");

  passwordText.value = characterArray;

}
//user input function 
function UserInputs(){
  var passwordLength = 0
  while (passwordLength < 8 || passwordLength > 128){
    var passwordLength = prompt("How long do you want your password to be from 8 - 128");
    } 

  var uppercase = confirm("would you like uppercase");
  var lowercase = confirm("would you like lowercase");
  var number = confirm("would you like numbers");
  var specialCharacters = confirm("would you like special charaters");
  
  while(uppercase == false && lowercase == false && number == false && specialCharacters == false){
    alert("please pick one");
    var uppercase = confirm("would you like uppercase");
    var lowercase = confirm("would you like lowercase");
    var number = confirm("would you like numbers");
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
  if (number== true){
    selectionCounter++;
  }
  if (specialCharacters== true){
    selectionCounter++;
  }
  //dividing number of characters to options selected to get an even number of each options in password.
  console.log(selectionCounter);
  var dividedPassword = 0;
  dividedPassword = Math.round(passwordLength/selectionCounter);
  console.log(dividedPassword);
 // Creating 4 arrays filled with random characters
 var uppercaseArray = " ";
  if (uppercase == true){ 
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        for (var i = 0; i < dividedPassword; i++)
          uppercaseArray += possible.charAt(Math.floor(Math.random() * possible.length));
        console.log(uppercaseArray);
      }

  var lowercaseArray = " ";
  if (lowercase == true){
      var possible = "abcdefghijklmnopqrstuvwxyz";
      for (var i = 0; i < dividedPassword; i++)
        lowercaseArray += possible.charAt(Math.floor(Math.random() * possible.length));
      console.log(lowercaseArray);
    }

var numbersArray = " ";
  if (number == true){
      var possible = "0123456789";
      for (var i = 0; i < dividedPassword; i++)
        numbersArray += possible.charAt(Math.floor(Math.random() * possible.length));
      console.log(numbersArray);
    }
  
var specialCharactersArray = " ";
    if (specialCharacters == true){
      var possible = "!#$%&()*+,-./:;<=>?@[\]^_{|}~";
      for (var i = 0; i < dividedPassword; i++)
        specialCharactersArray += possible.charAt(Math.floor(Math.random() * possible.length));
      console.log(specialCharactersArray);
    }
    //concatinating arrays
    var characterArray = uppercaseArray.concat(lowercaseArray,numbersArray,specialCharactersArray);
    
    // shuffling the array 
   
      var m = characterArray.length;
    
      // While there remain elements to shuffle…
      while (m>0) {
    
        // Pick a remaining element…
        var i = Math.floor(Math.random() * m--);
        console.log(m)
    
        // And swap it with the current element.
        var t = characterArray[m];
        characterArray[m] = characterArray[i];
    }
    writePassword(characterArray);
    
    }
    
  

// Add event listener to generate buttons

generateBtn.addEventListener("click", UserInputs);
