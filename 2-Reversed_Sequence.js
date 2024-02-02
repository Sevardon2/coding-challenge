/*
Soal :
Build a function that returns an array of integers from n to 1 where n>0.
Example : n=5 --> [5,4,3,2,1]
*/


// Cara 1
/*
const reverseSeq = n => {
    let array = []
    for(let i = n; i >= 1; i--){
        array.push(i)
    }
    return array;
};
*/

// Cara 2
/*
const reverseSeq = n => {
    return Array(n).fill().map((el, i) => i + 1).reverse();
}
*/

// Cara 3
const reverseSeq = n => [...Array(n)].map((el, i) => n - i);

console.log(reverseSeq(5));