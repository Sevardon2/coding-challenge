/* 
Soal :
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.
*/

// Cara 1
/* function removeChar(str){
    let result = '';
    for(let i = 1; i < str.length - 1; i++){
        result += str[i]
    }
    return result
} */

// Cara 1
/* function removeChar(str){
    //You got this!
    return [...str].slice(1, -1).join('');   
}; */

// Cara 2
// const removeChar = str => [...str].slice(1, -1).join('');
const removeChar = str => str.slice(1, -1); // argumen -1 sama dengan str.length - 1

console.log(removeChar('eloquent'));