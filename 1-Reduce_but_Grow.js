/* 
Soal :
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24 
*/

// Cara 1
/*
function grow(x){
    let result = x[0];
    for(let i = 1; i < x.length; i++){
        result = result * x[i];
    }
    return result;
}
*/

// Cara 2
/*
function grow(x){
    const result = x.reduce((acc, curr) => acc * curr, 1);
    return result;
}
*/

// Cara 3
const grow = (x) => x.reduce((acc, curr) => acc * curr, 1);


console.log(grow([2, 2, 2, 2, 2, 2]));