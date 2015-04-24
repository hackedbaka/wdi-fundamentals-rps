////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';
//get an input from user
function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } 
    else if (randomNumber < 0.66) {
        return "paper";
    } 
    else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove() {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
  
    var choice = getInput();
        
        while(choice !== "rock" && choice !== "paper" && choice !=="scissors") {
            console.log("Please choose either 'rock', 'paper', or 'scissors'.")
            choice=getInput();
        }
        
    return choice;
}

function getComputerMove() {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return randomPlay();
    
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if(playerMove===computerMove)
    {
        winner="tie";
    }
    else if(playerMove==="rock" && computerMove==="scissors")
    {
        winner="player";
    }
    else if(playerMove==="rock" && computerMove==="paper")
    {
        winner="computer";
    }
    else if(playerMove==="paper" && computerMove==="rock")
    {
        winner="player";
    }
    else if(playerMove==="paper" && computerMove==="scissors")
    {
        winner="computer";
    }
    else if(playerMove==="scissors" && computerMove==="paper")
    {
        winner="player";
    }
    else if(playerMove==="scissors" && computerMove==="rock")
    {
        winner="computer";
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
     while(playerWins<5 && computerWins<5)
    {
        var me=getInput();
        var comp=randomPlay();
        var win=getWinner(me, comp);
        console.log("Player uses " + me + ": Computer uses " + comp);
        if(win==="player")
        {
            playerWins+=1;
            console.log("Player wins!");
        }
        else if(win==="computer")
        {
            computerWins+=1;
            console.log("Computer wins!"); 
        }
        else
            console.log("It was a tie!"); 
        console.log("Score is Player: "+playerWins+" - Computer: "+computerWins);
        
    }
    return [playerWins, computerWins];
}

//extra challenge
function playTo(x) {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
     while(playerWins<x && computerWins<x)
    {
        var me=getInput();
        var comp=randomPlay();
        var win=getWinner(me, comp);
        console.log("Player uses " + me + ": Computer uses " + comp);
        if(win==="player")
        {
            playerWins+=1;
            console.log("Player wins!");
        }
        else if(win==="computer")
        {
            computerWins+=1;
            console.log("Computer wins!"); 
        }
        else
            console.log("It was a tie!"); 
        console.log("Score is Player: "+playerWins+" - Computer: "+computerWins);
        
    }
    return [playerWins, computerWins];
}
