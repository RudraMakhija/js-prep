/*
Difference between “ == “ and “ === “ operators.
*/

/*

They both are comparsion operators.
“ == “ -> used to compare value
“ === “ -> used to compare value as well as type

*/

let a=10
let b=10
console.log(a==b) // true

let str= "10"
console.log(a==str) // true
console.log(a===str) // false
