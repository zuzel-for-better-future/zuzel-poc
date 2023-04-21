export class Ui {
    confirm = document.getElementById('confirm')
    dialog = document.getElementById('dialog')
    changeButton = document.getElementById('change')
    key = document.getElementById('key')
    startGameButton = document.getElementById('startGame')
    startBt = document.getElementById('start')

    constructor() {

        this.confirm.addEventListener('click', () => {
            this.dialog.close()
        })

        this.startBt.addEventListener('click', () => {
            this.start()
        })


    }

    start = () => {
        let menu = document.getElementById('menu')
        menu.style.display = 'none'
        let visible = document.getElementById('visible')
        visible.style.display = 'flex'
    }

}