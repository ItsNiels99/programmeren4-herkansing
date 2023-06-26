import { Actor, Input, Vector } from "excalibur"
import { Resources } from './resources'

export class car extends Actor {

    constructor() {
        super({ height: Resources.car.height * 0.5, width: Resources.car.width * 0.5 })
    }

    onInitialize(engine) {

        this.graphics.use(Resources.car.toSprite())
        this.pos = new Vector(300, 350)
        this.vel = new Vector(0, 0)
        this.scale = new Vector(0.2, 0.2)

        this.on('collisionStart', (event) => {
            if (event.other._name == 'rock') {
                engine.currentScene.health.onHit()
                // if health is not found or is 0
                if (typeof engine.currentScene.health !== 'undefined' &&
                    engine.currentScene.health.healthAmount == 0) {
                    engine.goToScene('gameOver')
                }
            }
        })
    }
    //movement up and down
    onPreUpdate(engine) {

        let xspeed = 0
        let yspeed = 0

        if (engine.input.keyboard.isHeld(Input.Keys.W) || engine.input.keyboard.isHeld(Input.Keys.Up)) {
            yspeed = -250
        }
        if (engine.input.keyboard.isHeld(Input.Keys.S) || engine.input.keyboard.isHeld(Input.Keys.Down)) {
            yspeed = 250
        }
        if (engine.input.keyboard.isHeld(Input.Keys.A) || engine.input.keyboard.isHeld(Input.Keys.Left)) {
            xspeed = -250
        }
        if (engine.input.keyboard.isHeld(Input.Keys.D) || engine.input.keyboard.isHeld(Input.Keys.Right)) {
            xspeed = 250
        }
        this.vel = new Vector(xspeed, yspeed);
    }

}