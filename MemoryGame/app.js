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
    {
        name: 'bg', 
        img: 'images/bg.jpg'
    },
    {
        name: 'landscape', 
        img: 'images/landscape.jpg'
    },
    {
        name: 'lighthouse', 
        img: 'images/lighthouse.jpg'
    },
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const cardsChosen = []
const cardsChosenIds = []

function createBoard() {
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
    console.log('check for a match!')
    if (cardsChosen[0] == cardsChosen[1]) {
        alert('Found a match!')
        cards[cardsChosenIds[0]].setAttribute('src', 'images/white.png')
        cards[cardsChosenIds[1]].setAttribute('src', 'images/white.png')
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

