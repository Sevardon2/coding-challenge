/* 
Soal :
Grade book
Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'
Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
*/

// Cara 1
/* function getGrade (s1, s2, s3) {
    // Code here
    const score = (s1 + s2 + s3) / 2;
    if(score >= 90 && score <= 100){
        return 'A';
    } else if (score >= 80 && score < 90){
        return 'B';
    } else if (score >= 70 && score < 80){
        return 'C';
    } else if (score >=60 && score < 70){
        return 'D';
    } else {
        return 'F';
    }
} */

function getGrade(...s){
    const score = s.reduce((acc, curr) => curr + acc) / s.length;
    if(score < 60) return "F";
    if(score < 70) return "D";
    if(score < 80) return "C";
    if(score < 90) return "B";
    return "A";
}

console.log(getGrade(95,90,93));