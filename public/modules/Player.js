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
var _Player_canvas2, _Player_ctx, _Player_length, _Player_angle, _Player_turning, _Player_x, _Player_y;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
class Player {
    constructor() {
        _Player_canvas2.set(this, void 0);
        _Player_ctx.set(this, void 0);
        _Player_length.set(this, -4);
        _Player_angle.set(this, 0);
        _Player_turning.set(this, false);
        _Player_x.set(this, 450);
        _Player_y.set(this, 550);
        this.drawPlayer = () => {
            __classPrivateFieldGet(this, _Player_ctx, "f").clearRect(0, 0, __classPrivateFieldGet(this, _Player_canvas2, "f").width, __classPrivateFieldGet(this, _Player_canvas2, "f").height);
            __classPrivateFieldGet(this, _Player_ctx, "f").beginPath();
            __classPrivateFieldGet(this, _Player_ctx, "f").arc(__classPrivateFieldGet(this, _Player_x, "f"), __classPrivateFieldGet(this, _Player_y, "f"), 13, 0 * Math.PI, 2 * Math.PI);
            __classPrivateFieldGet(this, _Player_ctx, "f").fill();
        };
        this.calculateMovement = () => {
            __classPrivateFieldSet(this, _Player_x, __classPrivateFieldGet(this, _Player_x, "f") + __classPrivateFieldGet(this, _Player_length, "f") * Math.sin(__classPrivateFieldGet(this, _Player_angle, "f")), "f");
            __classPrivateFieldSet(this, _Player_y, __classPrivateFieldGet(this, _Player_y, "f") + __classPrivateFieldGet(this, _Player_length, "f") * Math.cos(__classPrivateFieldGet(this, _Player_angle, "f")), "f");
        };
        this.checkIfTurning = () => {
            if (__classPrivateFieldGet(this, _Player_turning, "f") == true) {
                __classPrivateFieldSet(this, _Player_angle, __classPrivateFieldGet(this, _Player_angle, "f") + Math.PI / 130, "f");
            }
        };
        this.startTurning = () => {
            __classPrivateFieldSet(this, _Player_turning, true, "f");
            __classPrivateFieldSet(this, _Player_length, -3.6, "f");
        };
        this.stopTurning = () => {
            __classPrivateFieldSet(this, _Player_turning, false, "f");
            __classPrivateFieldSet(this, _Player_length, -4, "f");
        };
        this.getX = () => {
            return __classPrivateFieldGet(this, _Player_x, "f");
        };
        this.getY = () => {
            return __classPrivateFieldGet(this, _Player_y, "f");
        };
        __classPrivateFieldSet(this, _Player_canvas2, document.getElementById('canvas2'), "f");
        __classPrivateFieldSet(this, _Player_ctx, __classPrivateFieldGet(this, _Player_canvas2, "f").getContext('2d'), "f");
        __classPrivateFieldGet(this, _Player_canvas2, "f").width = 500;
        __classPrivateFieldGet(this, _Player_canvas2, "f").height = 750;
        this.drawPlayer();
    }
}
exports.Player = Player;
_Player_canvas2 = new WeakMap(), _Player_ctx = new WeakMap(), _Player_length = new WeakMap(), _Player_angle = new WeakMap(), _Player_turning = new WeakMap(), _Player_x = new WeakMap(), _Player_y = new WeakMap();
//# sourceMappingURL=Player.js.map