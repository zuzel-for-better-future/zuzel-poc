import { Board } from "../modules/Board.js";
import { kulek } from "../modules/drawPlayer.js";




const dialog = document.getElementById('dialog')
const changeButton = document.getElementById('change')
const confirm = document.getElementById('confirm')
const key = document.getElementById('key')

confirm.addEventListener('click', () => {
    dialog.close()
})

changeButton.addEventListener('click', () => {
    dialog.show()
    key.innerHTML = move


    document.body.addEventListener("keydown", (e) => {
        key.innerText = e.key
        move = e.key
    })

})

const startBt = document.getElementById('start')

startBt.addEventListener('click', () => {
    start()
})

const start = () => {
    let menu = document.getElementById('menu')
    menu.style.display = 'none'
    let visible = document.getElementById('visible')
    visible.style.display = 'flex'
}



document.body.addEventListener("keydown", (e) => {

    switch (e.key) {
        case move:
            zakret = 1;
            r = -3.6;
            break;
    }
})

document.body.addEventListener("keyup", (e) => {

    switch (e.key) {
        case move:
            zakret = 0;
            r = -4;
            break;
    }
})


let zakret = 0;
let x = 450;
let y = 550;
let alfa = 0;
let r = -4;
let alive = true;
let move = 'w'


const startGameButton = document.getElementById('startGame')
startGameButton.addEventListener('click', () => {
    game()
})
let animacja;
function game() {

    startGameButton.setAttribute('disabled', '');
    changeButton.setAttribute('disabled', '');

    //console.log(alfa * 180 / Math.PI);
    kulek(x, y)
    animacja = requestAnimationFrame(game)

    let zmianaX = r * Math.sin(alfa)
    let zmianaY = r * Math.cos(alfa)

    x = x + zmianaX
    y = y + zmianaY

    if (zakret == 1) {
        alfa += Math.PI / 130
    }


    alive = p.checkIfInTrack(x, y)


    if (alive == false) {
        cancelAnimationFrame(animacja)
    }

}


kulek(x, y)

var p = new Board()

