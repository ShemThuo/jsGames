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

function flipCard() {
    const cardID = this.getAttribute('data-id')
    console.log(cardArray[cardID].name)
    console.log('clicked', cardID)
}

