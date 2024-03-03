/* 
Soal :
All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.
*/

// Cara 1
/* function feast(beast, dish) {
    //your function here
    const b1 = beast[0];
    const d1 = dish[0];
    const b2 = beast[beast.length - 1];
    const d2 = dish[dish.length - 1];
    if((b1 === d1) && (b2 === d2)){
        return true;
    } else {
        return false;
    }
} */

// Cara 2
// const feast = (beast, dish) => beast[0] === dish[0] && beast[beast.length -1] === dish[dish.length -1];
// const feast = (beast, dish) => beast.at(0) === dish.at(0) && beast.at(-1) === dish.at(-1); // at atau juga disebut dengan charAt yaitu karakter keberapa dalam suatu string
const feast = (beast, dish) => beast.substr(0,1) === dish.substr(0,1) && beast.slice(-1) === dish.slice(-1);

console.log(feast("great blue heron", "garlic naan"));