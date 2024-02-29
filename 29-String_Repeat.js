/* 
Soal :
Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"
*/

// Cara 1
/* function repeatStr (n, s) {
    let result = '';
    for(let i = 0; i < n; i++){
        result += s;
    }
    return result;
} */

// Cara 2
const repeatStr = (n, s) => s.repeat(n);

console.log(repeatStr(5, "Hello"));