const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1,ground2;
var block1,block2,block3,block4,block5,block6,block7,block8,block9;
var polygon;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(500,370,200,20);
    
    block1=new Box(430,235,30,40,PI/-7);
    block2=new Box(460,235,30,40,PI/-7);
    block3=new Box(490,235,30,40,PI/-7);
    block4=new Box(520,235,30,40,PI/-7);
    block5=new Box(550,235,30,40,PI/-7);
    
    block6=new Box(460,195,30,40,PI/-7);
    block7=new Box(490,195,30,40,PI/-12);
    block8=new Box(520,195,30,40,PI/-7);

    block9=new Box(490,155,30,40,PI/-7);

    ground2=new Ground(700,200,200,20);

    polygon= createSprite(200,100,20,20);
    World.add(world,polygon);
}
function draw(){
    background(0);
    Engine.update(engine);
   ground1.display();
   ground2.display();
   block1.display();
   block2.display();
   block3.display();
   block4.display();
   block5.display();
   block6.display();
   block7.display();
   block8.display();
   block9.display();
   polygon.display();
}