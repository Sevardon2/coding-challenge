/* 
Soal :
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
Good Luck!
*/

// Cara 1
/* function doubleChar(str) {
    let result = '';
    for(let i = 0; i < str.length; i++){
        result += str[i] + str[i]
    }
    return result;
} */

// Cara 2
// const doubleChar = str => [...str].map(el => el + el).join('');

// Cara 3
const doubleChar = str => str.split('').map(el => el + el).join('');

console.log(doubleChar("Adidas"))