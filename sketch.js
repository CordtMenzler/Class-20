
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
let ball
let ground

function setup()
{
  createCanvas(400,400);
  engine=Engine.create()
  world=engine.world
  var groundoptions={
    isStatic:true
  }
ground=Bodies.rectangle(200,380,400,5,groundoptions)
World.add(world,ground)

var balloptions={
  restitution:1.5
}
ball=Bodies.circle(200,200,10,balloptions)
World.add(world,ball)
}

function draw() 
{
  Engine.update(engine)
  background(51);
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,5) 

  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,10,10)
}

