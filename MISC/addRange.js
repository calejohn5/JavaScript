/*
add all numbers in a range between the two numbers and two numbers.
this is my first raw attempt with no help.
*/
function sumAll(arr) {
    let maxNum = Math.max(...arr);
    let minNum = Math.min(...arr);
  
  let nums = 0;
  while (minNum+1 < maxNum){
    nums += minNum+1;
    minNum++
    }
     return(nums + Math.max(...arr) + Math.min(...arr));
  }
  sumAll([1, 4]);

  /*
A cleaner method I got help with would be..

function sumAll(arr) {
  var max = Math.max(...arr);
  var min = Math.min(...arr);
  var temp = 0;
  for (var i = min; i <= max; i++) {
    temp += i;
  }
  return temp;
}

sumAll([1, 4]);
  */