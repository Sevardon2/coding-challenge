/* 
Soal :
Write a function to split a string and convert it into an array of words.
Examples (Input ==> Output):
"Robin Singh" ==> ["Robin", "Singh"]
"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
*/

// Cara 1
/* function stringToArray(string){

	let words = string.split(' ');
    return words;

} */

// Cara 2
const stringToArray = string => string.split(' ');

console.log(stringToArray("I love arrays they are my favorite"));