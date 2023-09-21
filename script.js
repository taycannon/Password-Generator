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
  return "password";
}







// create funtion to take in all password criteria
  //prompt user for length of password and save as a variable
  //check to make sure the length is between 8 & 128
  //confrim lower/upper case, numeric & special characters
  //vaildate 1 of the 4 options to be selected
  //create an object to store user input
  
//create a seperate global array for each of the 4 confrimations

//inside generatePassword function
  //create a variable to store user input from the password option function
  //create a new array that will take in all possible characters that canbe used for a new password
  //create conditional statements to push into possible character array
    //Ex: if the user selected lower case then wee need to push those elements in the lowercase array into possible character array
  //loop through the possible charater array and return character based on the length given by user
  //returen the result and pass to be generated on the page