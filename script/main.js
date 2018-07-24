let squares = 14;

function makeSquares(squares) {
  let container = document.querySelector('.gridcontainer');

  for (i = 0; i < squares * squares; i++) {
    const box = document.createElement('div');
    container.appendChild(box);
    box.classList.add('box');
  }
  container.setAttribute('style',`grid-template-columns: repeat(${squares}, auto)`);
}

makeSquares(squares);
