/*
Explain about Rest and Spread operator.
*/



//-------Rest Operator-------

function addNumbers1(a,b,c){
    return a+b+c;
}
const res1= addNumbers1(2,4,5)
console.log(res1) // 11

function addNumbers2(a,b,c){
    return a+b+c;
}
const res2= addNumbers2(2,4,5,10,20,11) // Here it does not consider about the values given as arguments after the 3 values 2,4,5
console.log(res2) // 11


function addNumbers3(a,b,c,...other){
    console.log(other) // [ 10, 20, 11 ]
    return a+b+c;
}
/*
Here i used rest operator as parameters in the function declaration, it is represented by 3 dots followed by some 
name.

when i logged "other", it logs a array of the values passed as arguments after the specified 3 values in this
example.
 */
const res3= addNumbers3(2,4,5,10,20,11) 
console.log(res3) // 11


//-------Spread Operator-------

var names= ["Rudra", "Tyla", "Celine", "Kai", "Ray"]

function getNames(...rest){ // this rest operator is receiving as many values as given in the function call.
    console.log(...rest)
}
getNames(...names) // Rudra Tyla Celine Kai Ray
//this is the spread operator which is basically spreading the values of names array.


/*
----WITH OBJECTS----
 */

//Rest
var student={
    fname: "Rudra",
    lname: "Makhija",
    age: 18,
    location: "Delhi"
}
const {location, ...remaining}= student
console.log(location,remaining) // Delhi { fname: 'Rudra', lname: 'Makhija', age: 18 }

//Spread
var newStudent={
    ...student,
    age: 55 // spreading the student object in newStudent object then overriding the value of age.
}
console.log(newStudent) // { fname: 'Rudra', lname: 'Makhija', age: 55, location: 'Delhi' }
