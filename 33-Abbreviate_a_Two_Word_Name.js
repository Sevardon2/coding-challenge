/* 
Soal :
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/

// Cara 1
/* function abbrevName(name){
    // code away
    for(let i = 0; i < name.length; i++){
        if(name[i] === ' '){
            let initial =  name[0] + '.' + name[i+1];
            return initial.toUpperCase();
        }
    }
} */

// Cara 2
/* const abbrevName = name => {
    name = name.split(' ');
    return `${name[0][0]}.${name[1][0]}`.toUpperCase();
} */

// Cara 3
const abbrevName = name => name.split(' ').map(name => name[0].toUpperCase()).join('.');

console.log(abbrevName("Sam Harris"))