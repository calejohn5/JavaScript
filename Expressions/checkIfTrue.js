// check to see if a 7 is in an array, if so return "Boom"
function sevenBoom(arr) {
    const regex = /7/gi;
// check to see if theres a 7
    if (regex.test(arr) === true){
      return ("Boom!")
    }
    else return ("there is no 7 in the array");
  }

  console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7])) // "Boom!"
  console.log(sevenBoom([8, 6, 33, 100])) // "there is no 7 in the array"
  console.log(sevenBoom([2, 55, 60, 97, 86])) // "Boom!"