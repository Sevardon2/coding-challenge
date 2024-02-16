/* 
Soal :
It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.
*/


// Cara 1
/* function getAverage(marks){
    //TODO : calculate the downward rounded average of the marks array
    let result = 0;
    for(let i = 0; i < marks.length; i++){
        result += marks[i]
    }
    return Math.floor(result / marks.length);
} */


// Cara 2
const getAverage = marks => Math.floor(marks.reduce((acc, curr) => curr + acc) / marks.length);

console.log(getAverage([1,2,3,4,5]));