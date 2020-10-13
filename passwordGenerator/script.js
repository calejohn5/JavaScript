const pw = document.getElementById('pw');
const copy = document.getElementById('copy');
const len = document.getElementById('len');
const upper = document.getElementById('upper');
const lower = document.getElementById('lower');
const number = document.getElementById('number');
const symbol = document.getElementById('symbol');
const generate = document.getElementById('generate');

const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';

const numbers = '0123456789';
const symbols = '!@#$%^&*()_+-=';

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
alert(getNumber);