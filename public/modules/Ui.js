"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Ui_confirm, _Ui_dialog, _Ui_changeButton, _Ui_keyDisplay, _Ui_startGameButton, _Ui_exitMenuButton, _Ui_keyToTurn;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ui = void 0;
const Board_1 = require("./Board");
const Player_1 = require("./Player");
const Game_1 = require("./Game");
class Ui {
    constructor() {
        _Ui_confirm.set(this, document.getElementById('confirm'));
        _Ui_dialog.set(this, document.getElementById('dialog'));
        _Ui_changeButton.set(this, document.getElementById('change'));
        _Ui_keyDisplay.set(this, document.getElementById('key'));
        _Ui_startGameButton.set(this, document.getElementById('startGame'));
        _Ui_exitMenuButton.set(this, document.getElementById('exitMenu'));
        _Ui_keyToTurn.set(this, 'w');
        this.exitMenu = () => {
            let menu = document.getElementById('menu');
            menu.style.display = 'none';
            let visible = document.getElementById('visible');
            visible.style.display = 'flex';
        };
        let board = new Board_1.Board();
        let player = new Player_1.Player();
        __classPrivateFieldGet(this, _Ui_confirm, "f").addEventListener('click', () => {
            __classPrivateFieldGet(this, _Ui_dialog, "f").close();
        });
        __classPrivateFieldGet(this, _Ui_exitMenuButton, "f").addEventListener('click', () => {
            this.exitMenu();
        });
        __classPrivateFieldGet(this, _Ui_startGameButton, "f").addEventListener('click', () => {
            new Game_1.Game(player, board);
            __classPrivateFieldGet(this, _Ui_changeButton, "f").disabled = true;
            __classPrivateFieldGet(this, _Ui_startGameButton, "f").disabled = true;
        });
        __classPrivateFieldGet(this, _Ui_changeButton, "f").addEventListener('click', () => {
            __classPrivateFieldGet(this, _Ui_dialog, "f").show();
            __classPrivateFieldGet(this, _Ui_keyDisplay, "f").innerHTML = player.keyToTurn;
            document.body.addEventListener("keydown", (e) => {
                __classPrivateFieldGet(this, _Ui_keyDisplay, "f").innerText = e.key;
                player.keyToTurn = e.key;
            });
        });
        document.body.addEventListener("keydown", (e) => {
            if (__classPrivateFieldGet(this, _Ui_keyToTurn, "f") == e.key) {
                player.startTurning();
            }
        });
        document.body.addEventListener("keyup", (e) => {
            if (__classPrivateFieldGet(this, _Ui_keyToTurn, "f") == e.key) {
                player.stopTurning();
            }
        });
    }
}
exports.Ui = Ui;
_Ui_confirm = new WeakMap(), _Ui_dialog = new WeakMap(), _Ui_changeButton = new WeakMap(), _Ui_keyDisplay = new WeakMap(), _Ui_startGameButton = new WeakMap(), _Ui_exitMenuButton = new WeakMap(), _Ui_keyToTurn = new WeakMap();
//# sourceMappingURL=Ui.js.map