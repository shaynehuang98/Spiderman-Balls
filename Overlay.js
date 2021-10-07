class Overlay{
    constructor(text1,text2, startButton){
        this.text1 = text1
        this.text2 = text2
        this.startButton = startButton
        this.startButton.position(canvasWidth/3.5, canvasHeight/4)
    
    }
    render(){
        fill(255)
        textSize(50)
        stroke(0)
        text(this.text1,)
        text(this.text2,)

    }
}