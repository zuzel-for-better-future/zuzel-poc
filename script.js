import { inside, outside, areaIn, areaOut } from "./modules/drawTrack.js";
import { kulek } from "./modules/drawPlayer.js";

const canvas1 = document.getElementById('canvas1')
const ctxMain = canvas1.getContext('2d');
canvas1.width = 500;
canvas1.height = 750;
canvas1.style.backgroundColor = '';


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


window.addEventListener('resize', () => {

    outside()
    inside()
});


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

    if (ctxMain.isPointInPath(areaIn, x, y) == true) {
        alive = false;
    }
    if (ctxMain.isPointInPath(areaOut, x, y) == false) {
        alive = false;
    }
    if (alive == false) {
        cancelAnimationFrame(animacja)
    }
}


kulek(x, y)
inside(ctxMain, canvas1)
outside(ctxMain, canvas1)

