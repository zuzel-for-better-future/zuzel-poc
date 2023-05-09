"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Board_radiusInner, _Board_radiusOuter, _Board_canvas, _Board_ctx, _Board_areaIn, _Board_areaOut;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
class Board {
    constructor() {
        _Board_radiusInner.set(this, 100);
        _Board_radiusOuter.set(this, 250);
        _Board_canvas.set(this, void 0);
        _Board_ctx.set(this, void 0);
        _Board_areaIn.set(this, void 0);
        _Board_areaOut.set(this, void 0);
        this.inside = () => {
            let areaIn = new Path2D();
            __classPrivateFieldGet(this, _Board_ctx, "f").strokeStyle = "black";
            __classPrivateFieldGet(this, _Board_ctx, "f").fillStyle = "rgb(00,94,00)";
            areaIn.arc(__classPrivateFieldGet(this, _Board_canvas, "f").width / 2, 250, __classPrivateFieldGet(this, _Board_radiusInner, "f"), 1 * Math.PI, 0 * Math.PI);
            areaIn.arc(__classPrivateFieldGet(this, _Board_canvas, "f").width / 2, 500, __classPrivateFieldGet(this, _Board_radiusInner, "f"), 0 * Math.PI, 1 * Math.PI);
            areaIn.lineTo(__classPrivateFieldGet(this, _Board_canvas, "f").width / 2 - __classPrivateFieldGet(this, _Board_radiusInner, "f"), 250);
            __classPrivateFieldGet(this, _Board_ctx, "f").lineWidth = 1;
            __classPrivateFieldGet(this, _Board_ctx, "f").fill(areaIn);
            __classPrivateFieldGet(this, _Board_ctx, "f").stroke(areaIn);
            return areaIn;
        };
        this.outside = () => {
            let areaOut = new Path2D();
            areaOut.arc(__classPrivateFieldGet(this, _Board_canvas, "f").width / 2, 250, __classPrivateFieldGet(this, _Board_radiusOuter, "f"), 1 * Math.PI, 0 * Math.PI);
            areaOut.arc(__classPrivateFieldGet(this, _Board_canvas, "f").width / 2, 500, __classPrivateFieldGet(this, _Board_radiusOuter, "f"), 0 * Math.PI, 1 * Math.PI);
            areaOut.moveTo(__classPrivateFieldGet(this, _Board_canvas, "f").width / 2 - __classPrivateFieldGet(this, _Board_radiusOuter, "f"), 500);
            areaOut.lineTo(__classPrivateFieldGet(this, _Board_canvas, "f").width / 2 - __classPrivateFieldGet(this, _Board_radiusOuter, "f"), 250);
            __classPrivateFieldGet(this, _Board_ctx, "f").stroke(areaOut);
            return areaOut;
        };
        this.checkIfInTrack = (x, y) => {
            if (__classPrivateFieldGet(this, _Board_ctx, "f").isPointInPath(__classPrivateFieldGet(this, _Board_areaIn, "f"), x, y) == true || __classPrivateFieldGet(this, _Board_ctx, "f").isPointInPath(__classPrivateFieldGet(this, _Board_areaOut, "f"), x, y) == false) {
                return false;
            }
            return true;
        };
        __classPrivateFieldSet(this, _Board_canvas, document.getElementById('canvas1'), "f");
        __classPrivateFieldGet(this, _Board_canvas, "f").width = 500;
        __classPrivateFieldGet(this, _Board_canvas, "f").height = 750;
        __classPrivateFieldGet(this, _Board_canvas, "f").style.backgroundColor = '';
        __classPrivateFieldSet(this, _Board_ctx, __classPrivateFieldGet(this, _Board_canvas, "f").getContext('2d'), "f");
        __classPrivateFieldSet(this, _Board_areaIn, this.inside(), "f");
        __classPrivateFieldSet(this, _Board_areaOut, this.outside(), "f");
    }
}
exports.Board = Board;
_Board_radiusInner = new WeakMap(), _Board_radiusOuter = new WeakMap(), _Board_canvas = new WeakMap(), _Board_ctx = new WeakMap(), _Board_areaIn = new WeakMap(), _Board_areaOut = new WeakMap();
//# sourceMappingURL=Board.js.map