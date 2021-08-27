class Form{
    constructor(){
        this.input=createInput('name')
        this.greetings=createElement('h2')
        this.button=createButton('PLAY')
    }


    hide(){
     this.input.hide()
     this.greetings.hide()
     this.button.hide()
    }


    display(){
    var title=createElement('h1')
    title.html("DASHERS")
    title.position(displayWidth/2,20)

    
    this.input.position(displayWidth/2,displayHeight/2+50)

    this.button.position(displayWidth/2,displayHeight/2+90)

   

    this.button.mousePressed(()=>{
        this.input.hide()
        this.button.hide()
        var name=this.input.value()
        playerCount=playerCount+1
        player.update()
        player.updateCount(playerCount)
       this.greetings.html("HI"+name)
        this.greetings.position(displayWidth/2,displayHeight/2)
    })

    }


}