/* 
Soal :
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/


// Cara 1
/* function solution(str){
  let result = "";  
  for(let i = str.length - 1; i >= 0; i--){
      result += str[i];     
  }
  return result;
} */

// Cara 2
/* function solution(str){
    let result = "";  
    for(let i of str){
        result = i + result;     
    }
    return result;
  } */

// Cara 3
// const solution = str => str.split('').reverse().join('');
const solution = str => [...str].reverse().join('');

console.log(solution('world'));