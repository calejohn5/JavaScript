/*
A much more efficient way to code a palindrome checker, returning true or false
*/
function palindrome(str) {
    return (
// compare in a return statement
// remove all alphanumeric chars and set to lowercase.
      str.replace(/[\W_]/g, "").toLowerCase() === str.replace(/[\W_]/g, "")
        .toLowerCase()
        .split("")
        .reverse()
        .join("")
    );
  }
palindrome("_eye"); // returns true