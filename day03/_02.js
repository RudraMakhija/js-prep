/*
Explain about Currying in Javascript.
*/


function add(a, b, c){
    return a+b+c;
}
let res= add(1,2,3)
console.log(res) // 6


function add2(a){
    return function add3(b){
        return function add4(c){
            return a+b+c;
        }
    }
}

let data= add2(10)
console.log(data) // [Function: add3]


let data2= add2(10)(20) // [Function: add4]
console.log(data2) 

let data3= add2(10)(20)(30) // This is basically currying concept.
console.log(data3) // 60 