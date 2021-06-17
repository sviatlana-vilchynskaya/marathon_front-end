const board = document.querySelector('#board')
const colors = ['#4148F6', '#63EB4B', '#F79043', '#399ED4', '#CD43F7', '#F5C322', '#39D48F', '#43D1F7', '#D4C285', '#DFB4F5', '#CCFF00']
const SQUARES_NUMBER = 600


for (let  i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    
    return colors[index]
}

