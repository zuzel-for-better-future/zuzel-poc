export class Game {
    #animation;
    #alive = true;
    #player;
    #board;
    
    constructor(player, board) {
        this.#player = player
        this.#board = board
        this.game()
    }

    game = () => {
        this.#animation = requestAnimationFrame(this.game)

        this.#player.drawPlayer()
        this.#player.calculateMovement()
        this.#player.checkIfTurning()

        this.#alive = this.#board.checkIfInTrack(this.#player.x, this.#player.y)

        if (this.#alive == false) {
            cancelAnimationFrame(this.#animation)
        }

    }
}