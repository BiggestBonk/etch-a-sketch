const grid = document.querySelector('.grid')
let isDrawing = false
const square = document.querySelector('.square')
function createGrid() {
  for (let i = 0; i < 256; i++) {
    const gridSquare = document.createElement('div')
    gridSquare.setAttribute('ondragstart', 'fixDrag(event)')
    gridSquare.classList.add('square', 'onHover')
    grid.appendChild(gridSquare)
  }
}
document.addEventListener('mouseover', (e) => {
  if (e.target.matches('.square')) {
    if (isDrawing === true) {
      e.target.classList.add('drawnBox')
    }
  } else {
    return
  }
})

document.addEventListener('mousedown', (e) => {
  if (e.target.matches('.square')) {
    e.target.classList.add('drawnBox')
  }
})

createGrid()

grid.addEventListener('mousedown', () => {
  isDrawing = true
  console.log('isDrawing')
})

grid.addEventListener('mouseup', () => {
  isDrawing = false
  console.log('notDrawing')
})

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
