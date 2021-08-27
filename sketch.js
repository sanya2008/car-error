var form
var player
var playerCount
var gameState=0
var allPlayers
var database
var game
var car1
var car2
var car3
var car4
var cars

function setup(){
   createCanvas(displayWidth,displayHeight)

   database=firebase.database()
   game=new Gamestate()
   game.readState()

   game.startState()
}



function draw(){

if(playerCount==4){
   game.updateState(1)
   
}
if(gameState===1){
   clear()
   game.playState()
}
}