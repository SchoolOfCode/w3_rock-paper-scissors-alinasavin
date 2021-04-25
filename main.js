// Score variables

let playerScore = 0;
let computerScore = 0;
let gameSummary = {
    draws: 0,
    wins: 0, 
    losses: 0,
    games: 0,
};
//storing DOM variables for future use
const playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const wins_span = document.getElementById("wins");
const losses_span = document.getElementById("losses");
const draws_span = document.getElementById("draws");
const games_span = document.getElementById("games");

const player_id = document.getElementById("player-label");


// get player name printed

function selectText () {
  
    let userInput = document.getElementById("text").value;
    player_id.innerText = userInput;
  
  }
  
// get computer choice
function getComputerMove(){
    let moves = ['rock','paper', 'scissors'];
    let randomNumber= Math.floor(Math.random() * 3);
    return moves[randomNumber];
}

// define win function
// update score and win message

function win(playerMove, computerMove) {
    playerScore++;
    gameSummary.wins++;
    gameSummary.games++;
    wins_span.innerHTML = gameSummary.wins;
    games_span.innerHTML = gameSummary.games;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    let smallPlayerWord = "your".fontsize(3).sub();
    let smallComputerWord = "computer's".fontsize(3).sub();
    result_p.innerHTML = `${smallPlayerWord}${playerMove} beats  ${smallComputerWord}${computerMove} .  You win! 🎉  `;
}

// define lose function
function lose(playerMove, computerMove) {
    computerScore++;
    gameSummary.losses++;
    gameSummary.games++;
    losses_span.innerHTML = gameSummary.losses;
    games_span.innerHTML = gameSummary.games;
    computerScore_span.innerHTML = computerScore;
    playerScore_span.innerHTML = playerScore;
    let smallPlayerWord = "your".fontsize(3).sub();
    let smallComputerWord = "computer's".fontsize(3).sub();
    result_p.innerHTML = `${smallPlayerWord} ${playerMove} loses to ${smallComputerWord}${computerMove} . You lost 😞`;
}

// define draw function

function draw(playerMove, computerMove) {
    gameSummary.draws++;
    gameSummary.games++;
    draws_span.innerHTML = gameSummary.draws;
    games_span.innerHTML = gameSummary.games;
    let smallPlayerWord = "your".fontsize(3).sub();
    let smallComputerWord = "computer's".fontsize(3).sub();
    result_p.innerHTML = `${smallPlayerWord}${playerMove} is the same as  ${smallComputerWord}${computerMove} . It's a draw. 🐵 `;
}


// check for a winner

function checkWinner(playerMove){
    let computerMove = getComputerMove();
    switch (playerMove + computerMove){
        //player wins
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(playerMove, computerMove);
            break;  
        //player loses
        case "rockpaper":
        case "paperscissors" :
        case "scissorsrock":
            lose(playerMove, computerMove);
            break;
        // draw
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(playerMove, computerMove);
            break;
    }
}



function playGame() {

// event listeners for each button
rock_div.addEventListener('click', function() {
    checkWinner("rock");
})
paper_div.addEventListener('click', function(){
    checkWinner("paper");
})
scissors_div.addEventListener('click', function(){
    checkWinner("scissors");
})
}

playGame();












