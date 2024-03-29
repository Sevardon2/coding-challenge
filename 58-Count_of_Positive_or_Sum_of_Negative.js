/* 
Soal :
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/

function countPositivesSumNegatives(input) {
    let count = [];
    let sum = 0;
    let result = [];
    if(input === null || input.length === 0){
      return []
    } else {
      for(let i = 0; i < input.length; i++){
          if(input[i] >= 1){
              count.push(input[i])
          }
          if(input[i] < 0){
              sum += input[i]
          }
      }
      result.push(count.length);
      result.push(sum);
      return result
    }
}

console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]))