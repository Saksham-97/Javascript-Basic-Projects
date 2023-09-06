let clickSound = new Audio("rightclick.mp3");

let turn = "X";

const changeTurn = () => {
    return turn === "X" ? "O" : "X";
}

let gameover = false;
// Winning Logic

const checkWin = () => {
    let boxTexts = document.getElementsByClassName('box-text');
    let win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [6, 4, 2]
    ]
    win.forEach(e => {
        if ((boxTexts[e[0]].innerText === boxTexts[e[1]].innerText) && (boxTexts[e[1]].innerText === boxTexts[e[2]].innerText) && (boxTexts[e[1]].innerText != '')) {
            document.querySelector('.info').innerText = boxTexts[e[0]].innerText + " Won"
            gameover = true;
        }
    })
}


// Game Logic

let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector('.box-text');
    element.addEventListener('click', () => {
        if (boxText.innerText === '') {
            boxText.innerText = turn;
            turn = changeTurn();
            clickSound.play();
            checkWin();
            if (!gameover) {
                document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
            }
        }
    })
})

// reset logic

let btnReset = document.querySelector('button');

btnReset.addEventListener('click', () => {
    let textReset = document.getElementsByClassName('box-text');
    Array.from(textReset).forEach(element => {
        element.innerText = "";
        turn = "X";
        gameover = false;
        document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
    })
})