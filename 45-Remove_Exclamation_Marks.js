/* 
Soal :
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
*/

// Cara 1
/* function removeExclamationMarks(s) {
    let result = '';
  for(let i = 0; i < s.length; i++){
    if(s[i] !== '!'){
      result += s[i]
    }
  }
    return result;
} */

// Cara 2
const removeExclamationMarks = s => s.split('!').join('')

console.log(removeExclamationMarks("Hello World!"))