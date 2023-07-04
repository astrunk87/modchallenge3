// Assignment code here
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","o","p","q","r","s","t","u","v","w","x","y","z"]
var numbers = ( "0","1","2","3","4","5","6","7","8","9");
var special = ("!","@","#","$","%","^","&","*","?");

var generatePassword = function() {
    var letterchoice = window.confirm("include letters? ");
    // letterchoice = letterchoice.toLowerCase();


    if (letterchoice) {
              
        var index = Math.floor(Math.random() * letters.length);
        var computerchoice = letters[index];
        var password = computerchoice;
        console.log(password);
        
    }


}
// window.prompt("include numbers? type y or n");
// window.prompt("include special characters? type y or n");

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