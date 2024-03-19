/*
Soal :
You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not. 
*/

// Cara 1
/* function check(a, x) {
    // your code here
    let result = [];
    for(let i of a){
        if(i === x){
            result.push(i)
        }
    }
    return result.length ? true : false
} */

// Cara 2
/* function check(a, x) {
    // your code here
    let result = false;
    for(let i of a){
        if(i === x){
            result = true
        }
    }
    return result;
} */

// Cara 3
const check = (a, x) => a.includes(x);

console.log(check(['t', 'e', 's', 't'], 'e'));
console.log(check(['what', 'a', 'great', 'kata'], 'kat'))