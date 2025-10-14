function getRandomMove(){
  const moves = ["rock", "paper", "scissors"];
  return moves[Math.floor(Math.random() * 3)];
}

function checkMove(move, computerMove){
  const validMoves = ["rock", "paper", "scissors"];
  move = move.trim().toLowerCase();

  if (!validMoves.includes(move)) return "invalid move";

  if (move === computerMove) return "draw";

  if (
    (move === "rock" && computerMove === "scissors") ||
    (move === "paper" && computerMove === "rock") ||
    (move === "scissors" && computerMove === "paper")
  ) {
    return "won";
  } else {
    return "lost";
  }
}

const drawn = new Set();
for ( let i = 0; i < 100; i++ ){
  const randomMove = getRandomMove();
  drawn.add(randomMove);
  const oneOfTheThreeMoves = randomMove === 'rock' || randomMove === 'paper' || randomMove === 'scissors';
  if ( !oneOfTheThreeMoves ){
    throw new Error("Ops! Expected rock, paper or scissors, instead got " + randomMove);
  }
}

if ( !drawn.has("rock") || !drawn.has("paper") || !drawn.has("scissors") ){
  throw new Error("Ops! Did not find all three moves in the results!");
}

console.log("Game Result 1: ", checkMove("rock", "rock"));       // draw
console.log("Game Result 2: ", checkMove("rock", "paper"));      // lost
console.log("Game Result 3: ", checkMove("rock", "scissors"));   // won
console.log("Game Result 4: ", checkMove("paper", "paper"));     // draw
console.log("Game Result 5: ", checkMove("paper", "scissors"));  // lost
console.log("Game Result 6: ", checkMove("paper", "rock"));      // won
console.log("Game Result 7: ", checkMove("scissors", "scissors"));// draw
console.log("Game Result 8: ", checkMove("scissors", "rock"));   // lost
console.log("Game Result 9: ", checkMove("scissors", "paper"));  // won
console.log("Game Result 10: ", checkMove("pencil", "rock"));    // invalid move

try {
  if (global) {
    global.getRandomMove = getRandomMove;
    global.checkMove = checkMove;
  }
} catch (e) {}
