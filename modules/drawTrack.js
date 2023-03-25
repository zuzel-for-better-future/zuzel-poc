export let areaOut;
export const outside = (ctx, canvas) => {

    let radiusDuzy = 250;
    areaOut = new Path2D()
    //ctx.strokeStyle = "rgb(0,0,0)"
    areaOut.arc(canvas.width / 2, 250, radiusDuzy, 1 * Math.PI, 0 * Math.PI);
    areaOut.arc(canvas.width / 2, 500, radiusDuzy, 0 * Math.PI, 1 * Math.PI);
    areaOut.moveTo(canvas.width / 2 - radiusDuzy, 500)
    areaOut.lineTo(canvas.width / 2 - radiusDuzy, 250)
    ctx.stroke(areaOut)

}

export let areaIn;
export const inside = (ctx, canvas) => {

    let radiusMaly = 100;
    areaIn = new Path2D()
    ctx.strokeStyle = "black"
    ctx.fillStyle = "rgb(00,94,00)"
    areaIn.arc(canvas.width / 2, 250, radiusMaly, 1 * Math.PI, 0 * Math.PI);
    areaIn.arc(canvas.width / 2, 500, radiusMaly, 0 * Math.PI, 1 * Math.PI);
    areaIn.lineTo(canvas.width / 2 - radiusMaly, 250)
    ctx.lineWidth = 1;
    ctx.fill(areaIn)
    ctx.stroke(areaIn)

}
