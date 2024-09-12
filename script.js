//handle grid creation//
const body = document.querySelector('body')
const grid = document.querySelector('.grid')
let isDrawing = false
const square = document.querySelector('.square')
function createGrid(numberOfSquares) {
  for (let i = 0; i < numberOfSquares; i++) {
    const gridSquare = document.createElement('div')
    gridSquare.setAttribute('ondragstart', 'fixDrag(event)')
    gridSquare.classList.add('square', 'onHover')
    grid.appendChild(gridSquare)
  }
}

document.addEventListener('click', (e) => {
  if (e.target.matches('button')) {
    console.log('clicked')
    removeGrid()
  }
})

function removeGrid() {
  grid.remove()
  const container = document.createElement('div')
  container.classList.add('grid')
  body.appendChild(container)
}
const containerSize = 800
function calculateGridSize(containerSize, numberOfSquares) {
  const squareCalc = containerSize + 1 - (numberOfSquares - 1)
  const squareWidthAndHeight = squareCalc / numberOfSquares
  return squareWidthAndHeight
}

let numberOfSquares = 256
function createCustomGrid() {
  //button click prompts user to input grid size//
  let gridSize = prompt('enter grid size')
  //clear existing grid//

  //generate grid to input size//
}

//allows user to continue drawing if mouse is held//
document.addEventListener('mouseover', (e) => {
  if (e.target.matches('.square')) {
    if (isDrawing === true) {
      e.target.classList.add('drawnSquare')
    }
  } else {
    return
  }
})
//handle mousedown on invidual grid square//
document.addEventListener('mousedown', (e) => {
  if (e.target.matches('.square')) {
    e.target.classList.add('drawnSquare')
  }
})

createGrid(numberOfSquares)

//detects when user starts drawing//
grid.addEventListener('mousedown', () => {
  isDrawing = true
  console.log('isDrawing')
})
//detect when user stops drawing//
grid.addEventListener('mouseup', () => {
  isDrawing = false
  console.log('notDrawing')
})
//ignore normal drag behaviour//
function fixDrag(event) {
  event.preventDefault()
  console.log('default prevented')
}

//document.addEventListener('mousedown', (e) => {
//  if (e.target.matches('.square')) {
//   draw = true
//    e.target.classList.add('drawnBox')
// }
//})
