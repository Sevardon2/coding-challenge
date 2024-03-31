/* 
Soal :
You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

For example, when the input is green, output should be yellow.
*/

// Cara 1
/* function updateLight(current) {
  
    if(current === "green"){
        return "yellow"
      } else if(current === "yellow") {
        return "red"
      } else {
        return "green"
      }
  
} */

// Cara 2
/* function updateLight(current) {
    switch(current){
        case 'green' : return 'yellow';
        case 'yellow' : return 'red';
        case 'red' : return 'green';
      }
} */

// Cara 3
// const updateLight = current => current === "green" ? "yellow" : current === "yellow" ? "red" : "green"

// Cara 4
/* const rules = {
    green : 'yellow',
    yellow : 'red',
    red : 'green'
  }
  
  function updateLight(current) {
      return rules[current]
  } */

// Cara 5
const updateLight = current => ({
    green: 'yellow',
    yellow: 'red',
    red: 'green',
  })[current]

console.log(updateLight("green"));