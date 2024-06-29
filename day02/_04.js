/*
What are callbacks?
 */


/*

Functions that are used as an argument to another functions are called Callbacks.

Callback functions will be only executed when the function in which they are passed as an argument gets executed.

*/

function divideByHalf(sum){
    console.log(Math.floor(sum/2))
}
function multiplyBy2(sum){
    console.log(sum*2)
}
function operationOnSum(num1, num2, operation){
    var sum= num1 + num2
    operation(sum)
}

operationOnSum(5,5,divideByHalf) // 5
operationOnSum(5,5,multiplyBy2) // 20
