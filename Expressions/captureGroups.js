/*
match numbers that are repeated only three times in a string, each separated by a space
*/

let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; 
let result = reRegex.test(repeatNum);

/*
1) ^(\d+)  - make sure it starts with a number, and that number repeats
2) \s  - check for whitespace
3) \1
*/