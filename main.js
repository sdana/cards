const cardDiv = document.querySelector(".card-div")
const createButton = document.getElementById("create-button")
const createBox = document.getElementById("create-box")
let numberOfCards = cardDiv.childElementCount

createButton.addEventListener("click", addCard)

function addCard() {
    let newCard = document.createElement("DIV")
    newCard.setAttribute("class", "new-card")
    // let cardNumber = document.createAttribute("card-number")
    // newCard.setAttribute("card-number", numberOfCards)

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

    // console.log(numberOfCards)

    // return numberOfCards++
}

const changeCardColor = () => {
    // let cardNumber = parseInt(cardDiv.getAttribute("card-number"))
    let colorPicker = document.getElementById("colorPicker")
    colorPicker.addEventListener("change", changeColor = () => {
        event.currentTarget.parentNode.style.backgroundColor = colorPicker.value
} )
    event.currentTarget.parentNode.style.backgroundColor = colorPicker.value
    console.log(event.currentTarget.parentNode)


}
const changeFontColor = () => {
    // let cardNumber = parseInt(cardDiv.getAttribute("card-number"))
    let colorPicker = document.getElementById("fontColorPicker")
    colorPicker.addEventListener("change", changeColor = () => {
    event.currentTarget.parentNode.style.color = colorPicker.value
    })
}
const deleteCard = () => {
    let whichCard = event.currentTarget.parentNode
    console.log(whichCard)
    whichCard.parentNode.removeChild(whichCard)
}