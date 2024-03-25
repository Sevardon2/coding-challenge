/* 
Soal :
Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
*/

// Cara 1
/* function lovefunc(flower1, flower2){
    // moment of truth
    if((flower1 % 2 === 0 && flower2 % 2 === 0) || (flower1 % 2 === 1 && flower2 % 2 === 1)){
        return false;
    } else {
        return true;
    }
} */

// Cara 2
// const lovefunc = (flower1, flower2) => (flower1 % 2 === 0 && flower2 % 2 === 1) || (flower1 % 2 === 1 && flower2 % 2 === 0);

// Cara 3
// const lovefunc = (flower1, flower2) => (flower1 + flower2) % 2 === 1;

// Cara 4
const lovefunc = (flower1, flower2) => flower1 % 2 !== flower2 % 2

console.log(lovefunc(1, 2));