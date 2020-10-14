// using recursion
function pow(x,z){
    // x to the 1st power - stays the same
    if (z==1){
        return x;
    }
    else {
        return x* pow(x, z-1);
    }
}
console.log(pow(3,3)); //3^3 logs 27

// simple version
console.log(Math.pow(3,3));