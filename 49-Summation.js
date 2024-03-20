/* 
Soal :
Summation
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.

For example (Input -> Output):

2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
*/

// Cara 1
/* var summation = function (num) {
    let result = 0;
    for(let i = 1; i <= num; i++){
        result += i;
    }
    return result;
} */

// Cara 2
/* const summation = num => {
    return Array.from({length:num}, (_, i) => i + 1).reduce((a, b) => a + b, 0);
} */

// Cara 3
// const summation = num => [...Array(num)].map((_, i) => i + 1).reduce((acc, curr) => acc + curr, 0);

// Cara 4
const summation = num => num * (num + 1) / 2;

console.log(summation(8));