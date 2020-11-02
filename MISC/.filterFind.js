// function that returns amount of true values in array
function countTrue(arr) {
// use filter method to store total amt of true statements into result
	 const result = arr.filter(arr => arr === true);
   console.log(result.length);
}
countTrue([true, false, false, true, false]) 