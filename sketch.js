
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1,dustbin2,dustbin3;
var ground;



function setup() {
	createCanvas(800,700);

	



	engine = Engine.create();
	world = engine.world;
	
	ground = new Ground(400,680,800,10);
dustbin1=new Dustbin(550,620,20,100)
dustbin2=new Dustbin(635,660,150,20)
dustbin3=new Dustbin(720,620,20,100)
	//Create the Bodies Here.
	paperBall = new Paper(150,600,40);


Engine.run(engine);

	
  
}


function draw() {
   background("blue");
  
   rectMode(CENTER);

  paperBall.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  Engine.update(engine);
  
  console.log(paperBall.y);
  drawSprites();
 
}

function keyPressed(){
if (keyCode === UP_ARROW){
Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:85,y:-85});
}

};
