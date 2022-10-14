const cardArray =[
    {name:"burger",img:"asset/cheeseburger.png"},
    {name:"fries",img:"asset/fries.png"},
    {name:"hotdog",img:"asset/hotdog.png"},
    {name:"ice-cream",img:"asset/ice-cream.png"},
    {name:"milkshake",img:"asset/milkshake.png"},
    {name:"pizza",img:"asset/pizza.png"},
    {name:"burger",img:"asset/cheeseburger.png"},
    {name:"fries",img:"asset/fries.png"},
    {name:"hotdog",img:"asset/hotdog.png"},
    {name:"ice-cream",img:"asset/ice-cream.png"},
    {name:"milkshake",img:"asset/milkshake.png"},
    {name:"pizza",img:"asset/pizza.png"},
]

const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenId = []
let cardsWon = []


cardArray.sort(() => 0.5- Math.random())
const gridDisplay =document.querySelector("#grid")

function creatBoard (){
    for(let i=0; i< cardArray.length ; i++){
        const card = document.createElement("img")
        card.setAttribute("src", "asset/blank.png")
        card.setAttribute("data-id", i)
        card.addEventListener("click", flipCard)
        gridDisplay.appendChild(card)
       
    }
}

creatBoard()

function checkForMatch(){
    const cards = document.querySelectorAll("img")
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match')
        cards[optionOneId].setAttribute('src', 'asset/white.png')
        cards[optionTwoId].setAttribute('src', 'asset/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'asset/blank.png')
        cards[optionTwoId].setAttribute('src', 'asset/blank.png')
        alert('Sorry, try again')
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You found them all!'
      }

}


function flipCard (){
let cardId = this.getAttribute("data-id")
cardsChosen.push(cardArray[cardId].name)
cardsChosenId.push(cardId)
this.setAttribute('src', cardArray[cardId].img)
if (cardsChosen.length ===2) {
    setTimeout(checkForMatch, 500)
}

}