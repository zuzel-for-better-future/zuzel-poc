export class Board {

    #radiusInner = 100;
    #radiusOuter = 250;
    #canvas;
    #ctx;
    #areaIn;
    #areaOut;

    constructor() {
        this.#canvas = document.getElementById('canvas1');
        this.#canvas.width = 500;
        this.#canvas.height = 750;
        this.#canvas.style.backgroundColor = '';
        this.#ctx = this.#canvas.getContext('2d');

        this.#areaIn = this.inside();
        this.#areaOut = this.outside();
    }


    inside = () => {
        let areaIn = new Path2D()

        this.#ctx.strokeStyle = "black"
        this.#ctx.fillStyle = "rgb(00,94,00)"

        areaIn.arc(this.#canvas.width / 2, 250, this.#radiusInner, 1 * Math.PI, 0 * Math.PI);
        areaIn.arc(this.#canvas.width / 2, 500, this.#radiusInner, 0 * Math.PI, 1 * Math.PI);
        areaIn.lineTo(this.#canvas.width / 2 - this.#radiusInner, 250)

        this.#ctx.lineWidth = 1;
        this.#ctx.fill(areaIn)
        this.#ctx.stroke(areaIn)

        return areaIn
    }


    outside = () => {
        let areaOut = new Path2D()

        areaOut.arc(this.#canvas.width / 2, 250, this.#radiusOuter, 1 * Math.PI, 0 * Math.PI);
        areaOut.arc(this.#canvas.width / 2, 500, this.#radiusOuter, 0 * Math.PI, 1 * Math.PI);
        areaOut.moveTo(this.#canvas.width / 2 - this.#radiusOuter, 500)
        areaOut.lineTo(this.#canvas.width / 2 - this.#radiusOuter, 250)

        this.#ctx.stroke(areaOut)

        return areaOut
    }

    checkIfInTrack = (x, y) => {
        if (this.#ctx.isPointInPath(this.#areaIn, x, y) == true || this.#ctx.isPointInPath(this.#areaOut, x, y) == false) {
            return false
        }
        return true
    }
}
