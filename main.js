const cardDiv = document.querySelector(".card-div")
const createButton = document.getElementById("create-button")
const createBox = document.getElementById("create-box")
let numberOfCards = 0

createButton.addEventListener("click", addCard)

function addCard() {
    let newCard = document.createElement("DIV")
    newCard.setAttribute("class", "new-card")
    newCard.setAttribute("id", String(numberOfCards))

    let cardColorButton = document.createElement("INPUT")
    cardColorButton.setAttribute("type", "color")
    cardColorButton.setAttribute("id", "colorPicker")
    cardColorButton.setAttribute("value", "#1E90FF")
    cardColorButton.addEventListener("click", changeCardColor)
    cardDiv.appendChild(newCard).appendChild(cardColorButton)

    let fontColorButton = document.createElement("INPUT")
    fontColorButton.setAttribute("type", "color")
    fontColorButton.setAttribute("id", "fontColorPicker")
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

const changeCardColor = () => {
    let cardNumber = event.currentTarget.parentNode.getAttribute("id")
    console.log(cardNumber)
    let colorPicker = document.getElementById(`${cardNumber}`)
    console.log(`${cardNumber}`)
    colorPicker.addEventListener("change", changeColor = () => {
        cardNumber.style.backgroundColor = colorPicker.value
    })

}
const changeFontColor = () => {
    let cardNumber = parseInt(cardDiv.getAttribute("card-number"))
    let colorPicker = document.getElementById("fontColorPicker")
    colorPicker.addEventListener("change", changeColor = () => {
        cardNumber.parentNode.style.color = colorPicker.value
    })
}

const deleteCard = () => {
    let whichCard = event.currentTarget.parentNode
    console.log(whichCard)
    whichCard.parentNode.removeChild(whichCard)
}