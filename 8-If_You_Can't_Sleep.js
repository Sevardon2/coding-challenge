/* 
Soal :
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
*/

// Cara 1
/* var countSheep = function (num){
    //your code here
    let result = "";
    for(let i = 1; i <= num; i++){
        result += i + " sheep..."
        // bisa juga pakai backtik atau apalah itu, intinya seperti di bawah ini
        // result += `${i} sheep...` 
    }
    return result
} */

const countSheep = num => [...Array(num)].map((el, i) => (i + 1) + " shepp...").join('');

console.log(countSheep(5));