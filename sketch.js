const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var thunder1,thunderImage1,thunder2,thunderImage2,thunder3,thunderImage3,thunder4,thunderImage4;
var thunderFrame = 0;
var r;
var drops = [];


function preload(){
thunder1 = loadImage("images/thunderbolt/1.png");
thunder2 = loadImage("images/thunderbolt/2.png");
thunder3 = loadImage("images/thunderbolt/3.png");
thunder4 = loadImage("images/thunderbolt/4.png");
}

function setup(){
createCanvas(1300,800);
engine = Engine.create();
world = engine.world;

umbrella = new Umbrella(200,680,250,250);

if(frameCount % 100 === 0){
   for(var i = 0; i < 100; i++){
   drops.push(new Drops(random(0,400),random(0,400)))
   }
}
    
}

function draw(){
background(0);
Engine.update(engine);

r = Math.round(random(1,4));
if(frameCount % 90 === 0){
  thunderFrame = frameCount
  thunder = createSprite(random(10,370),random(10,60),10,10);
  switch(r){
    case 1 : thunder.addImage(thunder1);
    break;
    case 2 : thunder.addImage(thunder2);
    break;
    case 3 : thunder.addImage(thunder3);
    break;
    case 4 : thunder.addImage(thunder4);
    break;
    default : break
  }
  thunder.scale = random(0.3,0.6);

  if(thunderFrame + 10 === frameCount && thunder){
      thunder.destroy();
  }
}
umbrella.display();
for(var i = 0;i < 100; i++){
drops[i].updateY();
drops[i].display();
}
drawSprites();
}   

