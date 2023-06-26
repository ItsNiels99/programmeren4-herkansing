import { Scene, Vector } from 'excalibur'
import { Button } from './button'
import { Resources } from './resources'

export class startScene extends Scene {

    constructor() {
        super()
    }

    onInitialize() {
        let startButton = new Button(Resources.start, Resources.start, new Vector(0.3, 0.3), new Vector(200, 200), 'endlessLevel')
        this.add(startButton)
    }
}