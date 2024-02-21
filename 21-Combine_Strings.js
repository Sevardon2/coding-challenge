/* 
Soal :
Combine strings function
Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.

Example:

combineNames('James', 'Stevens')
returns:

'James Stevens'
*/

// Cara 1
/* function combineNames(firstName, lastName){
    return firstName + " " + lastName
} */

// Cara 2
// const combineNames = (firstName, lastName) => `${firstName} ${lastName}`;

// Cara 3
const combineNames = (...names) => names.join(' ');

console.log(combineNames('James', 'Stevens'));