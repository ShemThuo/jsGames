const cardArray = [
    {
        name: 'fries', 
        img: 'images/fries.jpg'
    },
    {
        name: 'mutura', 
        img: 'images/mutura.jpg'
    },
    {
        name: 'hotdog', 
        img: 'images/hotdog.jpg'
    },
    {
        name: 'ice-cream', 
        img: 'images/ice-cream.jpg'
    },
    {
        name: 'milkshake', 
        img: 'images/milkshake.jpg'
    },
    {
        name: 'pizza', 
        img: 'images/pizza.jpg'
    },

    {
        name: 'fries', 
        img: 'images/fries.jpg'
    },
    {
        name: 'mutura', 
        img: 'images/mutura.jpg'
    },
    {
        name: 'hotdog', 
        img: 'images/hotdog.jpg'
    },
    {
        name: 'ice-cream', 
        img: 'images/ice-cream.jpg'
    },
    {
        name: 'milkshake', 
        img: 'images/milkshake.jpg'
    },
    {
        name: 'pizza', 
        img: 'images/pizza.jpg'
    },
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
const playAgainBtn = document.getElementById('play-again');
let cardsChosen = []
let cardsChosenIds = []
let cardsWon = []

function createBoard() {
    gridDisplay.innerHTML = '';
    for (let i = 0; i<cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card) 
    }
}
createBoard()

function checkMatch () {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    console.log(cards)
    console.log('check for a match!')
    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.jpg')
        alert('You have clicked the same image! Try again.');
        cardsChosen = [];
        cardsChosenIds = [];
        return;
    }
    if (cardsChosen[0] == cardsChosen[1]) {
        alert('Found a match!')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.jpg')
        cards[optionTwoId].setAttribute('src', 'images/blank.jpg')
        alert('Sorry, try again!')
    }
    resultDisplay.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []

    if (cardsWon.length == (cardArray.length/2)) {
        resultDisplay.textContent = 'Congrats 🎉🎉. You have found them all!!';
        playAgainBtn.style.display = 'inline-block';
    }
// Play Again button logic
if (playAgainBtn) {
    playAgainBtn.addEventListener('click', () => {
        // Reset state
        cardsChosen = [];
        cardsChosenIds = [];
        cardsWon = [];
        resultDisplay.textContent = '';
        playAgainBtn.style.display = 'none';
        // Shuffle cards
        cardArray.sort(() => 0.5 - Math.random());
        // Recreate board
        createBoard();
    });
}

}

function flipCard() {
    const cardID = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardID].name)
    cardsChosenIds.push(cardID)
    this.setAttribute('src', cardArray[cardID].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}

//55:00 