/* 
Soal :
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
*/

// Cara 1
/* function sumMix(x){
    let int = [];
    let result = 0;
    for(let i of x){
        int.push(parseInt(i)) 
    }
    for(let i of int){
        result += i;
    }
    return result;
} */

// Cara 2
/* function sumMix(x){
    let result = 0;
    for(let i of x){
        // result += parseInt(i); // parseInt digunakan untuk merubah string menjadi integer dan apabaila ada karakter lain dalam string itu seperti '1cm' maka code masih bisa dijalankan dengan merubah hanya angka 1 saja
        // result += Number(i); // Number digunakan untuk merubah string menjadi sebuah nomer dan hanya bisa digunakan apabila isi dari string hanya berisi nomer saja
        result += +i; // disini + (plus) yang menempel pada i menjadikan i sebagai sebuah integer dan + ini harus menempel kepada i agar bisa merubah i menjadi sebuat integer
    }
    return result;
} */

// Cara 3
/* function sumMix(x){
    return x.reduce((acc, curr) => acc + parseInt(curr), 0)
} */

// Cara 4
const sumMix = x => x.reduce((acc, curr) => acc + (+curr), 0);

console.log(sumMix([9, 3, '7', '3']));