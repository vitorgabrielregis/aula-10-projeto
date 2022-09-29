
var trex ,trex_running;
function preload(){
  //carrega a imagame do trex
  trex_running = loadAnimation("trex1,png","trex3,png","trex4,png");

}

function setup(){

  //criar a tela
  createCanvas(600,200)
  
  //crie um sprite do trex
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //adicione dimensão e posição ao trex
  trex.scale = 0.5;
  trex.x = 50
  
  //crie um sprite ground (solo)
  ground = createSprite(200,180,400,20);

}

function draw(){
  background("white")
  

}
