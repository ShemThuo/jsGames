
const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const playAgainBtn = document.getElementById('play-again');
const choicesDiv = document.getElementById('choices');
const possibleChoices = choicesDiv.querySelectorAll('button');
let userChoice
let computerChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice 
    generateComputerChoice()
    getResult()
    // Hide choices and show play again
    choicesDiv.style.display = 'none';
    playAgainBtn.style.display = 'block';
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 //Or I can use possibleChoices.length
    console.log(randomNumber)

    if (randomNumber === 1) {
        computerChoice = 'rock'
    }else if (randomNumber === 2) {
        computerChoice = 'scissors'
    }else computerChoice = 'paper' 
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'Its a Draw'
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'You Won!!'
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'You Lost!!'
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'You Won!!'
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'You Lost!!'
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'You Won!!'
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'You Lost!!'
    }
    resultDisplay.innerHTML = result
}

// Play Again button logic
playAgainBtn.addEventListener('click', () => {
    // Reset displays
    computerChoiceDisplay.innerHTML = '';
    userChoiceDisplay.innerHTML = '';
    resultDisplay.innerHTML = '';
    // Show choices, hide play again
    choicesDiv.style.display = 'block';
    playAgainBtn.style.display = 'none';
});