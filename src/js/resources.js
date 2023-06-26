import { ImageSource, Resource, Loader } from 'excalibur'
import carImage from '../images/car.png'
import backGroundImage from '../images/background.png'
import rockImage from '../images/rock.png'
import startImage from '../images/start.png'
import againImage from '../images/tryagain.png'
import heartImage from '../images/heart.png'

const Resources = {
    car: new ImageSource(carImage),
    background: new ImageSource(backGroundImage),
    rock: new ImageSource(rockImage),
    start: new ImageSource(startImage),
    retry: new ImageSource(againImage),
    heart: new ImageSource(heartImage)
}

const ResourceLoader = new Loader([Resources.car, Resources.background, Resources.rock, Resources.start, Resources.retry, Resources.heart ])

export { Resources, ResourceLoader }