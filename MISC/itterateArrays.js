// itterate through an array and delete any array that contains elem in it
function filteredArray(arr, elem) {
    let newArr = [];
// loop thru each array
    for (let i = 0; i < arr.length; i++) {
// add to new array if element is not found
      if (arr[i].indexOf(elem) == -1) {
        newArr.push(arr[i]);
      }
    }

    return newArr;
  }
  
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

  //indexOf finds if given element exists, and returns -1 if not