import { Actor, Engine, Scene, Vector, GraphicsGroup } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'


export class background extends Actor {

    offset

    onInitialize(engine) {
        const background = Resources.background.toSprite()
        this.offset = background.width

        const group = new GraphicsGroup({
            members: [
                {
                    graphic: background,
                    pos: new Vector(0, 80),
                },
                {
                    graphic: background,
                    pos: new Vector(background.width, 80),
                }
            ]
        })

        this.graphics.anchor = new Vector(0, 0)
        this.graphics.add(group)
        this.pos = new Vector(0, 0)
        this.vel = new Vector(-110, 0)
    }

    onPostUpdate(engine, delta) {
        if (this.pos.x < -this.offset) {
            this.pos = new Vector(0, 0)
        }
    }
}