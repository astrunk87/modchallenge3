// Assignment code here
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","o","p","q","r","s","t","u","v","w","x","y","z"]
var numbers = [ "0","1","2","3","4","5","6","7","8","9"];
var special = ["!","@","#","$","%","^","&","*","?"];



var generatePassword = function() {
    var letterchoice = window.confirm("include letters?");
    var numchoice = window.confirm("include numbers?");
    var specialchoice = window.confirm("include special characters?");
    var lengthchoice = window.prompt("enter length for passward, betwen 8 to 128");
    
   
    if (letterchoice) {              
        var index = Math.floor(Math.random() * letters.length);
        console.log(letters[index]);  
        pass1 = (letters[index]);   
           
     }
     

    if (numchoice) {
        var index = Math.floor(Math.random() * numbers.length);
        console.log(numbers[index]);
        pass2 = (numbers[index]); 
    }
    if (specialchoice) {
        var index = Math.floor(Math.random() * special.length);
        console.log(special[index]);
        pass3 = (special[index]);
        //  a = pass3.repeat(lengthchoice);
        //  console.log(a);
    }


    
    if(lengthchoice <=128 && lengthchoice >=8) {
        console.log(password);
    } else if(lengthchoice >128 || lengthchoice <8){
        alert("please choose length between 8 and 128")
        return
    }  }
    alert(password);
    
    
        
   
    


}
// var lengthchoice = window.prompt("enter length betwen 8 to 128");
    

// var passwordText=computerchoice;
// console.log(passwordText);



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