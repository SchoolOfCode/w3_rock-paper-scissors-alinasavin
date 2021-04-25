// Score variables

let playerScore = 0;
let computerScore = 0;

//storing DOM variables for future use
const playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

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
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    let smallPlayerWord = "player".fontsize(3).sub();
    let smallComputerWord = "computer".fontsize(3).sub();
    result_p.innerHTML = `${playerMove}${smallPlayerWord} beats  ${computerMove}${smallComputerWord} .  You win! 🎉  `;
}

// define lose function
function lose(playerMove, computerMove) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    playerScore_span.innerHTML = playerScore;
    let smallPlayerWord = "player".fontsize(3).sub();
    let smallComputerWord = "computer".fontsize(3).sub();
    result_p.innerHTML = `${playerMove}${smallPlayerWord} loses to ${computerMove}${smallComputerWord} . You lost 😞`;
}

// define draw function

function draw(playerMove, computerMove) {
    let smallPlayerWord = "player".fontsize(3).sub();
    let smallComputerWord = "computer".fontsize(3).sub();
    result_p.innerHTML = `${playerMove}${smallPlayerWord} the same as  ${computerMove}${smallComputerWord} . It's a draw. 🐵 `;
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












