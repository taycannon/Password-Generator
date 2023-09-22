// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  let passwordLength = prompt('how long do you want your password?');
  console.log('password length --> ', passwordLength);
  if(passwordLength < 8 || passwordLength > 128){
    alert(['please provide the requested length'])
  }
}



// var includeUppercase = confirm("include Uppercase letters")
// var includeLowercase = confirm("include Lowercase letters")
// var includeNumeric = confirm("include Numbers")
// var includeSpecialChars = confirm("include Special characters")

// console.log(includeUppercase, includeLowercase, includeNumbers, includeSpecialChars)