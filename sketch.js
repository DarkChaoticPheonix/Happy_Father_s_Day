const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var world,engine;
var backgroundImg;

var snow = []
var snow1img,snow2img;

var backg;
var sweetmemories;
var model;

function preload(){

  backgroundImg = loadImage("snow3.jpg");
  fatherbg = loadImage("father1.jpg");
  fatherbg2 = loadImage("father2.webp");
  fatherbg3 = loadImage("father3.jpg");
  fatherbg4 = loadImage("collage.jpg");
  sweetmemory = loadImage("sweetmemory.jpg");
  rolemodel= loadImage("rolemodel.jpg");
  love = loadImage("loveyou.jpg");
}


function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,400);
  
  backg = createSprite(400,200,800,400);
  backg.addImage(fatherbg);
  backg.scale = 2.5;

  sweetmemories = createSprite(400,25,50,50);
  sweetmemories.addImage(sweetmemory);
  sweetmemories.scale = 0.6;
  sweetmemories.visible = false;

  model = createSprite(650,200,100,50);
  model.addImage(rolemodel);
  model.scale = 0.5;
  model.visible = false;

  if(frameCount % 50===0){
    for(var i=0; i<400; i++){
    snow.push(new Snow(random(0,800),random(0,800)))
  }
}
}
function draw() {
  background("cyan");  
  Engine.update(engine);
  
  drawSprites();
}
function keyPressed(){
//if(keyCode === 40){
  //for(var i=0; i<400; i++){
    //snow[i].showDrop()
    //snow[i].updateY()
  //}
//}
if(keyCode === 39){
  backg.addImage(fatherbg2);
  backg.scale = 1.2;
  backg.x = 400;
  sweetmemories.visible = false;
  model.visible = false;
}
if(keyCode === 37){
  backg.addImage(fatherbg3);
  backg.scale = 2.5;
  backg.x = 400;
  sweetmemories.visible = false;
  model.visible = false;
}
if(keyCode === 38){
  backg.addImage(fatherbg4);
  backg.scale = 0.1;
  backg.x = 400;
  sweetmemories.visible = true;
  model.visible = false;
}
if(keyCode === 40){
  backg.addImage(love);
  backg.scale = 0.45;
  backg.x = 250
  sweetmemories.visible = false;
  model.visible = true;
}

}