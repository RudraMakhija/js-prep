/*
Explain Implicit Type Coercion in javascript.
*/

/*
 
Implicit type coercion is a concept in javascript that converts one data type into another data type automatically.
It takes place when the operands of the expression are of different data types.

 */

// String coercion

// with the '+' operator: when a number is added to a string, the number data type gets converted into string data type.
let a= "3" + 5
console.log(a) //35
console.log(typeof(a)) //string

let b= "2" + "3"
console.log(b) //23
console.log(typeof(b)) //string

// with the '-' operator, the string data type gets converted into number data type.
let c= "5" - 2
console.log(c) //3
console.log(typeof(c)) //number

let d= "7" - "2"
console.log(d) //5
console.log(typeof(d)) //number


/*

Equality coercion:-

For the equality operator "==", both the operands are converted into same data type i.e. coercion takes place.

For the equality operator "===", the operands are not converted into any other data type i.e. coercion does not takes place.

*/

//Boolean coercion:-

/*

Truthy values: Coerced to true.
Falsy values: Coerced to false.

There are only 8 falsy values in Javascript: false, 0, 0n, -0, "", null, undefined and NaN

All values except these 8 vaues are truthy values.

*/

if(""){
    console.log("Hi") //does not get executed because "" is a falsy value so it gets coerced to false.
}
if(" "){
    console.log("Hello") //gets executed because " " is a truthy value so it gets coerced to true.
}
if(0){
    console.log("Bye") //does not get executed because 0 is a falsy value so it gets coerced to false.
}
if(25){
    console.log("I am 25.") //gets executed because 25 is a truthy value so it gets coerced to true.
}

/*
 
Similar things happen for Logical operators || and &&.

Truthy values gets coerced to true and falsy values gets coerced to false.

 */