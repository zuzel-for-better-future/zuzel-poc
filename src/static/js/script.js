import { Board } from "../modules/Board.js";
import { Player } from "../modules/Player.js";
import { Ui } from "../modules/Ui.js";
import { Game } from "../modules/Game.js";

let ui = new Ui
let board = new Board
let player = new Player

ui.startGameButton.addEventListener('click', () => {
    new Game(player, board)
    ui.changeButton.disabled = true
    ui.startGameButton.disabled = true
})

ui.changeButton.addEventListener('click', () => {
    ui.dialog.show()
    ui.key.innerHTML = player.keyToTurn

    document.body.addEventListener("keydown", (e) => {
        ui.key.innerText = e.key
        player.keyToTurn = e.key
    })
})

document.body.addEventListener("keydown", (e) => {

    player.startTurning(e)
})

document.body.addEventListener("keyup", (e) => {

    player.stopTurning(e)
})


player.drawPlayer()
