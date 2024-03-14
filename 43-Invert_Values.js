/* 
Soal :
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list.
*/

// Cara 1
/* function invert(array) {
    let result = [];
    for(let i of array){
        result.push(i * -1);
    }
    return result;
} */

// Cara 2
const invert = array => array.map(el => -el);

console.log(invert([1,-2,3,-4,5]));