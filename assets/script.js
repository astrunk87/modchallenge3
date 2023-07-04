// Assignment code here
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","o","p","q","r","s","t","u","v","w","x","y","z"]
var numbers = ( "0","1","2","3","4","5","6","7","8","9");
var special = ("!","@","#","$","%","^","&","*","?");

var generatePassword = function() {
    var letterchoice = window.prompt("Do you want to include letters? type y or n");

    if (letterchoice==="y") {
        window.alert("thank you")
    }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);