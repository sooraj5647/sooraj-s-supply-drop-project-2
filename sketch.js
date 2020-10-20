var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var block1,block2,block3;
var sprite1,sprite1,sprite3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(5, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	helicopterSprite.velocityX=5;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	sprite1=createSprite(450,650,200,20);
	sprite1.shapeColor="red";

	sprite2=createSprite(350,610,20,100);
	sprite2.shapeColor="red";

	sprite3=createSprite(550,610,20,100);
	sprite3.shapeColor="red";

	engine = Engine.create();
	world = engine.world;
    var option={
		restitution:0.5, 
		isStatic:true
	}
	packageBody = Bodies.circle(width/2 , 200 , 5,option);
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world,ground);
	 
	block1 = Bodies.rectangle(450,650,200,20,{isStatic:true} );
	World.add(world,block1);

	block2 = Bodies.rectangle(350,610,20,100,{isStatic:true});
	World.add(world,block2);

	block3 = Bodies.rectangle(550,610,20,100,{isStatic:true});
	World.add(world,block3);
	
	

	Engine.run(engine);
}
function draw() {
	background(0);
  rectMode(CENTER);
  rect(block1.position.x,block1.position.y,200,20);
  rect(block2.position.x,block2.position.y,20,100);
  rect(block3.position.x,block3.position.y,20,100);
  packageSprite.x= packageBody.position.x; 
  packageSprite.y= packageBody.position.y;
  packageSprite.x=helicopterSprite.x;
  packageSprite.collide(sprite1);
  
 if(packageSprite.collide(sprite3)){
	helicopterSprite.velocityX=0;
}
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}



