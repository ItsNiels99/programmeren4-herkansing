import { Color, Scene, Timer } from "excalibur";
import { Vector } from "excalibur"
import { background } from './background'
import { car } from './car'
import { rock } from './rock'
import { Label, FontUnit, Font } from "excalibur";
import { health } from "./health";


export class endlessLevel extends Scene {

    timeAlive
    score
    Scoreclass
    rock = []
    car
    timer
    health

    constructor(Scoreclass) {
        super({})
        this.Scoreclass = Scoreclass
    }

    onInitialize() {

        //set timer to 0 at start of scene
        this.timeAlive = 0;

        this.timer = new Timer(
            {
                //timer add 1000 miliseconds
                fcn: () => this.timeAlive++,
                repeats: true,
                interval: 500,
            })
        this.add(this.timer)
        
        //start the timer
        this.timer.start()

        this.score = new Label({
            text: `Score: ${this.timeAlive}`,
            pos: new Vector(300, 50),
            font: new Font({
                family: 'arial',
                size: 24,
                unit: FontUnit.Px,
                color: Color.Red
            })
        })
        this.add(this.score)
        const backg = new background()
        this.add(backg)
        this.health = new health()
        this.add(this.health)
    }

    onActivate() {

        if (this.Scoreclass.getRestart()) {
            this.car.kill()
            this.rock[0].kill()
            this.rock[1].kill()
            this.rock[2].kill()
            this.timeAlive = 0
            this.Scoreclass.setScore(0)
            this.Scoreclass.setRestart(false)
        }
        this.car = new car()
        this.rock[0] = new rock()
        this.rock[1] = new rock()
        this.rock[2] = new rock()

        // multiple instances of the same class
        this.add(this.car)
        this.add(this.rock[0])
        this.add(this.rock[1])
        this.add(this.rock[2])
    }

    onPreUpdate() {
        this.Scoreclass.setScore(this.timeAlive)
        this.updateScore()
    }

    updateScore() {
        // this.score++
        this.score.text = `Score: ${this.timeAlive}`
    }
}