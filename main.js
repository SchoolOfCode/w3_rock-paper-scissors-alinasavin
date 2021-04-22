// task 1

//let playerMove = "paper";
//let computerMove = "rock";

//let result;
/*if (playerMove === "rock" && computerMove === "paper"){
    result = "Computer Wins";
}*/


/*if (playerMove === "rock" && computerMove === "rock"){
    result = "Draw";
}*/

/*if (playerMove === "paper" && computerMove === "rock"){
    result = "Player Wins";
}
console.log(result);*/

//task 2 - 4

const outcome =["Draw", "Win", "Lose"];

let playGame = true;

// we can use an array as well instead of an object:
/*let gameSummary = [
    0,
    0,
    0,
    0
];*/

// You would call the value using the index : 
// gameSummary[0]= draws, gameSummary[1]=wins , gameSummary[2]=losses, gameSummary[3]=games;

let gameSummary = {

    draws: 0,
    wins: 0, 
    losses: 0,
    games: 0,
};

while (playGame){
    let playerMove = prompt("Choose between rock,paper, scissors").toLowerCase();
    let moves = ['rock','paper', 'scissors'];
    let computerMove = moves[Math.floor(Math.random() * 3)];
    console.log(computerMove);

    let result = checkWinner(playerMove, computerMove);

    console.log(outcome[result]);
    let confirm = prompt("Do you want to  continue playing? yes or no?").toLowerCase();

    
    if(result === 0){
        gameSummary.draws++;
        gameSummary.games++;
    }

    if(result === 1){
        gameSummary.wins++;
        gameSummary.games++;
    }

    if(result === 2){
        gameSummary.losses++;
        gameSummary.games++;
    }

    
    console.log(gameSummary);

    if (confirm === "no"){
        playGame = false;
    }

} 
    
    

   
function checkWinner (playerMove, computerMove){

    if(playerMove === computerMove){
        return 0;
    }
    if (playerMove === "rock" && computerMove === "scissors"){
        return 1;
    }
    
    if (playerMove === "rock" && computerMove === "paper"){
        return 2;
    }
    
    if (playerMove === "paper" && computerMove === "scissors"){
        return 2;
    }
    
    if (playerMove === "paper" && computerMove === "rock"){
        return 1;
    }
    
    
    if (playerMove === "scissors" && computerMove === "rock"){
        return 2;
    }
    
    if (playerMove === "scissors" && computerMove === "paper"){
        return 1;
    }
}


