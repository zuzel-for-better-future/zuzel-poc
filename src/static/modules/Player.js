export class Player {

    #canvas2;
    #ctx;
    #length = -4;
    #angle = 0;
    #turning = false;
    keyToTurn = 'w'
    x = 450;
    y = 550;

    constructor() {
        this.#canvas2 = document.getElementById('canvas2')
        this.#ctx = canvas2.getContext('2d');
        this.#canvas2.width = 500;
        this.#canvas2.height = 750;
    }


    drawPlayer = () => {
        this.#ctx.clearRect(0, 0, this.#canvas2.width, this.#canvas2.height);
        this.#ctx.beginPath()
        this.#ctx.arc(this.x, this.y, 13, 0 * Math.PI, 2 * Math.PI)
        this.#ctx.fill()
    }

    calculateMovement = () => {

        this.x += this.#length * Math.sin(this.#angle)
        this.y += this.#length * Math.cos(this.#angle)

    }

    checkIfTurning = () => {

        if (this.#turning == true) {
            this.#angle += Math.PI / 130
        }

    }

    startTurning = (e) => {

        switch (e.key) {
            case this.keyToTurn:
                this.#turning = true;
                this.#length = -3.6;
                break;
        }
    }

    stopTurning = (e) => {

        switch (e.key) {
            case this.keyToTurn:
                this.#turning = false;
                this.#length = -4;
                break;
        }
    }
}