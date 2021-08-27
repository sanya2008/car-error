class Player{
    constructor(){
      this.index=null
      this.name=null
    }

    readCount(){
    var b=database.ref('playerCount')
    b.on("value",(data)=>{
        playerCount=data.val()
    })
    }

    updateCount(count){
    database.ref('/').update({
        playerCount:count
    })
    }

    update(){
     var playerindex="players/player"+this.index
     database.ref(playerindex).set({
         name:this.name
     })
    }

   /* 
   asynchronous = any function that takes time to execute
    static= any function that can be called by the class's name

    ex:-
    class abc(){
    constructor(){

    }

    bd(){

    }
    cd(){

    }
    bm(){

    }

    abc.cd()
    }
    */
   static readPlayerInfo(){
        var abc=database.ref('players')
        abc.on("value",(data)=>{
            allPlayers=data.val()
        })
    }
   
}
