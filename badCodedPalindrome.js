/*
This is my first attempt at a palindrome checker with absolutely no help from google/other examples.
It returns true if the input is a palindrome or not, and ignores all special characters except for whitespaces.
It is probably more complicated than it needs to be, but I wanted to test my raw knowledge
*/
function palindrome(str) {
// declare reverse to store our reversed string
        let reverse = "";
// loop the length of str, and add each letter in backwards into 'reverse' variable
        for (let i = str.length - 1; i >= 0;i--){
          reverse += str[i];
        }
//get rid of special characters/set to lowercase
        reverse = reverse.replace(/[^A-Za-z0-9]/g, '').toLowerCase(); 
        str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
// compare to see if palindrome or not
    console.log(str)
        if (reverse == str){
          return true;
        }
        else return false;
      }
      
    palindrome("A man, a plan, a canal. Panama") // returns true