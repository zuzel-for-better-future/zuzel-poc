export class Player {

    #canvas2: HTMLCanvasElement;
    #ctx: CanvasRenderingContext2D;
    #length: number = -4;
    #angle: number = 0;
    #turning: boolean = false;
    #x: number = 450;
    #y: number = 550;

    constructor() {
        this.#canvas2 = document.getElementById('canvas2') as HTMLCanvasElement
        this.#ctx = this.#canvas2.getContext('2d');
        this.#canvas2.width = 500;
        this.#canvas2.height = 750;

        this.drawPlayer()
    }


    drawPlayer = () => {
        this.#ctx.clearRect(0, 0, this.#canvas2.width, this.#canvas2.height);
        this.#ctx.beginPath()
        this.#ctx.arc(this.#x, this.#y, 13, 0, 2 * Math.PI)
        this.#ctx.fill()
    }

    calculateMovement = () => {

        this.#x += this.#length * Math.sin(this.#angle)
        this.#y += this.#length * Math.cos(this.#angle)

    }

    checkIfTurning = () => {

        if (this.#turning == true) {
            this.#angle += Math.PI / 130
        }

    }

    startTurning = () => {

        this.#turning = true;
        this.#length = -3.6;
    }

    stopTurning = () => {

        this.#turning = false;
        this.#length = -4;
    }

    getX = () => {
        return this.#x
    }

    getY = () => {
        return this.#y
    }
}