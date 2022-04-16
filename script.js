
// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Special characters 
var character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Numeric characters
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Alphabetical characters
var lowerAlpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperAlpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y", "Z"];
var confirmNumber;
var confirmCharacter;
var confirmUpper;
var confirmLower;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var enter;
var choices;
function generatePassword() {
    // Asks to enter password
    enter = parseInt(prompt("How many characters you want for ur password? Choose between 8 & 128"));
    //first ask
    if (!enter){
          alert ("Please enter a # bro");}
    //if new condition is false -- if again you do not choose between 8 and 128      
    else if (enter < 8 || enter > 128) {
    enter = parseInt(prompt("You gotta choose between 8 & 128 bro"));}

    
    
    //confirm critera
   else {
    confirmNumber = confirm("Will this contain numbers?");
    confirmCharacter = confirm("Will this contain special characters?");
    confirmUpper = confirm("Will this contain Uppercase letters?");
    confirmLower = confirm("Will this contain Lowercase letters?");
};

// 4 negative options
if (!confirmCharacter && !confirmNumber && !confirmUpper && !confirmLower) {
  choices = alert("You gotta choose at least 1 bro");
}

//four positve options
else if (confirmCharacter && confirmNumber && confirmUpper && confirmLower) {
  choices = character.concat(number, lowerAlpha, upperAlpha);
}

// Three positive options
else if (confirmCharacter && confirmNumber && confirmUpper) {
  choices = character.concat(number, upperAlpha);
}
else if (confirmCharacter && confirmNumber && confirmLower) {
  choices = character.concat(number, lowerAlpha);
}
else if (confirmCharacter && confirmLower && confirmUpper) {
  choices = character.concat(lowerAlpha, upperAlpha);
}
else if (confirmNumber && confirmLower && confirmUpper) {
  choices = number.concat(lowerAlpha, upperAlpha);
}

// Two positive options 
else if (confirmCharacter && confirmNumber) {
  choices = character.concat(number);

} else if (confirmCharacter && confirmLower) {
  choices = character.concat(lowerAlpha);

} else if (confirmCharacter && confirmUpper) {
  choices = character.concat(upperAlpha);
}
else if (confirmLower && confirmNumber) {
  choices = lowerAlpha.concat(number);

} else if (confirmLower && confirmUpper) {
  choices = lowerAlpha.concat(upperAlpha);

} else if (confirmNumber && confirmUpper) {
  choices = number.concat(upperAlpha);
}

// One positive option
else if (confirmCharacter) {
    choices = character;
}
else if (confirmNumber) {
    choices = number;
}
else if (confirmLower) {
    choices = lowerAlpha;
}
else if (confirmUpper){
  choices = upperAlpha
};

//password length array
var pass = [];

// Start random selection variables:
// Random selection for all variables: 
for (var i = 0; i < enter; i++) {
      var pickChoices = choices[Math.floor(Math.random() * choices.length)];
      pass.push(pickChoices);
  }
  // This joins the password array and converts it to a string
  // Worked with a tutor to incorporate this option
  var password = pass.join("");
  UserInput(password);
  return password;
  }


// This puts the password value into the textbox
// Changed function input to use textcontent
function UserInput(password) {
  document.getElementById("password").textContent = password;

}