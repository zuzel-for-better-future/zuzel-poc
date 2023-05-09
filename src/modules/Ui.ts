import { Board } from "./Board";
import { Player } from "./Player";
import { Game } from "./Game";

export class Ui {
    #confirm: HTMLButtonElement = document.getElementById('confirm') as HTMLButtonElement
    #dialog: HTMLDialogElement = document.getElementById('dialog') as HTMLDialogElement
    #changeButton: HTMLButtonElement = document.getElementById('change') as HTMLButtonElement
    #keyDisplay: HTMLElement = document.getElementById('key')
    #startGameButton: HTMLButtonElement = document.getElementById('startGame') as HTMLButtonElement
    #exitMenuButton: HTMLButtonElement = document.getElementById('exitMenu') as HTMLButtonElement
    #keyToTurn: string = 'w'

    constructor() {

        let board = new Board()
        let player: any = new Player()


        this.#confirm.addEventListener('click', () => {
            this.#dialog.close()
        })

        this.#exitMenuButton.addEventListener('click', () => {
            this.exitMenu()
        })


        this.#startGameButton.addEventListener('click', () => {
            new Game(player, board)
            this.#changeButton.disabled = true
            this.#startGameButton.disabled = true
        })

        this.#changeButton.addEventListener('click', () => {
            this.#dialog.show()
            this.#keyDisplay.innerHTML = player.keyToTurn

            document.body.addEventListener("keydown", (e) => {
                this.#keyDisplay.innerText = e.key
                player.keyToTurn = e.key
            })
        })

        document.body.addEventListener("keydown", (e) => {

            if (this.#keyToTurn == e.key) {
                player.startTurning()
            }

        })

        document.body.addEventListener("keyup", (e) => {

            if (this.#keyToTurn == e.key) {
                player.stopTurning()
            }
        })


    }

    exitMenu = () => {
        let menu = document.getElementById('menu')
        menu.style.display = 'none'
        let visible = document.getElementById('visible')
        visible.style.display = 'flex'
    }



}