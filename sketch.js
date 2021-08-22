const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var computerBase , Playerbase;
var player , computerPlayer ;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
    computerBase = new ComputerBase(140,280,280,200)
    Playerbase = new playerBase(580,280,280,200)
    player = new Player(580,170,85,267) 
    computerPlayer = new Player(140,170,85,267)
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   computerBase.display();
   Playerbase.display();
   //display Player and computerplayer
   player.display();
   computerPlayer.display();

}
