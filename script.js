// Assignment code here

function uniCodeRange(x,y){
  const uniRange =[]
  for(let i = x; i <=y; i++){
    uniRange.push(i)
  }return uniRange
}




const upperCaseChar =  uniCodeRange(65,90);
const LowerCaseChar =  uniCodeRange(97,122);
const numChar =  uniCodeRange(48,57);
const symbolChar= uniCodeRange(33,47);

// Get references to the #generate element
 
const writePassword = function(){
  let passwordLenght = 8;
 do{passwordLenght = parseInt(window.prompt("Type a number for length of password between 8 and 128"));
 }while (passwordLenght < 8 || passwordLenght > 128);
 const includeUpperCase = window.confirm("Do You want upper case included?");
 const includeNumeric = window.confirm("do you want Nubers included");
 const includeSpecial= window.confirm("Do You want Special Characters included"); 

 
 const passwordText = document.querySelector("#password");
  
const password= generatePassword( passwordLenght, includeUpperCase, includeNumeric, includeSpecial)
passwordText.value = password 

}


function generatePassword(passwordLenght,  includeUpperCase, includeNumeric, includeSpecial){
  let charCodes = LowerCaseChar;
  if(includeUpperCase) charCodes = charCodes.concat(upperCaseChar)
  if(includeNumeric) charCodes = charCodes.concat(numChar)
  if(includeSpecial)charCodes= charCodes.concat(symbolChar)
 const passwordChar = []
  for(let i=0; i < passwordLenght;i++){
  const characterCodes = charCodes[Math.floor(Math.random()*charCodes.length)]
   passwordChar.push(String.fromCharCode(characterCodes))
   }return passwordChar.join('')
// Write password to the #password input

}
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword)




