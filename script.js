// Assignment Code
var generateBtn = document.querySelector("#generate");
//Created userChoice, lowercase, and uppercase
var userChoice = [];
let finalPassword = [];
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase ="ABCDEFGHIGKLMNOPQRSTUVWXYZ"


// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");


passwordText.value = password;


}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword(){
let passwordLength = prompt('please provide a minimum length of 8 and a maximum length of 128 for your preferred password');
console.log('password length --> ', passwordLength);
if(passwordLength < 8 || passwordLength > 128){
// alerts users to try again and did not finish condition
alert(['please provide the requested length'])
}
else {
//Lowercase Code
var includelowerCase = confirm("Would you want to include Lowercase letters");
if(includelowerCase){
//push means to add new items at the end of a array
userChoice.push(...lowerCase)
}

//Uppercase Code
var includeupperCase = confirm("Would you like Uppercase");
if(includeupperCase) {
userChoice.push(...upperCase)
}

//Numeric Code
var includeNumeric



console.log('user choice array --> ', userChoice);

//This is the loop
for (let i = 0; i < passwordLength; i++) {
//Math floor brings any numbers that is lower numbers & random gives a random reponse
finalPassword.push(userChoice[Math.floor(Math.random() * userChoice.length)])
console.log('finalPassword --> ', finalPassword);
}
}
}




// var includeUppercase = confirm("include Uppercase letters")
// var includeLowercase = confirm("include Lowercase letters")
// var includeNumeric = confirm("include Numbers")
// var includeSpecialChars = confirm("include Special characters")

// console.log(includeUppercase, includeLowercase, includeNumbers, includeSpecialChars)