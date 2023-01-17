// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

let length = 0;

function getLength() {
  while((length < 10) || length > 64){

    length = prompt("how long would you like your password");

    if(length<10){
      alert("password too short");
    }
    else if(length>64){
      alert("password length too long");
    }
    else{
      alert("password set! The length you desire is " + length);
      
    }

  }
}

let lowerCase = undefined;
let upperCase = undefined;
let num = undefined;
let spec = undefined;

var characterType = [lowerCase, upperCase, num, spec];
let checker = false;

function getChar() {
  while( checker === false ){

    alert("answer with y or n");

    // getting character types
    while(lowerCase ==  undefined){

      let q1 = prompt("do you want lowercases? (y/n)");

      if(q1 == "y"){
        lowerCase = "yes";
      }
      else if(q1 == "n"){
        lowerCase= "no";
      }else{
        alert("not the preferred letter")
      }

      }
      while(upperCase ==  undefined){

        

        let q1 = prompt("do you want uppercases? (y/n)");
    
        if(q1 == "y"){
          upperCase = "yes";
        }
        else if(q1 == "n"){
          upperCase= "no";
        }else{
          alert("not the preferred letter")
        }
    
      }
      while(num ==  undefined){

        let q1 = prompt("do you want numbers? (y/n)");
    
        if(q1 == "y"){
          num = "yes";
        }
        else if(q1 == "n"){
          num= "no";
        }else{
          alert("not the preferred letter")
        }
    
      }
      while(spec ==  undefined){

        let q1 = prompt("do you want numbers? (y/n)");
    
        if(q1 == "y"){
          spec = "yes";
        }
        else if(q1 == "n"){
          spec = "no";
        }else{
          alert("not the preferred letter")
        }
    
      }

      if(characterType.includes("yes")){

        checker = true;

      } else {

        checker = false;

      }

      if(checker === false){
        lowerCase = undefined;
        upperCase = undefined;
        num = undefined;
        spec = undefined;
        alert("please select one option at least!")
      } else {
        alert("charcter types set!")
      }
    }
}

// Function to prompt user for password options
function getPasswordOptions() {
  getLength();
  getChar();

}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

getPasswordOptions();