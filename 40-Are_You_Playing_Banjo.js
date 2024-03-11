/* 
Soal :
Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings.
*/

// Cara 1
/* function areYouPlayingBanjo(name) {
    // Implement me
    if(name[0] === 'r' || name[0] === 'R'){
        return `${name} plays banjo`
    } else {
        return `${name} does not play banjo`
    }
} */

// Cara 2
// const areYouPlayingBanjo = name => name[0] === 'r' || name[0] === 'R' ? `${name} plays banjo` : `${name} does not play banjo`

// cara 3
const areYouPlayingBanjo = name => name[0].toLowerCase() === 'r' ? `${name} plays banjo` : `${name} does not play banjo`

console.log(areYouPlayingBanjo("Adam"))