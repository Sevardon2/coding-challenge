/* 
Soal :
Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.
Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
*/

// Cara 1
/* const rps = (p1, p2) => {
    const won1 = "Player 1 won!";
    const won2 = "Player 2 won!";
    const draw = "Draw!";
    if((p1 == "scissors" && p2 == "paper") || (p1 == "rock" && p2 == "scissors") || (p1 == "paper" && p2 == "rock")){
        return won1;
    } else if((p1 == "scissors" && p2 == "rock") || (p1 == "paper" && p2 == "scissors") || (p1 == "rock" && p2 == "paper")){
        return won2;
    } else if(p1 === p2) {
        return draw;
    }
}; */

// Cara 2
const rps = (p1, p2) => {
    const rules = {
        rock : "scissors",
        scissors : "paper",
        paper : "rock"
    }

    if(p1 === p2){
        return "Draw!"
    } else {
        return `Player ${rules[p1] === p2 ? "1" : "2"} won!`
    }
}

console.log(rps("rock", "paper"));