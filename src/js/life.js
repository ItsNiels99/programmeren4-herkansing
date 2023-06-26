import { Actor, Vector } from "excalibur";
import { Resources } from "./resources";

export class Life extends Actor {
    xpos;
    ypos;

    constructor(xpos, ypos) {
        super();
        this.xpos = xpos;
        this.ypos = ypos;
    }

    onInitialize() {
        this.pos = new Vector(this.xpos, this.ypos);
        this.graphics.use(Resources.heart.toSprite());
        this.scale = new Vector(0.2, 0.2)
    }
}