/* 
Soal :
Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]
*/

// Cara 1
/* function digitize(n) {
    //code here
    let string = n.toString()
    let result = [];
    for(let i = 0; i < string.length; i++){
      result.push(Number(string[i]))
    }
    return result.reverse()
    
} */

// Cara 2
/* function digitize(n) {
    //code here
    let string = n.toString()
    let result = [];
    for(let i = string.length - 1; i >= 0; i--){
      result.push(Number(string[i]))
    }
    return result
    
} */

// Cara 3
const digitize = n => n.toString().split('').map(n => +n).reverse()

console.log(digitize(35231));