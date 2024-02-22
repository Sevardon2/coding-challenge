/* 
Soal :
Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:

case	return
name equals owner	'Hello boss'
otherwise	'Hello guest'
*/


// Cara 1
/* function greet (name, owner) {
    if(name === owner){
        return 'Hello boss';
    } else {
        return 'Hello guest';
    }
} */

// Cara 2
const greet = (name, owner) => name === owner ? 'Hello boss' : 'Hello guest';

console.log(greet('Daniel', 'Daniel'));

console.log(greet('Greg', 'Daniel'));