/*
What are the different data types present in javascript?
*/


/*

PRIMITIVE DATA TYPES:-

There are 7 primitive data types in javascript:-

1. String: used to store a series of characters, can be represented in single or double quotes.

2. Symbol: introduced in ES6 version, used to store an anonymous and unique value.

3. BigInt: used to store numbers which are beyond the range of number data type, represented by adding n at the end of integer literal.

4. Boolean: used to store true or false.     

5. Number: used to store numbers(with or without decimals).

6. Null: represents a non-existent or invalid value.

7. Undefined: when a variable is declared but not assigned any value.

//Acronym to learn is SS-BB-NN-U

*/

let a= "This is a string"
let b= Symbol('symbol')
let c=  234567890123456789012345678901234567890n
let d= true
let e= 45
let f=null
let g;

console.log(typeof(a)) //logs string
console.log(typeof(b)) //logs symbol
console.log(typeof(c)) //logs bigint
console.log(typeof(d)) //logs boolean
console.log(typeof(e)) //logs number
console.log(typeof(f)) //logs object(it's actually null but it's a bug of javascript that it logs object)
console.log(typeof(g)) //logs undefined


/* 

NON PRIMITIVE DATA TYPES:-
Primitive data types can store only a single value, to store multiple and complex values non primitive data types are used.

1. Objects: stores data in key value pairs.

2. Arrays: stores data in the format of orderer lists.

*/

let anObject= {
    firstName: "Rudra",
    lastName: "Makhija",
    age: 18,
    location: "Delhi"
}

let anArray= ["apple", "banana", "grapes", "mango"]

console.log(anObject) //logs { firstName: 'Rudra', lastName: 'Makhija', age: 18, location: 'Delhi' }
console.log(anArray) //logs [ 'apple', 'banana', 'grapes', 'mango' ]

console.log(typeof(anObject)) //logs object
console.log(typeof(anArray)) //logs object

/*

type of any non primitive data type is object.

*/

