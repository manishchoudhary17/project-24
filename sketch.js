const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground;
var paperObject;
var line1;
var line2;
var line3;


function preload()
{
	
}

function setup(){
	createCanvas(800,400);

	line1 = createSprite(700,376,150,10)
	line1.shapeColor = "white"
	console.log(line1);

	line2 = createSprite(620,331,10,100)
	line2.shapeColor = "white"
	console.log(line2);

	line3 = createSprite(780,331,10,100)
	line3.shapeColor = "white"
	console.log(line3);

	engine = Engine.create();
	world = engine.world;
  
	var ground_options = {
	  isStatic: true
	}
  
	ground = Bodies.rectangle(400,390,800,20,ground_options);
	World.add(world, ground);
  
	console.log(ground);

  
	var ball_option = {
	  restitution: 1.0
	}
	
	ball = Bodies.circle(200,200,35,ball_option);
	World.add(world, ball);


	
  
  }
  
  function draw(){
	background(0);

	keyPressed;
	
	Engine.update(engine);
   
	rectMode(CENTER);
	fill(255,255,0);
	rect(ground.position.x, ground.position.y, 800, 20);
  
	ellipseMode(RADIUS);
	fill(204,0,170);
	ellipse(ball.position.x,ball.position.y, 20,20);
	
	drawSprites();

  }
  
function keyPressed(){

	if (keyCode === UP_ARROW){

		Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
		

	}



}






