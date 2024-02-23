/* 
Soal :
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/

// Cara 1
/* function positiveSum(arr) {
    let result = 0;
    for(let i = 0; i < arr.length; i++){
      if(i >= 0){
          result += i
      }
    }
    return result;
  } */

// Cara 2
/* function positiveSum(arr) {
  let result = 0;
  for(let i of arr){
    if(i >= 0){
        result += i
    }
  }
  return result;
} */

// Cara 3
const positiveSum = arr => arr.reduce((acc, curr) => acc + (curr > 0 ? curr : 0))

console.log(positiveSum([1,-2,3,4,5]));