import { Actor, GraphicsGroup, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources'

export class rock extends Actor {

    constructor() {

        super({
            height: Resources.rock.height * 0.1, 
            width: Resources.rock.width * 0.1, 
            name: 'rock' 
        })

        this.graphics.use(Resources.rock.toSprite())
        this.scale = new Vector(0.06, 0.06)
        this.pos = new Vector(900, Math.random() * 400 + 100)
        this.vel = new Vector(-400, 0)
        // if rock is not in viewport, spwawn again.
        this.on("exitviewport", (event) => {
            this.pos = new Vector(900, Math.random() * 400 + 100)
        })
    }
}