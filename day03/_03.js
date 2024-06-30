/*
Implement a function for infinite currying to add numbers.

console.log(add(4)(5)()) 

Make your add function in a way so that if it receives as many values in arguments it gives the sum.
*/

function add(a){
    return function(b){
        if(b) return add(a+b)
        
        return a
    }
}
console.log(add(4)(5)())  //9
console.log(add(4)(5)(10)())  //19
console.log(add(4)(5)(10)(15)())  //34