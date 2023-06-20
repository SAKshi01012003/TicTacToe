console.log(" Welcome Tic Tac Toe")
let music = new Audio("Gamemusic.mp3")
let audioTurn = new Audio("turnaudio.mp3")
let turn = "X";
let over = false;
var filledBoxesCount = 0;

let draw = false;
// Function For changing the turn

const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

//Function for checking the winner

const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"


            over = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "180px"
        }
    })
}

//Logic of Game
// music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if ((boxtext.innerText === '') && (!over)) {
            boxtext.innerText = turn;
            filledBoxesCount++;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if ((filledBoxesCount === 9) && (!over)) {
                document.getElementsByClassName("info")[0].innerText = "Oops!! Match draw, restart the game ";
                document.getElementById("reset").innerHTML = "Restart";
            }
            else if (!over) {

                document.getElementsByClassName("info")[0].innerText = "Turn of " + turn;
            }

        }

        else {

            if ((boxtext.innerText === '') && (over)) {
                document.getElementsByClassName("info")[0].innerText = "Game is already over,please restart the game ";

                document.getElementById("reset").innerHTML = "Restart";
            }
        }
    })
})
// To reset  the game add event listner
reset.addEventListener('click', () => {
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element => {
        element.innerText = ""
    })
    turn = "X";
    document.getElementById("reset").innerText = "Reset";

    over = false;
    filledBoxesCount = 0;

    if (!over) {

        document.getElementsByClassName("info")[0].innerText = "Turn of " + turn;
    }
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0"


})

