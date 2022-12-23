// Assignment Code
var generateBtn = document.querySelector("#generate");
var enter;
var getSpecial;
var getNumeric;
var getLower;
var getUpper;
var passwordLength;
let password;


special = ["!","@","#","$","%","^","&","*"," ","(",")","_","+","-","=","`","~",",","/", "?","{","}","[","]","|","\""]
//console.log(special);
let number = "1234567890";
let numArr = number.split("");
console.log(numArr);
let upperCase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let upperArr = upperCase.split("");
//console.log(upperArr);
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let lowerArr = lowerCase.split("");
//console.log(lowerArr);



function generatePassword(){
  //how many characters in password
  let password = "";
  let passwordChar = "";
  enter = parseInt(prompt("How many characters would you like your password to be?"));

  if(!enter){
    alert("Please enter valid token");
  }
    else if(enter < 8 || enter > 128){
      enter = parseInt(prompt("Please select a number between 8 and 128"));
    }
    else {
      getNumeric = confirm("Do you want numerical values?");
      getSpecial = confirm("Do you want special characters?");
      getUpper = confirm("Do you want Upper case letters?");
      getLower = confirm("Do you want lower case letters?");
    };
//single criteria
  if (getSpecial){
    passwordChar = special;
  } else if (getNumeric){
    passwordChar = numArr;
  } else if (getUpper){
    passwordChar = upperArr;
  } else if (getLower){
    passwordChar = lowerArr;
    //double criteria
  } else if (getSpecial && getNumeric){
    passwordChar = special += numArr;
  } else if (getSpecial && getUpper){
    passwordChar = special += upperArr;
  } else if (getSpecial && getLower){
    passwordChar = special += lowerArr;
  } else if (getNumeric && getLower){
      passwordChar = numArr += lowerArr;
  } else if (getNumeric && getUpper){
    passwordChar = numArr += upperArr;
  }else if (getLower && getUpper){
    passwordChar = lowerArr += upperArr;
    //triple criteria
  } else if (getSpecial && getNumeric && getUpper){
    passwordChar = special += numArr += upperArr;
  } else if (getSpecial && getNumeric && getLower){
    passwordChar = special += numArr += getLower;
  } else if (getSpecial && getUpper && getLower){
    passwordChar = special += upperArr += getLower;
  } else if (getNumeric && getLower && getUpper){
    passwordChar = numArr += getLower += getUpper;
  //quadruple criteria
  } else if (getSpecial && getNumeric && getLower && getUpper){
    passwordChar = special += numArr += getLower += getUpper;
  }
  for (let i = 0; i < password.length; i++){
 password = passwordChar[Math.floor(Math.random()*passwordChar.length)]
  }
  return (password);
  }
// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

