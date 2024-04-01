/* 
Soal :
Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

Can you help her?
*/

// Cara 1
/* function greet(name){
    if(name === "Johnny")
      return "Hello, my love!";
    return "Hello, " + name + "!";
} */

// Cara 2
// const greet = name => "Hello " + (name === 'Johnny' ? 'my love' : name) + '!';
const greet = name => `Hello ${name === 'Johnny' ? 'my love' : name}!`;

console.log(greet('Johnny'));
console.log(greet('Jim'));