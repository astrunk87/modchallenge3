// Assignment code here
var letters = ("abcdefghijklmnopqrstuvwxyz");
var numbers = ("1234567890");
var special = ("!@#$%^&?");





var generatePassword = function() {
    var letterchoice = window.confirm("include letters?");
    var numchoice = window.confirm("include numbers?");
    var specialchoice = window.confirm("include special characters?");
    var lengthchoice = window.prompt("enter length for passward, betwen 8 to 128");

    var specialcharacters = []
    
   
    if (letterchoice) {              
        var index = Math.floor(Math.random() * letters.length);
        console.log(letters[index]);  
        specialcharacters.push(letters[index]);   
           
     }     

    if (numchoice) {
        var index = Math.floor(Math.random() * numbers.length);
        console.log(numbers[index]);
        specialcharacters.push(numbers[index]); 
    }
    if (specialchoice) {
        var index = Math.floor(Math.random() * special.length);
        console.log(special[index]);
        specialcharacters.push(special[index]);
        
    }
    // this part was with help for my instructor

        

    var totalcharacters = (special.concat(numbers + letters));
    console.log(totalcharacters);
   

    var temp = []

    for(var i = 0; i<lengthchoice; i++){
        temp.push(Math.floor(Math.random()*specialcharacters.length));
        
        
                
                
    }
    // console.log(temp);
    temp.splice(-specialcharacters.length);
    
    // console.log(temp);
    
    
    for(var i = 0; i<specialcharacters.length; i++){
        temp.push(specialcharacters[i]);
        // console.log(temp);

    }
   
    
    if(lengthchoice <=128 && lengthchoice >=8) {
        alert(temp);
        console.log(temp);
    } else if(lengthchoice >128 || lengthchoice <8){
        alert("please choose length between 8 and 128")
        return;
        
    }        
    
    
   
    
} 

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = ("#password");
//   console.log(password);
//   console.log(passwordText);
    
  passwordText.value = password;
 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// writePassword();

// generatePassword();