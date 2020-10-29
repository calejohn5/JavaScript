/*
Use a capture group to set str backwards... three two one
*/

let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; 
let replaceText = "$3 $2 $1"; 
let result = str.replace(fixRegex, replaceText);

/*
1) (\w+)  - make first capture group, it is everything until....
2) \s  - set a whitespace between each group
3) (\w+)\s(\w+)  - repeat two more times to set 3 capture groups
4) "$3 $2 $1"  - we set our new string backwards in a var, and set our result      
*/



/*
I can also remove whitestring similarly as follows...
*/
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; 
let result = hello.replace(wsRegex, "");