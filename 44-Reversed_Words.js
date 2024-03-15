/* 
Soal :
Complete the solution so that it reverses all of the words within the string passed in.

Words are separated by exactly one space and there are no leading or trailing spaces.

Example(Input --> Output):

"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
*/

// Cara 1
/* function reverseWords(str){
    let result = '';
    let kata =  str.split(' ');
    for(let i = kata.length - 1; i >= 0; i--){
        if(i != 0){
        result += kata[i] + ' ';
        } else {
          result += kata[i];
        }
    }
    return result;
} */

// Cara 2
const reverseWords = str => str.split(' ').reverse().join(' ');

console.log(reverseWords("yoda doesn't speak like this" ));