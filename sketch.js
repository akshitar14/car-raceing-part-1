var database;
var canvas,backgroundImg;
var gameState=0;
var playerCount;
var form;
var game;
var player;

function setup(){
    database=firebase.database();
    console.log(database);
    createCanvas(1200,500);
    game=new Game();
    game.getState();
    game.start();
    
}

function draw(){
    background("white");
     
    drawSprites();
}




