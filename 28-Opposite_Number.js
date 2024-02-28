/* 
Soal :
Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).

Examples:

1: -1
14: -14
-34: 34
*/

// Cara 1
/* function opposite(number) {
    if(number > 0){
        return -number;
    } else {
        return Math.abs(number);
    }
} */

// Cara 2
// const opposite = number => number > 0 ? -number : Math.abs(number);

// Cara 3
const opposite = number => -number

console.log(opposite(1));