/* 
Soal :
Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
*/

// Cara 1
/* function boolToWord( bool ){
    if(bool === true) {
        return 'Yes';
    } else {
        return 'No';
    }
} */

// Cara 2
const boolToWord = bool => bool ? 'Yes' : 'No';

console.log(boolToWord(true));