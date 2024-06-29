/*
Explain Higher Order Functions in javascript.
 */

/*

Higher order functions are the functions that use some other function to do sum work.

Either they take some other function as an argument or they return a function.

*/

function HigherOrder1(fn){
    fn()
}
function HigherOrder2(){
    return function(){
        return "do something"
    }
}


HigherOrder1(function() { console.log("Hello world") }); // Hello world

let result= HigherOrder2()
console.log(result()) // do something
