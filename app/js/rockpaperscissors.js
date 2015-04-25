////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////

//function that gets an input from user from prompt
function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
//function that the computer generates a random number 
//from 0.00 to 1.00 to produce a choice of rock, paper, or scissors
function getComputerMove() {
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
//function that gets player move and repeats if player inputs an invalid choice
function getPlayerMove() { 
    var choice = getInput();
    while(choice !== "rock" && choice !== "paper" && choice !=="scissors") {
        choice = getInput();
    }
    return choice;
}
//function that compares playerMove and computerMove to determine winner
function getWinner(playerMove,computerMove){
    var winner;

    if(playerMove === computerMove)
    {
        winner = "tie";
    }
    else if(playerMove === "rock" && computerMove === "scissors")
    {
        winner = "player";
    }
    else if(playerMove === "rock" && computerMove === "paper")
    {
        winner = "computer";
    }
    else if(playerMove === "paper" && computerMove === "rock")
    {
        winner = "player";
    }
    else if(playerMove === "paper" && computerMove === "scissors")
    {
        winner = "computer";
    }
    else if(playerMove === "scissors" && computerMove === "paper")
    {
        winner = "player";
    }
    else if(playerMove === "scissors" && computerMove === "rock")
    {
        winner = "computer";
    }

    return winner;
}

//function that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
function playToFive() {

    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;

    while(playerWins < 5 && computerWins < 5)
    {
        var me = getPlayerMove();
        var comp = getComputerMove();
        var win = getWinner(me, comp);
        console.log("Player uses " + me + ": Computer uses " + comp);
        if(win === "player")
        {
            playerWins += 1;
            console.log("Player wins!");
        }
        else if(win === "computer")
        {
            computerWins += 1;
            console.log("Computer wins!"); 
        }
        else
            console.log("It was a tie!"); 
        
        console.log("Score is Player: " + playerWins + " - Computer: " + computerWins);
        
    }
    return [playerWins, computerWins];
}

//challenge homework to play up to x amount of times

//function that allows user to enter a number
function playUp() {

    console.log("Please choose a number to play to.")
    return prompt();
}

//function to repeat the entry of a number to only allow numbers
function getNum() { 

    var num = playUp();
    
    while(!Number(num)) {
        num = playUp();
    }
    return num;
}

//function to play to desired win amount
function playTo() {

    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var x=getNum();
    while(playerWins < x && computerWins < x)
    {
        var me = getPlayerMove();
        var comp = getComputerMove();
        var win = getWinner(me, comp);
        console.log("Player uses " + me + ": Computer uses " + comp);
        if(win === "player")
        {
            playerWins += 1;
            console.log("Player wins!");
        }
        else if(win === "computer")
        {
            computerWins += 1;
            console.log("Computer wins!"); 
        }
        else
            console.log("It was a tie!"); 
        
        console.log("Score is Player: " + playerWins + " - Computer: " + computerWins);
        
    }
    return [playerWins, computerWins];
}

