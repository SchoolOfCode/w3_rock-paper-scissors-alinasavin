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


let playerMove = prompt("Choose between rock,paper, scissors");
let moves = ['rock','paper', 'scissors'];
let computerMove = moves[Math.floor(Math.random() * 3)];
console.log(computerMove);


function checkWinner (playerMove, computerMove){
    if (playerMove === "rock" && computerMove === "scissors"){
        return 1;
    }
    
    if (playerMove === "rock" && computerMove === "rock"){
        return 0;
    }
    
    if (playerMove === "rock" && computerMove === "paper"){
        return -1;
    }
    
    if (playerMove === "paper" && computerMove === "scissors"){
        return -1;
    }
    
    if (playerMove === "paper" && computerMove === "rock"){
        return 1;
    }
    
    if (playerMove === "paper" && computerMove === "paper"){
        return 0;
    }
    
    if (playerMove === "scissors" && computerMove === "scissors"){
        return 0;
    }
    
    if (playerMove === "scissors" && computerMove === "rock"){
        return -1;
    }
    
    if (playerMove === "scissors" && computerMove === "paper"){
        return 1;
    }
}

let result = checkWinner(playerMove, computerMove);
console.log(result);
alert(result);