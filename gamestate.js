class Gamestate{
    constructor(){

    }

    readState(){
        var c=database.ref('gameState')
        c.on("value",(data)=>{
            gameState=data.val()
        })
    }

    updateState(state){
     database.ref('/').update({
         gameState:state
     })
    }

     async startState(){
      if(gameState===0){
         form=new Form()
         form.display()

         player=new Player()
          var pcr=await database.ref('playerCount').once("value")
         if(pcr.exists()){
           playerCount=pcr.val()
           player.readCount()
         }
         
      }
      car1=createSprite(100,200)
      car2=createSprite(300,200)
      car3=createSprite(500,200)
      car4=createSprite(700,200)

      cars=[car1,car2,car3,car4]
      
    }

    playState(){
     form.hide()
     Player.readPlayerInfo()
     if(allPlayers!==undefined){
     var index=0
     var x=0
     var y
     for(var plr  in allPlayers){
         index=index+1
        x=x+200
        y=displayHeight-allPlayers[plr].distance
        cars[index-1].x=x
        cars[index-1].y=y
        if(index===player.index){
            camera.position.x=displayWidth/2
            camera.position.y=cars[index-1].y
        }
     }
      
     }
     drawSprites()
    }

    endState(){
        
    }
}