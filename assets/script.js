// Assignment Code
var generateBtn = document.querySelector("#generate");

//possible keys

var upperCase = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M","N","O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var numbers = ['1','2','3','4','5','6','7','8','9','0'];

var special = ["~", "!", "@", "#", "$", "%","^","&","*","(",")","-","_", ":",";",".","'","[","]","{","}","?",","];

// Write password to the #password input
function compGeneratedPass() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Creating function for password generation
function generatePassword() {
  
  // Asking user for characteristic choices
  //password length
  
  var lengthConfirm = window.prompt ("Please select password length. Password must be at least 8 characters and no more than 128 characters.")
  
  //checking validity of length selected
  
  if (lengthConfirm < 8 || lengthConfirm > 128){
    window.alert("Not a valid password length, please try again.");
    return;
  }
  
  if (isNaN(lengthConfirm)){
    window.alert("Invalid entry, please try again.")
  }
  
  //uppercase selection
  
  var upperConfirm= window.confirm ("Would you like uppercase letters in your password?")
  
  //lowercase selection
  
  var lowerConfirm = window.confirm ("Would you like lowercase letters in your password?")
  
  //number selection
  
  var numberConfirm = window.confirm ("Would you like numbers in your password?")
  
  //special character selection
  
  var specialConfirm = window.confirm ("Would you like special characters in your password?")
  
  //Creating Returns
  //if no values have been selected 
  
  if (!upperConfirm && !lowerConfirm && !numberConfirm && !specialConfirm){
    window.alert("No seclections made. Please try again and select which characters you would like in your password.");
    return generatePassword();
  }
  
  //generating
  
  var possibleCharacters = [];
  var finalPassword = "";
  
  //returns based on user selection
  
  if (upperConfirm) { possibleCharacters = possibleCharacters.concat(upperCase)};
  
  if (lowerConfirm) { possibleCharacters = possibleCharacters.concat(lowerCase)};
  
  if (numberConfirm) { possibleCharacters = possibleCharacters.concat(numbers)};
  
  if (specialConfirm) { possibleCharacters = possibleCharacters.concat(special)};
  
  //for-loop that will randomize characters based on user selection
  
  for (var i=0; i < lengthConfirm; i++){
    var randomize =   Math.floor(Math.random() * possibleCharacters.length)
    finalPassword += possibleCharacters[randomize]
  }
  
  //final generation
  
  return finalPassword
}
// Add event listener to generate button
generateBtn.addEventListener("click", compGeneratedPass);