import { Player } from "./Player";
import { Board } from "./Board";

export class Game {
    #animation: number;
    #alive: boolean = true;
    #player: Player;
    #board: Board;

    constructor(player: Player, board: Board) {
        this.#player = player
        this.#board = board
        this.game()
    }

    game = (): void => {
        this.#animation = requestAnimationFrame(this.game)

        this.#player.drawPlayer()
        this.#player.calculateMovement()
        this.#player.checkIfTurning()

        this.#alive = this.#board.checkIfInTrack(this.#player.getX(), this.#player.getY())

        if (this.#alive == false) {
            cancelAnimationFrame(this.#animation)
        }

    }
}