
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof;
var bobobject1, bobobject2, bobobject3, bobobject4, bobobject5;
var band, band2,band3,band4,band5;
var bobDiameter;
var startBobPositionX, startBobPositionY 
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	bobDiameter = 25;
	startBobPositionX = width/1.5
	startBobPositionY = height/4+500
	//Create the Bodies Here.
	//roof = new Ground(350,200,500,75)
	bobobject1 = new Paper(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter)
	bobobject2 = new Paper(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter)
	bobobject3 = new Paper(startBobPositionX,startBobPositionY,bobDiameter)
	bobobject4 = new Paper(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter)
	bobobject5 = new Paper(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter)
	band = new Chain(bobobject1.body,{x:250,y:200})
	band1 = new Chain(bobobject2.body,{x:300,y:200})
	band2 = new Chain(bobobject3.body,{x:350,y:200})
	band3 = new Chain(bobobject4.body,{x:450,y:200})
	band4 = new Chain(bobobject5.body, {x:400,y:200})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  //roof.display()
  band.display()
  band1.display()
  band2.display()
  band3.display()
  band4.display()
  bobobject4.setStatic = true
  bobobject1.display()
  bobobject2.display()
  bobobject3.display()
  bobobject4.display()
  bobobject5.display()
  drawSprites();
 
}
	function mouseDragged(){
		
		Matter.Body.setPosition(bobobject4.body, {x: mouseX, y: mouseY})
		}


