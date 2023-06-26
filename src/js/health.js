import * as ex from 'excalibur'
import { Life } from "./life";
import { Engine } from 'excalibur'

export class health extends ex.Actor {

    heartAmount
    heart1
    heart2
    heart3
    game;

    constructor() {

        super()
        this.healthAmount = 3
        this.heart1 = new Life(40, 40)
        this.heart2 = new Life(140, 40)
        this.heart3 = new Life(240, 40)
    }

    onInitialize(engine) {
        this.heartAmount = 3

        this.game = engine;

        engine.currentScene.add(this.heart1)
        engine.currentScene.add(this.heart2)
        engine.currentScene.add(this.heart3)
    }

    onHit(engine) {

        console.log("You hit a rock!")
        if (this.heartAmount === 1) {
            this.heart1.kill()
            this.game.goToScene('gameOver')
        }
        if (this.heartAmount === 2) {
            this.heart2.kill()
            this.heartAmount = 1
        }
        if (this.heartAmount === 3) {
            this.heart3.kill()
            this.healthAmount = 2
        }
        console.log(this.heartAmount)
    }
}
