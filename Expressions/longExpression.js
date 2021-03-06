/*
Use regex userCheck to...
1) Usernames can only use alpha-numeric characters.
2) The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.
3) Username letters can be lowercase and uppercase.
4) Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.
*/

let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; 
let result = userCheck.test(username);

/* EXPLANATION
1) ^ - start of input
2) \D - first character is a letter                           ([a-z])
3) \D+ - following characters are letters                     ([a-z])
4) \d*$ - input ends with 0 or more digits                    ([0-9])
5) | - or
6) ^\D - first character is a letter                          ([a-z])
7) \d\d+ - following characters are 2 or more digits          ([0-9]) 
8) $ - end of input
*/