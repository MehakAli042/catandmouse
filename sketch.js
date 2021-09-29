var tom, jerry;
var tomimg, jerryimg;
var bgimg;
var tom2img, jerry2img;
var tom3img, jerry3img;



function preload() {
    tomimg = loadAnimation("images/cat1.png") 
    jerryimg  = loadAnimation("images/mouse1.png") 
    bgimg = loadImage("images/garden.png")  
    tom2img = loadAnimation("images/cat2.png", "images/cat3.png")   
    jerry2img = loadAnimation("images/mouse2.png", "images/mouse3.png") 
    tom3img = loadAnimation("images/cat4.png")
    jerry3img = loadAnimation("images/mouse4.png")
    //load the images here
}

function setup(){
    createCanvas(1000,800);
    
    tom = createSprite(850, 600)
    tom.addAnimation("tom1", tomimg)
    tom.scale = 0.2;

    jerry = createSprite(200, 600)
    jerry.addAnimation("jerry1", jerryimg)
    jerry.scale = 0.2;


    
    
    
    //create tom and jerry sprites here

}

function draw() {
    background(bgimg);

if(tom.x - jerry.x < tom.width/2 - jerry.width/2){
 tom.addAnimation("tom3", tom3img)
 tom.changeAnimation("tom3")

 jerry.addAnimation("jerry3", jerry3img)
 jerry.changeAnimation("jerry3")

 tom.velocityX = 0;
 tom.x = 300;

}

    
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){
if(keyCode === LEFT_ARROW){
    tom.velocityX = -3;
    tom.addAnimation("tom2", tom2img)
    tom.changeAnimation("tom2")

    jerry.addAnimation("JERRY2", jerry2img)
    jerry.changeAnimation("JERRY2")



}
  //For moving and changing animation write code here


}
