/* 
Soal :
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6

Input validation
If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.
*/

// Cara 1
/* function sumArray(array) {
    if(array === null || array == undefined){
        return 0;
    } else {
        let result = array.sort((a, b) => a - b);
        result.pop();
        result.shift();
        return result.reduce((acc, curr) => curr + acc, 0)
    }
} */

// Cara 2
/* function sumArray(array) {
    if(array == null || array.length <= 2) return 0;
    const result = array.sort((a, b) => a -b);
    let total = 0;
    for(let i = 1; i < result.length - 1; i++){
        return total += result[i];
    }
} */

// Cara 3
function sumArray(array) {
    if(array == null || array.length <= 2) return 0;
    return array.sort((a, b) => a - b).slice(1, -1).reduce((acc, curr) => curr + acc);
    
}

console.log(sumArray([ -6, -20, -1, -10, -12 ]));