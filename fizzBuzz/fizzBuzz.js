    // Standard method 
for (var i =1;i<=100; i++){
    if (i %15 == 0) console.log('fizzBuzz');
    else if (i % 5 == 0) console.log('buzz');
    else if (i % 3 == 0) console.log('fizz');
    else console.log(i);
}


    //storing answers in an array
const arr = [];
for (var i =1;i<=100; i++){
    if (i %15 == 0) arr.push('fizzBuzz \n');
    else if (i % 5 == 0) arr.push('buzz \n');
    else if (i % 3 == 0) arr.push('fizz \n');
    else arr.push(i+ "\n");
}


    // Store answers in array, but instead get rid of commas by using .join and putting on new line with \b
const arrFinal = [];
for (var i =1;i<=100; i++){
    if (i %15 == 0) arrFinal.push('fizzBuzz');
    else if (i % 5 == 0) arrFinal.push('buzz');
    else if (i % 3 == 0) arrFinal.push('fizz');
    else arrFinal.push(i);
}
console.log(arrFinal.join('\b'));