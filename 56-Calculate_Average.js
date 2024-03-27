/* 
Soal :
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
*/

// Cara 1
/* function findAverage(array) {
    let result = 0;
    for(let i of array){
        result += i;
    }
    if(array.length > 0){
        return result / array.length
    } else {
        return 0;
    }
} */

// Cara 2
const findAverage = array => array.length > 0 ? array.reduce((acc, curr) => acc + curr, 0) / array.length : 0

console.log(findAverage([1,2,3,4]))