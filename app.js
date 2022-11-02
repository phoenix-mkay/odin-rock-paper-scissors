//  getComputer choice to randomly return rock,paper,scissors
function getComputerChoice(){
    const choices = ['Rock','Paper','Scissors']
    const randomItem =Math.floor(Math.random() * choices.length)
    return choices[Math.floor(randomItem)]
}
let computerScore = 0
let playerScore = 0
function playBackground(playerSelection,computerSelection){
    if(computerSelection == playerSelection){
    return `It's a tie both select ${computerSelection}` 
    }
    else if((playerSelection =='Rock' && computerSelection == 'Scissors') ||(playerSelection =='Paper' && computerSelection == 'Rock') ||(playerSelection =='Scissors' && computerSelection == 'Paper')){
        playerScore++
        return `You win ${playerSelection} beats ${computerSelection} `
    }
    else if(playerSelection =='Rock' && computerSelection == 'Paper' || (playerSelection =='Paper' && computerSelection == 'Scissors') || playerSelection =='Scissors' && computerSelection == 'Rock'){
        computerScore++
        return `You lose ${computerSelection} beats ${playerSelection} `
    }
    else{
        return "Invalid Choice"
    }
}


function game(){ 
    // Play a five round game
    for(let i =0;i<5;i++){
        let playerSelection = prompt("Make a move");
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()
        const computerSelection = getComputerChoice()
        console.log(playBackground(playerSelection,computerSelection))
        
    }
    if(playerScore == computerScore){
        console.log(`It's a tie both score ${playerScore}`)
    }
    else if(playerScore > computerScore){
        console.log(`You win by ${playerScore} to ${computerScore} `)
    }
    else{
        console.log(`You lose by ${playerScore} to ${computerScore} `)
    }
    
}

game()