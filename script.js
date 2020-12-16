const playerOne = document.getElementById("playerOne");
const playerTwo = document.getElementById("playerTwo");
const p1Score = document.getElementById("firstHoldCounter");
const p2Score = document.getElementById("secondHoldCounter");
const p1Counter = document.getElementById("playerOneCount");
const p2Counter = document.getElementById("playerTwoCount");
const p1Back = document.getElementById("left");
const p2Back = document.getElementById("right");
const newGame = document.getElementById("newGame");
const roll = document.getElementById("roll");
const hold = document.getElementById("hold");
const dice = document.getElementById("dice");
let activePlayer = 0;

newGame.addEventListener("click", () => {
    activePlayer = 1;
    playerOne.innerHTML = "Player 1";
    playerTwo.innerHTML = "Player 2";
    p1Score.innerHTML = 0;
    p2Score.innerHTML = 0;
    p1Counter.innerHTML = 0;
    p2Counter.innerHTML = 0;
    p1Back.style.backgroundColor = "tan";
    p2Back.style.backgroundColor = "white";
})

const playerChange = (activePlayer) => {
    if (activePlayer === 1) {
        p1Back.style.backgroundColor = "tan";
        p2Back.style.backgroundColor = "white";
    } else if (activePlayer === 2) {
        p1Back.style.backgroundColor = "white";
        p2Back.style.backgroundColor = "tan";
    }
}

roll.addEventListener("click", () => {
    let ranNum = Math.floor(Math.random() * 6) + 1;
    dice.src = `./img/dice${ranNum}.png`;
    if (activePlayer === 1) {
        if (ranNum === 1) {
            p1Counter.innerHTML = 0
            activePlayer = 2;
            playerChange(activePlayer);
        } else if (p1Score.innerHTML < 20) {
            p1Counter.innerHTML = parseInt(p1Counter.innerHTML,10) + ranNum;
        }
    } else if (activePlayer === 2) {
        if (ranNum === 1) {
            p2Counter.innerHTML = 0;
            activePlayer = 1;
            playerChange(activePlayer);
        } else if (p2Score.innerHTML < 20) {
            p2Counter.innerHTML = parseInt(p2Counter.innerHTML,10) + ranNum;
        }
    }
})

hold.addEventListener("click", () => {
    if (activePlayer === 1) {
        p1Score.innerHTML = parseInt(p1Score.innerHTML,10) + parseInt(p1Counter.innerHTML);
        p1Counter.innerHTML = 0;
        if (p1Score.innerHTML >= 20) {
            playerOne.innerHTML = "You Win!";
            playerTwo.innerHTML = "You Lose!";
            activePlayer = 0;
        } else {
            activePlayer = 2;
            playerChange(activePlayer);
        }
    } else if (activePlayer === 2) {
        p2Score.innerHTML = parseInt(p2Score.innerHTML,10) + parseInt(p2Counter.innerHTML);
        p2Counter.innerHTML = 0;
        if (p2Score.innerHTML >= 20) {
            playerTwo.innerHTML = "You Win!";
            playerOne.innerHTML = "You Lose!";
            activePlayer = 0;
        } else {
            activePlayer = 1;
            playerChange(activePlayer);
        }
    }
})