import { Actor, Engine, Scene, Vector } from 'excalibur'
import { Resources, ResourceLoader } from './resources'
import { endlessLevel } from './endlessLevel'
import { startScene } from './startScene.js'
import { gameOver } from './gameOver'
import { scoreClass } from './score.js'

export class Game extends Engine {

    startscherm
    endlessLevel
    startScene
    gameOver
    scoreClass

    constructor() {
        super({ width: 800, height: 600 })
        this.start(ResourceLoader).then(() => this.startGame())
        // this.showDebug(true)
    }

    startGame() {
        this.scoreClass = new scoreClass()
        this.endlessLevel = new endlessLevel(this.scoreClass)
        this.startScene = new startScene()
        this.gameOver = new gameOver(this.scoreClass)

        this.addScene('start', this.startScene)
        this.addScene('endlessLevel', this.endlessLevel)
        this.addScene('gameOver', this.gameOver)
        this.goToScene('start')
    }
}
new Game()