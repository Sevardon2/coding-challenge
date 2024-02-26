/* 
Soal :
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Examples
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12
*/

// Cara 1
/* function makeNegative(num) {
    if(num > 0){
        return num * -1;
    } else {
        return num;
    }
} */

// Cara 2
// const makeNegative = num => num > 0 ? num * -1 : num;
// const makeNegative = num => num > 0 ? -num : num;

// Cara 3
const makeNegative = num => -Math.abs(num);

console.log(makeNegative(42));