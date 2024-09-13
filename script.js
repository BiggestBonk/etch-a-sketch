//handle grid creation//
const body = document.querySelector('.wrapper')
const grid = document.querySelector('.grid')
let isDrawing = false
const square = document.querySelector('.square')
let squareWidthAndHeight = 49.0625
let numberOfSquares = 256
const containerSize = 800

function calculateSquareSize(containerSize, gridSize) {
  const squareCalc = containerSize + 1 - gridSize
  const squareWidthAndHeight = squareCalc / gridSize
  return squareWidthAndHeight
}

function createCustomGrid() {
  //button click prompts user to input grid size//
  let gridSize = prompt('enter grid size, limit 100', '32')
  if (gridSize > 100 || gridSize < 0) {
    do {
      gridSize = prompt('please enter a valid grid size')
    } while (gridSize > 100 || gridSize < 0)
  }
  removeGrid()
  numberOfSquares = gridSize * gridSize
  squareWidthAndHeight = calculateSquareSize(containerSize, gridSize)
  console.log(squareWidthAndHeight)
  createGrid(numberOfSquares, squareWidthAndHeight)
  //generate grid to input size//
}

function createGrid(numberOfSquares, squareWidthAndHeight) {
  for (let i = 0; i < numberOfSquares; i++) {
    const grid = document.querySelector('.grid')
    const gridSquare = document.createElement('div')
    gridSquare.setAttribute('ondragstart', 'fixDrag(event)')
    gridSquare.style.cssText =
      'width: ' +
      squareWidthAndHeight +
      'px; height: ' +
      squareWidthAndHeight +
      'px;'
    gridSquare.classList.add('square', 'onHover')
    grid.addEventListener('mousedown', () => {
      isDrawing = true
    })
    //detect when user stops drawing//
    grid.addEventListener('mouseup', (e) => {
      isDrawing = false
    })
    grid.addEventListener('mouseleave', (e) => {
      isDrawing = false
    })
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

    grid.appendChild(gridSquare)
  }
}

document.addEventListener('click', (e) => {
  if (e.target.matches('button')) {
    console.log('clicked')
    createCustomGrid()
  }
})

function removeGrid() {
  const grid = document.querySelector('.grid')
  grid.remove()
  const container = document.createElement('div')
  container.classList.add('grid')
  body.appendChild(container)
}

createGrid(numberOfSquares, squareWidthAndHeight)

//ignore normal drag behaviour//
function fixDrag(event) {
  event.preventDefault()
}
//document.addEventListener('mousedown', (e) => {
//  if (e.target.matches('.square')) {
//   draw = true
//    e.target.classList.add('drawnBox')
// }
