import { Scene, Label, Vector, Font } from 'excalibur'
import { Resources } from './resources'
import { Button } from './button'

export class gameOver extends Scene {

    Scoreclass
    score

    constructor(Scoreclass) {
        super({
        })
        this.Scoreclass = Scoreclass
    }

    onInitialize(Engine) {
        //nieuwe instance van button hierdoor zitten dezelfde functie in "button" je roept button dus aan vanuit een andere file.
        let button = new Button(Resources.retry, Resources.retry, new Vector(1, 1), new Vector(200, 200), 'level')

        this.score = new Label({
            pos: new Vector(200, 100),
            text: `score: ${this.Scoreclass.getScore()}`,
            font: new Font({ size: 60 }),
        })

        this.add(this.score)
        this.add(button)

    }
    onActivate() {
        console.log("You Crashed!");
        this.Scoreclass.setRestart(true);
        this.label.text = `score: ${this.Scoreclass.getScore()}`
    }
}