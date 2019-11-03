// VARIBLES
var generatorButton = document.querySelector("#generate");
var passwordBowl = "null";
var passwordFinal = "null";
var characterLength = "null";
var useSpecialChar = "null";


//Arrays
// ====================================================
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = lowercase.toUpperCase();
var numbers = "0123456789";
// use "\" to define the (") as a string 
var specialChar = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";


// check for character length
function getCharacterLength(){
    while (characterLength === "null"){
        console.log(characterLength);
        characterLength = prompt("From 8-128 characters, how ");
        if (characterLength < 8 || characterLength > 128){
            characterLength = "null";
            alert ("Please choose a character length of 8-128.")
        }
        else{
        console.log("Password length requested = " + characterLength);
        }
    } 
}

// check to see if user wants special characters
function getSpecialChar(){
    while (useSpecialChar === "null"){
        useSpecialChar = confirm("Would you like to strengthen your password by using special characters?");
        console.log(useSpecialChar);
    }
}

function createPassword(){

}
// Prompt activation
function startGenerator(){
    getCharacterLength();
    getSpecialChar();
    }


