/* 
Soal :
Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
Example :
['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
*/

// Cara 1
/* 
function smash(words){
    let result = '';
    for(let i = 0; i < words.length; i++){
        result += words[i];
        if(i != words.length - 1){
            result += ' ';
        }
    }
    return result;
}
 */

// Cara 2
/* 
function smash(words){
    let array = words[0];
    for(let i = 0; i < words.length; i++){
        array += " " + words[i]
    }
    return array;
} 
*/

// Cara 3
/* 
function smash (words) {
    return words.join(' ')
 }; 
 */

 // Cara 4
const smash = (words) => words.join(' ');

 console.log(smash(["this", "is", "a", "really", "long", "sentence"]))