/*
Regex ohRegex matches the entire phrase "Oh no" only when it has 3 to 6 (h)s
*/
let ohStr = "Ohhh no";
let ohRegex = /oh{3,6}\sno/gi; 
let result = ohRegex.test(ohStr);

/*
1) start with o
2) specify how many (h)s together {3-6}
3) include whitespaces \s
4) include no
5) non-case sensitive and include all
*/