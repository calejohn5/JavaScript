/*
Using lookaheads in the pwRegex, match passwords that are greater than 5 characters long, do not begin with numbers, and have two consecutive digits
*/
let sampleWord = "astronaut";
let pwRegex = /^\D(?=\w{5})(?=\w*\d{2})/; 
let result = pwRegex.test(sampleWord);

/*
1) ^\D  - make sure starts with non-digit
2) (?=)  - look ahead to check for...
3) \w{5} - ANYTHING exists atleast 5 long

4) (?=) - start again with look ahead
5) \w*\d{2}  - anything exists with 2 consecutive numbers
*/