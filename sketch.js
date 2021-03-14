const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
	
var engine, world;
var dustbinImg, paperImg;
var dustbinObj, groundObject, paperObject;	

function preload(){
  dustbinImg = loadImage("dustbingreen.png");
  //paperImg = loadImage("paper.png");
}

function setup() {
	createCanvas(1300, 700);
  engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

  paperObject = new Paper(100,520,70);
 

  groundObject = new Ground(400,550,1900,15);

  dustbinObj = createSprite(1000,400,200,20);  
  dustbinObj.addImage(dustbinImg);
  dustbinObj.scale = 0.85;

  dustbin1 = new Dustbin(1000,535,180,15);
  dustbin2 = new Dustbin(880,400,15,285);
  dustbin3 = new Dustbin(1120,400,15,285);
  }

  function draw() {
  
  rectMode(CENTER);
  imageMode(CENTER)
  background(255);
  //dustbin1.display();
  //dustbin2.display();
  //dustbin3.display();
  dustbinObj.display();
  groundObject.display();
  paperObject.display();
 }

function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:1080,y:-1080});
  }
}