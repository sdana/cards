const cardDiv = document.querySelector(".card-div")
const createButton = document.getElementById("create-button")
const createBox = document.getElementById("create-box")

createButton.addEventListener("click", buildCard)

function addCard() {
    let newCard = document.createElement("DIV")
    newCard.setAttribute("class", "new-card")
    newCard.setAttribute("id", String(numberOfCards))
}

function addColorButtons(colorFontDelete) {
    let cardColorButton = document.createElement("INPUT")
    cardColorButton.setAttribute("type", "color")
    cardColorButton.setAttribute("id", "colorPicker")
    cardColorButton.setAttribute("value", "#1E90FF")
    cardColorButton.addEventListener("click", changeColor)
}

function buildCard() {
    cardDiv.appendChild(addCard)
    cardDiv.lastChild.appendChild(addColorButtons)
    cardDiv.lastChild.appendChild(addColorButtons)
}
