/* 
Soal :
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!
*/

// Cara 1
/* function removeEveryOther(arr){
    //your code here
    let result = []
    for(let i = 0; i < arr.length; i++){
        if(i % 2 === 0){
            result.push(arr[i])
        }
    }
    return result
} */

// Cara 2
function removeEveryOther(arr){
    //your code here
    let result = []
    for(let i = 0; i < arr.length; i+=2){
        result.push(arr[i])
    }
    return result
}
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));