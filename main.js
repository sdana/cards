const cardDiv = document.querySelector(".card-div")
const createButton = document.getElementById("create-button")
const createBox = document.getElementById("create-box")
let numberOfCards = cardDiv.childElementCount

createButton.addEventListener("click", addCard)

function addCard() {
    let newCard = document.createElement("DIV")
    newCard.setAttribute("class", "new-card")
    let cardNumber = document.createAttribute("card-number")
    newCard.setAttribute("card-number", numberOfCards)

    let cardColorButton = document.createElement("BUTTON")
    cardColorButton.innerHTML = "card color"
    cardColorButton.addEventListener("click", changeCardColor)
    cardDiv.appendChild(newCard).appendChild(cardColorButton)

    let fontColorButton = document.createElement("BUTTON")
    fontColorButton.innerHTML = "font color"
    fontColorButton.addEventListener("click", changeFontColor)
    cardDiv.appendChild(newCard).appendChild(fontColorButton)

    let deleteButton = document.createElement("BUTTON")
    deleteButton.innerHTML = "delete"
    deleteButton.addEventListener("click", deleteCard)
    cardDiv.appendChild(newCard).appendChild(deleteButton)
    
    let createBoxValue = document.createElement("P") 
    createBoxValue.innerHTML = String(document.getElementById("create-box").value)
    cardDiv.appendChild(newCard).appendChild(createBoxValue)
    createBox.value = ""

    console.log(numberOfCards)

    return numberOfCards++
}

function changeCardColor(){
    let colors = ["blue", "red", "green", "yellow"]
    let cardNumber = parseInt(cardDiv.getAttribute("card-number"))
    //choose a random color from colors array and assign to card
    //event.currentTarget.parentNode.style.backgroundColor = colors[parseInt(Math.floor(Math.random() * Math.floor(colors.length)))]
    
    //This Code snipped generates a random HEX color value and assigns it to the card (I did not write this)
    event.currentTarget.parentNode.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16)
    console.log(event.currentTarget.parentNode)
}
function changeFontColor() {
    let colors = ["blue", "red", "green", "yellow", "black", "white"]
    let cardNumber = parseInt(cardDiv.getAttribute("card-number"))
    //event.currentTarget.parentNode.style.color = colors[parseInt(Math.floor(Math.random() * Math.floor(colors.length)))]
    
        //This Code snipped generates a random HEX color value and assigns it to the card (I did not write this)
    event.currentTarget.parentNode.style.color = '#' + Math.floor(Math.random() * 16777215).toString(16)
    console.log(event.currentTarget.parentNode)
    
    console.log(event.currentTarget.parentNode)
}
function deleteCard(){
    let whichCard = event.currentTarget.parentNode
    console.log(whichCard)
    whichCard.parentNode.removeChild(whichCard)
}