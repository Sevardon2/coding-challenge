/* 
Soal :
Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]
*/

// Cara 1
/* function maps(x){
    let result = [];
    for(let i of x){
        result.push(i * 2);
    }
    return result;
} */

// Cara 2
const maps = x => x.map(x => x * 2)

console.log(maps([4, 1, 1, 1, 4]))