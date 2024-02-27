/* 
Soal :
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9
*/

// Cara 1
/* function squareSum(numbers){
    let result = 0;
    for(let i = 0; i < numbers.length; i++){
        result += numbers[i] * numbers[i];
    }
    return result;
} */

// Cara 2
/* function squareSum(numbers){
    let result = 0;
    for(let i of numbers){
        result += i * i;
    }
    return result;
} */

// Cara 3
/* function squareSum(numbers){
    let result = 0;
    for(let i of numbers){
        result += Math.pow(i, 2); // Math.pow() digunakan untuk menghitung bilangan berpangkat
    }
    return result;
} */

// Cara 4
const squareSum = numbers => numbers.reduce((acc, curr) => acc + curr**2, 0)

console.log(squareSum([0, 3, 4, 5]));