const add = (function(){
    var counter = 0;
    return function() {counter+= 1; return counter}
})();
add(); // counter value is 1

console.log(add);