/* 
Explain Hoisting in javascript.
*/

/* 

Hoisting is the default behaviour of javascript in which the variable and function declarations are moved to the top.

It does not matter where the variables and functions are declared in the scope, they are moved to the top (the scope can be both local and global).

*/

// Example 1: logs undefined (for var, the declaration is hoisted and initialised with undefined)
console.log(a)
var a= 10

//Example 2: logs 25 (here the declaration of b moves to the top and is initialised with undefined after that 25 value is assigned to b)
b= 25
console.log(b)
var b

// Example 3: variables declared with 'let' and 'const' are hoisted to the top of their block scope, but they are not initialised. They are hoisted in the temporal dead zone. The period b/w start of the block and declaration is known as temporal dead zone.
console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x = 10;
console.log(x); // 10

