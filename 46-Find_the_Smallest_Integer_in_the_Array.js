/* 
Soal :
Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.
*/

// Cara 1
/* class SmallestIntegerFinder {
    findSmallestInt(args) {
      let minim = args[0]
      for(let i of args){
        if(minim > i){
          minim = i
        }
      }
      return minim
    }
} */

// Cara 2
/* class SmallestIntegerFinder {
    findSmallestInt(args) {
        return args.sort((a, b) => a - b)[0];
    }
} */

// Cara 3
class SmallestIntegerFinder {
    findSmallestInt(args) {
        return Math.min(...args)
    }
}

let sif = new SmallestIntegerFinder();

console.log(sif.findSmallestInt([78,56,232,12,8]));