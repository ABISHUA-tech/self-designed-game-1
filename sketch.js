var p1,p2,asteroid1,asteroid2,asteroid3;
var blast,blastImage,spaceImage;
var spaceShip,spaceShipImage,laserImage;
var shoot = 0;
var laser,asteroidGroup,laserGroup;
var explosionSound,laserSound,explosionImage;
var instruction = 0;
var play = 1 ;
var end = 2;
var gameState = instruction;
var endLine,canvas;

function preload(){
    spaceImage = loadImage("space.png");
    spaceShipImage = loadImage("spaceship.png");
    laserImage = loadImage("laser.png");
    asteroid1 = loadImage("as1.png");
    asteroid2 = loadImage("as2.png");
    asteroid3 = loadImage("as3.png");
    blastImage = loadImage("blast.png");
    explosionImage = loadImage("blast.png");
    explosionSound = loadSound("explosion.mp3");
    laserSound = loadSound("laser sound.mp3");
    
}


function setup(){
   canvas =  createCanvas(1000,700);
   space = createSprite(250,350,30,20);
   space.addImage(spaceImage);
   space.velocityY = 5;
   
   spaceShip = createSprite(250,600);
   spaceShip.addImage(spaceShipImage);
   spaceShip.scale = 0.6;


   p1 = createSprite(250,600);
   p1.setCollider("rectangle",70,-27,5,265,156);
   p1.visible = false;
   


   p2 = createSprite(250,600);
   p2.setCollider("rectangle",70,-27,5,265,24);
   p2.visible = false;
   

}