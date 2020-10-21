// this will test if the parameter is true or not...
function isTruthy(input) {
    if (input) {
      return 1;
    }
    else {
      return 0;
    }
}

/* FOLLOWING ARE ALWAYS FALSE

false
0 (zero)
'' or "" (empty string)
null
undefined
NaN

*/

/* FOLLOWING ARE ALWAYS TRUE

'0' (a string containing a single zero)
'false' (a string containing the text “false”)
[] (an empty array)
{} (an empty object)
function(){} (an “empty” function)

*/