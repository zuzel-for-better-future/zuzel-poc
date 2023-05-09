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
var _Game_animation, _Game_alive, _Game_player, _Game_board;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
class Game {
    constructor(player, board) {
        _Game_animation.set(this, void 0);
        _Game_alive.set(this, true);
        _Game_player.set(this, void 0);
        _Game_board.set(this, void 0);
        this.game = () => {
            __classPrivateFieldSet(this, _Game_animation, requestAnimationFrame(this.game), "f");
            __classPrivateFieldGet(this, _Game_player, "f").drawPlayer();
            __classPrivateFieldGet(this, _Game_player, "f").calculateMovement();
            __classPrivateFieldGet(this, _Game_player, "f").checkIfTurning();
            __classPrivateFieldSet(this, _Game_alive, __classPrivateFieldGet(this, _Game_board, "f").checkIfInTrack(__classPrivateFieldGet(this, _Game_player, "f").getX(), __classPrivateFieldGet(this, _Game_player, "f").getY()), "f");
            if (__classPrivateFieldGet(this, _Game_alive, "f") == false) {
                cancelAnimationFrame(__classPrivateFieldGet(this, _Game_animation, "f"));
            }
        };
        __classPrivateFieldSet(this, _Game_player, player, "f");
        __classPrivateFieldSet(this, _Game_board, board, "f");
        this.game();
    }
}
exports.Game = Game;
_Game_animation = new WeakMap(), _Game_alive = new WeakMap(), _Game_player = new WeakMap(), _Game_board = new WeakMap();
//# sourceMappingURL=Game.js.map