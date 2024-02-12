/* 
Soal :
I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.
 */

// Cara 1
/* function arrayPlusArray(arr1, arr2) {
    let array1 = 0;
    let array2 = 0;
    for(let i = 0; i < arr1.length; i++){
        array1 += arr1[i];
    }
    for(let i = 0; i < arr2.length; i++){
        array2 += arr2[i];
    }

    return array1 + array2;
} */

// Cara 2
/* function arrayPlusArray(arr1, arr2) {
    let total = 0;
    for(let i = 0; i < arguments.length; i++){
        for(let j = 0; j < arguments[i].length; j++){
            total += arguments[i][j];
        }
    }

    return total;
} */

// Cara 3
// const arrayPlusArray = (arr1, arr2) => {
//     let array1 = arr1.reduce((acc, curr) => acc + curr);
//     let array2 = arr2.reduce((acc, curr) => acc + curr);
    
//     return array1 + array2; // something went wrong

// }

// Cara 4
const arrayPlusArray = (arr1, arr2) => [...arr1, ...arr2].reduce((acc, curr) => acc + curr, 0);

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));