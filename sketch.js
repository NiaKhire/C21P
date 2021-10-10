
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var w1,w2,w3,w4 ;
var ball; 

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;



	//Create the Bodies Here.
	w1 = new Rect(400,690,width ,25);
	w2 = new Rect(400,650,20,250);
	w3 = new Rect(650,650,20,250);

	var ball_opt = {
	restitution : 0.9}
	
	ball = Bodies.circle(100,200, 20 , ball_opt);
  	World.add(world,  ball);


  btn1 = createImg('right.png');
  btn1.position(30, 130);
  btn1.size(50,50);
  btn1.mouseClicked(hforce);

  
  btn2 = createImg('up.png');
  btn2.position(30, 220);
  btn2.size(50,50);
  btn2.mouseClicked(vforce);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(189);
  w1.show();
  w2.show();
  w3.show();


  ellipse(ball.position.x,ball.position.y,20);


  drawSprites();
 
}

function hforce(){
	Matter.Body.applyForce(ball, {x: 0 , y: 0} , { x:0.02, y : 0});
  }
  
  function vforce(){
	Matter.Body.applyForce(ball, {x: 0 , y: 0} , { x:0, y : -0.04});
  }



