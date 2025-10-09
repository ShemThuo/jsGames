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
        computerChoice = 'Rock'
    }else if (randomNumber === 2) {
        computerChoice = 'Scissors'
    }else computerChoice = 'Paper' 
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'Its a Draw'
    }
    if (computerChoice === 'Rock' && userChoice === 'Paper') {
        result = 'You Won!!'
    }
    if (computerChoice === 'Rock' && userChoice === 'Scissors') {
        result = 'You Lost!!'
    }
    if (computerChoice === 'Paper' && userChoice === 'Scissors') {
        result = 'You Won!!'
    }
    if (computerChoice === 'Paper' && userChoice === 'Rock') {
        result = 'You Lost!!'
    }
    if (computerChoice === 'Scissors' && userChoice === 'Rock') {
        result = 'You Won!!'
    }
    if (computerChoice === 'Scissors' && userChoice === 'Paper') {
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