const photos = {
    "rock": '/odin-rock-paper-scissors/images/rock.png',
    "paper":'/odin-rock-paper-scissors/images/paper.png',
    "scissors":'/odin-rock-paper-scissors/images/scissors.png'
}

const mainContainer = document.createElement('main')
mainContainer.setAttribute('id',"main-container")
mainContainer.innerHTML = `
<h1>Rock Paper Scissors</h1>
<div class="scores">
    <h2>Scores</h2>
    <div class="score-container">
       <p>You  <span class="playerScore">0</span></p>
       <p>:</p>
       <p><span class="computerScore">0</span>  Comp</p>
    </div>
</div>
<section class="player-background">
    <div class="btns" data-btns="Rock">
        <img src="${photos.rock}" alt="">
    </div>
    <div class="btns" data-btns="Paper">
        <img src="${photos.paper}" alt="">
    </div>
    <div class="btns" data-btns="Scissors">
        <img src="${photos.scissors}" alt="">
    </div>
</section>
<p class="message">First to get 5 points wins</p>
`

document.body.appendChild(mainContainer)
const playerScoreContainer = document.querySelector('.playerScore')
const computerScoreContainer = document.querySelector('.computerScore')
const playingBtns = document.querySelectorAll('.btns')
const message = document.querySelector('.message')
const modalContainer = document.querySelector('.modal-container')


//  getComputer choice to randomly return rock,paper,scissors
function getComputerChoice(){
    const choices = ['Rock','Paper','Scissors']
    const randomItem =Math.floor(Math.random() * choices.length)
    return choices[Math.floor(randomItem)]
}

playingBtns.forEach(button => {
    // console.log(button.dataset.btns)
    button.addEventListener('click',(e) =>{
        console.log(button.dataset.btns)
        playBackground(button.dataset.btns,getComputerChoice())
        
    })
})

 

function resetGame(){
   if(document.body.classList.contains("active")){
    document.body.classList.remove('active')
   }
}
let computerScore = 0
let playerScore = 0
function playBackground(playerSelection,computerSelection){
    if(computerSelection == playerSelection){
    console.log(`It's a tie both select ${computerSelection}` ); 
    message.innerHTML =`It's a tie both select ${computerSelection}` 

    }
    else if((playerSelection =='Rock' && computerSelection == 'Scissors') ||(playerSelection =='Paper' && computerSelection == 'Rock') ||(playerSelection =='Scissors' && computerSelection == 'Paper')){
        playerScore++
        playerScoreContainer.innerHTML = playerScore
        console.log(`You win ${playerSelection} beats ${computerSelection} `)
        message.innerHTML =`You win ${playerSelection} beats ${computerSelection} `
    }
    else if(playerSelection =='Rock' && computerSelection == 'Paper' || (playerSelection =='Paper' && computerSelection == 'Scissors') || playerSelection =='Scissors' && computerSelection == 'Rock'){

        computerScore++
        computerScoreContainer.innerHTML = computerScore
        console.log(`You lose ${computerSelection} beats ${playerSelection} `)
        message.innerHTML =`You lose ${computerSelection} beats ${playerSelection} `

    }

    if(computerScore ==5 || playerScore == 5){
        document.body.classList.add("active")
        if (playerScore ==5){
            modalContainer.innerHTML = `
            <div class="modal-center">
            <div class="result-img">
                <img src="./images/winner.gif" alt="">
            </div>
            <span class="result">You win  &#128293; first to get 5 points</span>
            <button class="reset-game-btn">
                Reset Game
            </button>
            </div>
            `
        }
        if(computerScore == 5){
            modalContainer.innerHTML = `
        <div class="modal-center">
        <div class="result-img">
            <img src="./images/failure.gif" alt="">
        </div>
        <span class="result">You lose  &#128169; computer first to get 5 points</span>
        <button class="reset-game-btn">
            Reset Game
        </button>
        </div>
        `
        }
        const resetBtn = document.querySelector('.reset-game-btn')
        resetBtn.addEventListener("click",()=> resetGame())
        computerScore = 0
        playerScore = 0
        computerScoreContainer.innerHTML = computerScore
        playerScoreContainer.innerHTML = playerScore
       message.innerHTML = `First to get 5 points wins`
        
    }
}
