const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;
var ground;
var ball;
var slingshot;
var alien;

function preload() {

}

function setup(){
 createCanvas(3000,800);
 engine = Engine.create();
 world = engine.world;

 ground = new Ground(1500,700,3000,50)
 box1 = new Box(800,640,70,70)
 box2 = new Box(800,570,70,70)
 box3 = new Box(800,500,70,70)
 box4 = new Box(800,430,70,70)
 box5 = new Box(800,360,70,70)
 box6 = new Box(800,290,70,70)
 box7 = new Box(800,220,70,70)
 box8 = new Box(400,290,70,70)
 box9 = new Box(400,430,70,70)
 box10 = new Box(400,640,70,70)
 box11 = new Box(600,640,70,70)
 box12 = new Box(600,570,70,70)
 box13 = new Box(600,500,70,70)
 box14 = new Box(600,430,70,70)
 box15 = new Box(600,360,70,70)
 box16 = new Box(600,290,70,70)
 box17 = new Box(600,220,70,70)
 box18 = new Box(400,360,70,70)
 box19 = new Box(400,500,70,70)
 box20 = new Box(400,570,70,70)
 ball = new Ball(200,300,100,100)
 slingshot = new SlingShot(ball.body,{x:200,y:0})
 alien = new Alien(1000,400,100,100)
}

function draw(){
    background("gray");
    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    ball.display();
    slingshot.display();
    alien.display();
}

function mouseDragged(){
Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})

}
