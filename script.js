const container = document.querySelector('.container')

function createGrid() {
  for (let i = 0; i < 256; i++) {
    const gridSquare = document.createElement('div')
    gridSquare.className = 'square'
    container.appendChild(gridSquare)
  }
}

createGrid()

document.addEventListener('mouseover', (e) => {
  if (e.target.matches('.square')) {
    console.log('hover')
    e.target.className += ' onHover'
  }
})
