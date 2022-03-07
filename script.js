// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  if (password){
    passwordText.value = password;
  } else {
    passwordText.value = '';
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Different buckets of character choices
  var capitalCase = ["A","B","C","D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q","R","S","T","U","V","W","X","Y","Z"];
  var smallCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var numberArr = ['0','1','2','3','4','5','6','7','8','9']; 
  var specialChar = ["!","#","$","%","&","(",")", "*","+","-",".","/", ":",";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"]; 

// Funcion to generate password
function generatePassword(){

  var text = "";
  var consolidatedArr = [];

  //Getting input from the user
  let passLength = prompt("how many characters password you like generate?, Choose between 8 to 128");
  
  //Password length must be numeric and between value 8 to 128
  if (isNaN(passLength)){
    alert("Password length must be a number. Please Try again!!");
    return;
  } else if (passLength < 8 || passLength > 128) {
    alert("Password length can be only between 8 to 128 characters. Please try again!!");
  return;
  };

// getting combinations of character preferences and building characters set 

  let choiceCap = "Would you like to include upper case letters in your password?";
  prefCap = confirm(choiceCap);

  let choiceSmall = "Would you like to include lower case letters in your password?";
  prefSmall = confirm(choiceSmall);

  let choiceSpec = "Would you like to include special characters in your password?";
  prefSpec = confirm(choiceSpec);

  let choiceNum = "Would you like to include numbers in your password?";
  prefNum = confirm(choiceNum);

  if (!prefCap && !prefSmall && !prefSpec && !prefNum)
  {
    alert("you must have atleast one choice of character set. Please try again later!!! ");
    consolidatedArr = [];
    return;
  } else
  {

      if (prefCap == true) {
        consolidatedArr = consolidatedArr.concat(capitalCase);
      }

      if (prefSmall == true)
      {
        consolidatedArr = consolidatedArr.concat(smallCase);
      }

      if (prefSpec  == true) {
        consolidatedArr = consolidatedArr.concat(specialChar);
      }

      if(prefNum == true) {
        consolidatedArr = consolidatedArr.concat(numberArr);
      }
  }

//Building the password
  for (var i = 0; i < passLength; i++)
    text += consolidatedArr[Math.floor(Math.random() * consolidatedArr.length)];
  return text;
}
