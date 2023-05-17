
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var block1,block2,plane
var angle1 = 60;
var angle2 = 60;
var angle3 = 60;
var rotator1
var rotator2
var rotator3
var particle1
var particle2
var particle3
var particle4
var particle5	


function setup() {
	createCanvas(550, 600);
	
	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.



var block1_opitions={
	isStatic: true
}
var plane_options={
	isStatic: true
}
var block2_opitions={
	isStatic: true
}
var rotator_opitions={
	isStatic: true
}
plane = Bodies.rectangle(600,height,1200,20,plane_options)
World.add(world,plane)


	




 block1 = Bodies.rectangle(130,400,150,25,block1_opitions)
 World.add(world,block1)

 block2 = Bodies.rectangle(400,400,150,25,block2_opitions);
 World.add(world,block2) 

 rotator1 = Bodies.rectangle(250,200,150,20,rotator_opitions)
 World.add(world,rotator1);

rotator2 = Bodies.rectangle(250,200,150,20,rotator_opitions)
World.add(world,rotator2);

rotator3 = Bodies.rectangle(250,200,150,20,rotator_opitions)
World.add(world,rotator3);

var particle_opitions = {
	restitution:0.4,
	friction:0.02
}

particle1 = Bodies.circle(220,10,10,particle_opitions)
World.add(world,particle1)

particle2 = Bodies.circle(220,10,10,particle_opitions)
World.add(world,particle2)

particle3 = Bodies.circle(220,10,10,particle_opitions)
World.add(world,particle3)

particle4 = Bodies.circle(220,10,10,particle_opitions)
World.add(world,particle4)

particle5 = Bodies.circle(220,10,10,particle_opitions)
World.add(world,particle5)

rectMode(CENTER)
}




function draw() {
  
  background(0);
  Engine.update(engine)
  rect(plane.position.x,plane.position.y,1200,20)
  rect(block1.position.x,block1.position.y,150,25)
  rect(block2.position.x,block2.position.y,150,25)
  rect(rotator1.position.x,rotator1.position.y,150,20)
  rect(rotator2.position.x,rotator2.position.y,150,20)
  rect(rotator3.position.x,rotator3.position.y,150,20)
ellipse(particle1.position.x,particle1.position.y,10)
ellipse(particle2.position.x,particle2.position.y,10)
ellipse(particle3.position.x,particle3.position.y,10)
ellipse(particle4.position.x,particle4.position.y,10)
ellipse(particle5.position.x,particle5.position.y,10)




Matter.Body.rotate(rotator1,angle1)
	push()
	translate(rotator1.position.x,rotator1.position.y)
	rotate(angle1)
	rect(0,0,150,20)
	pop()
	angle1 +=5

	Matter.Body.rotate(rotator2,angle2)
	push()
	translate(rotator2.position.x,rotator2.position.y)
	rotate(angle2)
	rect(0,0,150,20)
	pop()
	angle2 +=8

	Matter.Body.rotate(rotator3,angle3)
	push()
	translate(rotator3.position.x,rotator3.position.y)
	rotate(angle3)
	rect(0,0,150,20)
	pop()
	angle3 +=12
}



