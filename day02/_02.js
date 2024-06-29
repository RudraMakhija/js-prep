/*
What is NaN property in JavaScript?
*/

/*

NaN property in javascript represents Not-a-Number.

It means that a value is not a legal or valid number.

The typeof NaN returns Number only.

To check if a value is NaN, we can use the isNaN() function.

Mechanism of isNaN() function: It converts the given value into number type and then checks.

*/

console.log(typeof(NaN))

console.log(isNaN("Hi")) // Returns true
console.log(isNaN(0)) // Returns false, since 0 is a number
console.log(isNaN('1'))  // Returns false, since '1' is converted to Number type which results in 0 ( a number) 
console.log(isNaN(true)) // Returns false, since true converted to Number type results in 1 ( a number)
console.log(isNaN(false)) // Returns false, since false converted to Number type results in 0 ( a number)
console.log(isNaN(undefined)) // Returns true

