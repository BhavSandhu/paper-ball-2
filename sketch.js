
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper
var engine,world
var box
var box2
var box3
var ground

function preload()
{
	
}

function setup() {
	createCanvas(1920, 1080);
	
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper=new Paper(150,400,40)
	box=new Box (1095,405,20,100)
	box2=new Box (1135,465,100,20)
	box3=new Box (1175,405,20,100)
	ground=new Ground(400,495,2000,30)

		
 
}

	
	

	



function draw() {
  rectMode(CENTER);
  background(10);
	paper.display()
	box.display()
	box2.display()
	box3.display()
	ground.display()

	Engine.run(engine);

}
function keyPressed() {
	if(keyCode === UP_ARROW) {

	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});

	}

}


