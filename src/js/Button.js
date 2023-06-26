import { ScreenElement } from 'excalibur'
import { Resources } from './resources'
import { Vector } from 'excalibur'

export class Button extends ScreenElement {

    IdleSprite
    HoverSprite
    Scale
    Pos
    SceneName
    //not actively visible in scene
    constructor(idleSprite, hoverSprite, scale, pos, sceneName) {
        super({
            width: idleSprite.width,
            height: idleSprite.height
        })
        this.IdleSprite = idleSprite
        this.HoverSprite = hoverSprite
        this.Scale = scale
        this.Pos = pos
        this.SceneName = sceneName
    }

    onInitialize(Engine) {
        this.graphics.add('idle', this.IdleSprite.toSprite())
        this.graphics.add('hover', this.HoverSprite.toSprite())
        this.graphics.show('idle')
        this.scale = this.Scale
        this.pos = this.Pos

        this.graphics.use('idle')
        this.on('pointerup', () => {
            Engine.goToScene(this.SceneName)
        })

        this.on('pointerenter', () => {
            this.graphics.use('hover')
        })

        this.on('pointerleave', () => {
            this.graphics.use('idle')
        })
    }

}