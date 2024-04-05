let gameBoard = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
];
console.log(gameBoard[0][1]);
let selector = "x";

function createUser(user1, user2) {
  return {
    user1: user1,
    user2: user2,
  };
}

const user1 = prompt("Enter the first player's name:");
const user2 = prompt("Enter the second player's name:");

const users = createUser(user1, user2);
console.log(users);

let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");
console.log(users.user1);
player1.innerHTML += " " + users.user1;
player2.innerHTML += " " + users.user2;

function changeXY() {
  if (selector === "x") {
    selector = "o";
  } else {
    selector = "x";
  }
}
const resetGameBoard = () => {
  for (let i = 0; i < gameBoard.length; i++) {
    for (let j = 0; j < gameBoard[i].length; j++) {
      gameBoard[i][j] = "";

      document.querySelector(
        `[data-xcoord="${i}"][data-ycoord="${j}"]`
      ).innerHTML = "";
    }
  }
  let winnerDiv = document.querySelector(".winner-div");
  winnerDiv.remove();
};
const clickQuitBtn = () => {
  location.href = "./index.html";
};

const onclick = (e) => {
  let square = e.target;
  if (square.innerHTML != "x" && square.innerHTML != "o") {
    let squareX = square.dataset.xcoord;
    let squareY = square.dataset.ycoord;

    let clickedValue = selector;
    gameBoard[squareX][squareY] = clickedValue;

    square.innerHTML = clickedValue;
    winnerChecker(selector);
    console.log(clickedValue);
    changeXY();
    console.log(gameBoard);
  }
};

const winnerChecker = (player) => {
  // Check rows
  for (let i = 0; i < 3; i++) {
    if (
      gameBoard[i][0] === player &&
      gameBoard[i][1] === player &&
      gameBoard[i][2] === player
    ) {
      console.log(`Winner is ${player} Player`);
      winnerUpdate();
      //   resetGameBoard();
      return;
    }
  }

  // Check columns
  for (let i = 0; i < 3; i++) {
    if (
      gameBoard[0][i] === player &&
      gameBoard[1][i] === player &&
      gameBoard[2][i] === player
    ) {
      console.log(`Winner is ${player} Player`);
      winnerUpdate();
      //   resetGameBoard();
      return;
    }
  }

  // Check diagonals
  if (
    (gameBoard[0][0] === player &&
      gameBoard[1][1] === player &&
      gameBoard[2][2] === player) ||
    (gameBoard[0][2] === player &&
      gameBoard[1][1] === player &&
      gameBoard[2][0] === player)
  ) {
    console.log(`Winner is ${player} Player`);
    winnerUpdate();
    // resetGameBoard();
    return;
  }
  console.log();
};
function winnerUpdate() {
  const winner = document.createElement("div");
  winner.classList.add("winner-div");
  winner.innerHTML = `winner is Player ${selector} `;
  const btnsDiv = document.createElement("div");
  btnsDiv.classList.add("btns-div");
  const updateBtn = document.createElement("button");
  updateBtn.classList.add("update-btn");
  updateBtn.innerHTML = "Reset";
  const quitBtn = document.createElement("button");
  quitBtn.classList.add("quit-btn");
  quitBtn.innerHTML = "Quit";

  btnsDiv.appendChild(updateBtn);
  btnsDiv.appendChild(quitBtn);
  winner.appendChild(btnsDiv);
  document.getElementById("header").appendChild(winner);
  updateBtn.addEventListener("click", resetGameBoard);
  quitBtn.addEventListener("click", clickQuitBtn);
}

const squares = document.querySelectorAll(".square");
squares.forEach((e) => {
  e.addEventListener("click", onclick);
});
function quitGame() {
  location.href = "./index.html";
}
const quitGameBtn = document.querySelector(".quit-game-btn");
quitGameBtn.addEventListener("click", quitGame);

// miige yvela elementi
//gadauare lopit da daamate yvelas event liseneri
//am ivent lisenershi gausvhi funcia romelic daapdeitebs shen bords
//es funqcia iqneba shemdeg nairi (x, y, type, board)
