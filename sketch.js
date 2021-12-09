var player, playerImg;
var cop, copImg;
var track, trackImg;
var oil, oilImg;
  
function preload(){
  playerImg=loadImage("Player.png");
  copImg=loadImage("Cop.png");
  trackImg=loadImage("track (2).jpg");
  oilImg=loadImage("Oil.png");
  }
  
  
function setup() {
  createCanvas(400,600);
  track = createSprite(200,200,50,50);
  oil = createSprite(300,-100,50,50);
  oil.scale=0.30;
  player = createSprite(200,300,50,50);
  player.scale=0.45;
  cop = createSprite(200,575,50,50);
  cop.scale=0.45;
  player.addImage("Player",playerImg);
  cop.addImage("Cop",copImg);
  track.addImage("track",trackImg);
  oil.addImage("oil",oilImg);
} 
  
function draw() {
  background("white");
  track.velocityY = 5;
  if(track.y>1000){
    track.y = 230;
  }
  oil.velocityY = 5;
  
  if(keyDown("left")){
    player.x += -7;
  }
  if(keyDown("right")){
    player.x += 7;
  }
  cop.x = player.x;
  drawSprites();
} 