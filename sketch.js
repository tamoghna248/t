
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1;
var ground1;
var dustbin1,dustbin2,dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(800,385);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	paper1=new Paper(20,360,20,20);
	ground1=new Ground(width/2,380,width,10);
	dustbin1=new Dustbin(690,370,150,10);
	dustbin2=new Dustbin(755,370,10,100);
	dustbin3=new Dustbin(660,370,10,100);

	


  
}


function draw() {
 // rectMode(CENTER);
  background("red");
  Engine.update(engine);
  paper1.display();
  ground1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  //keyPresssed();
  
 // drawSprites();
 
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:25,y:-20});
	
	}

}



