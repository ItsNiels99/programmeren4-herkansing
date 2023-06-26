//self written Class
export class scoreClass {
    
    score
    restart = false

    getScore() {
        return this.score
    }
    getRestart() {
        return this.restart
    }
    setScore(value) {
        this.score = value
    }
    setRestart(value) {
        this.restart = value
    }

}