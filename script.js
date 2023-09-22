// Assignment Code
var generateBtn = document.querySelector("#generate");
//Created userChoice, lowercase, uppercase, numeric, special characters
var userChoice = [];
let finalPassword = [];

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase ="ABCDEFGHIGKLMNOPQRSTUVWXYZ";
var numeric = "123456789";
var specialChars = "!#@_?";

// Writing th password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;


}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

userChoice = []
finalPassword = []


function generatePassword(){
let passwordLength = prompt('please provide a minimum length of 8 and a maximum length of 128 for your preferred password');
console.log('password length --> ', passwordLength);
if(passwordLength < 8 || passwordLength > 128){
// alerts users to try again and did not finish condition
alert(['Please provide the requested length'])
}
else {
//Lowercase Code
var includelowerCase = confirm("Would you want to include Lowercase letters?");
if(includelowerCase){
//push means to add new items at the end of a array
userChoice.push(...lowerCase)
}

//Uppercase Code
var includeupperCase = confirm("Would you like Uppercase letters?");
if(includeupperCase) {
userChoice.push(...upperCase)
}

//Numeric Code
var includenumeric = confirm("Would you like to add numbers?");
if(includenumeric){
  userChoice.push(...numeric)
}

//Special Characters Code
var includespecialChars = confirm("Would you like to add Special Characters?")
if(includespecialChars) {
  userChoice.push(...specialChars)
}


console.log('user choice array --> ', userChoice);

//This is the loop
for (let i = 0; i < passwordLength; i++) {
//Math floor brings any numbers that is lower numbers & random gives a random reponse
finalPassword.push(userChoice[Math.floor(Math.random() * userChoice.length)])
console.log('finalPassword --> ', finalPassword);
}
return finalPassword;
}
}
