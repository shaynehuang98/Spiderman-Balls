class Scoreboard{
    constructor(){
        this.score=0
    }
    render(){
        fill (255)
        stroke (255)
        textSize(30)
        text ('score : ', textSize, textSize + 10)
        text (this.score, textSize * 4.5, textSize + 10)

    }

    update(newScore){
        this.score = newScore
    }

}



console.log(Scoreboard)