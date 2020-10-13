// CONVENTIONAL IF ELSE STATEMENT
let nums = 0;
function multiplesOf3and5(number) {
    for (let i=1; i<number;i++){
    if (i % 5 == 0) 
        nums += i;
    else if (i % 3 == 0)
        nums += i;
    }
    return nums;
}   

// USING WHILE STATEMENT
let sum = 0;
function multiplesOf3and5(number) {
    let i = 3;
    while (i < number) {
      if (i % 3 == 0 || i % 5 == 0) sum += i;
      i++;
    }
    return sum;
  }
multiplesOf3and5(1000);
console.log(sum);
