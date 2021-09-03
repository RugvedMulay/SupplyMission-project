var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
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
	createCanvas(800,700);
	rectMode(CENTER);


	packageSprite=createSprite(width/2,80,10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2,200,10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2,height-30,width,10);
	groundSprite.shapeColor="red";

	box1 = createSprite(500,630,15,95);
	box1.shapeColor=color("green");

	box2 = createSprite(300,630,15,95);
	box2.shapeColor=color("green");

	box3 = createSprite(400,670,200,15);
	box3.shapeColor=color("green");


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2,200,5,{restitution:0.2});
	Matter.Body.setStatic(packageBody,true);
	World.add(world,packageBody);

	ground = Bodies.rectangle(width/2,650,width,10,{isStatic:true} );
	 World.add(world,ground);

	 box1 = Bodies.rectangle(width/2,650,width,10,{isStatic:true} );
	 World.add(world,box1);

	box2 = Bodies.rectangle(width/2,650,width,10,{isStatic:true} );
	 World.add(world,box2);

	box3 = Bodies.rectangle(width/2,650,width,10,{isStatic:true} );
 	World.add(world,box3);


	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background("yellow");

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  keyPressed();
}

function keyPressed() {
 if (keyCode == DOWN_ARROW) {
	 console.log("down")
	Matter.Body.setStatic(packageBody,false);
  }
	
	if (keyCode === LEFT_ARROW) {

	helicopterSprite.x=helicopterSprite.x-20;    
	translation={x:-20,y:0}
	Matter.Body.translate(packageBody, translation)

  } else if (keyCode === RIGHT_ARROW) {

	helicopterSprite.x=helicopterSprite.x+20;
	translation={x:20,y:0}
	Matter.Body.translate(packageBody, translation)
	
  }
}
