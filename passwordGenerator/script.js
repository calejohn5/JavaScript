const pwEle = document.getElementById('pw');
const copyEle = document.getElementById('copy');
const lengthEle = document.getElementById('len');
const upperEle = document.getElementById('upper');
const lowerEle = document.getElementById('lower');
const numberEle = document.getElementById('number');
const symbolEle = document.getElementById('symbol');
const generateEle = document.getElementById('generate');

const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';

const numbers = "0123456789";
const symbols = '!@#$%^&*()_+-=';

// create functions that create random number in our vars from above.
function getLowerCase(){
    return lowerLetters[Math.floor(Math.random()* lowerLetters.length)];
}
function getUpperCase(){
    return upperLetters[Math.floor(Math.random()* upperLetters.length)];
}
function getNumber(){
    return numbers[Math.floor(Math.random() * numbers.length)];
}
function getSymbol(){
    return symbols[Math.floor(Math.random()* symbols.length)];
}
 function generatePassword(){
    const len = lengthEle.nodeValue;
    let password=""

    // find what boxes are checked, then call related function.
    if (upperEle.checked){
        password += getUpperCase;
    }
    if (lowerEle.checked){
        password += getLowerCase;
    }
    if (numberEle.checked){
        password += getNumber;
    }
    if (symbolEle.checked){
        password += getSymbol;
    }
 }