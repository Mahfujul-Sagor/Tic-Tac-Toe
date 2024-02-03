let body = document.querySelector('body');
let reset = document.querySelector('.reset');
let player = document.querySelector('.player');
let boxes = document.querySelectorAll('#box');
let message = document.querySelector('#msg');
let playerTurn = document.querySelector('.p-turn');
let newGameBtn = document.querySelector('.new-game');

let count = 0;

let turn0 = true;

const winPattern = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,4,8],
  [2,4,6],
  [0,3,6],
  [1,4,7],
  [2,5,8]
];


const resetGame = ()=> {
  turn0 = true;
  enableBoxes();
  message.innerText = '';
  count = 0;
};

boxes.forEach ((boxes)=> {
  boxes.addEventListener('click', ()=> {
    if (turn0) {
      // player1
      boxes.innerText = 'O';
      turn0 = false;
      playerTurn.innerText = 'Player 2';
      count++;
    }else {
      // player2
      boxes.innerText = 'X';
      turn0 = true;
      playerTurn.innerText = 'Player 1';
      count++;
    }
    boxes.disabled = true;
    checkWinner();
    if (count === 9) {
      message.innerText = "It's a draw!";
    }
  });
});

const disableBoxes = ()=> {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = ()=> {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = '';
  }
};

const showWinner = (winner)=> {
  if (winner === 'O') {
    message.innerText = 'Congratulations! Player 1';
  }else {
    message.innerText = 'Congratulations! player 2';
  }
  disableBoxes();
};

const checkWinner = ()=> {
  for(let pattern of winPattern) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != '' && pos2val != '' && pos3val != '') {
      if (pos1val === pos2val && pos2val === pos3val) {
        showWinner(pos1val);
      };
    };
  };
};

newGameBtn.addEventListener('click', resetGame);
reset.addEventListener('click', resetGame);