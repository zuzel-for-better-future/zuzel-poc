
export function kulek(x, y) {

    const canvas2 = document.getElementById('canvas2')
    const ctx = canvas2.getContext('2d');
    canvas2.width = 500;
    canvas2.height = 750;

    ctx.arc(x, y, 15, 0 * Math.PI, 2 * Math.PI)
    ctx.fill()
}

