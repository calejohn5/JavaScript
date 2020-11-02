// check to see if element is in an array
function quickCheck(arr, elem) {
// search array using indexOf with the elem parameter
// it will return false the element is found.... (-1 means it doesn't exist)
  return arr.indexOf(elem) != -1;

  }
  
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
  