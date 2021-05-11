var fighter , fighterImage;
var virus1 , virus1Image , virus2 , virus2Image;
var enemy1 , enemy1Image;
var enemy2 , enemy2Image;
var enemy3 , enemy3Image;
var enemy4 , enemy4Image;
var gemm , gemImage;
var bg , bgImage;

function preload(){
  fighterImage = loadImage("ASSETS/fighter.png");
  enemy1Image = loadImage("ASSETS/enemy.png");
  enemy2Image = loadImage("ASSETS/v1.png");
  enemy3Image = loadImage("ASSETS/v2.png");
  enemy4Image = loadImage("ASSETS/CORONAVIRUS.png");
  virus1Image = loadImage("ASSETS/v1.png");
  virus2Image = loadImage("ASSETS/v2.png");
  gemImage = loadImage("ASSETS/gemm.png");
  bgImage = loadImage("ASSETS/bg.gif");
}

function setup() {
createCanvas(1252,516);


fighter = createSprite(40,190,13,13);
fighter.addImage(fighterImage);
fighter.scale = 0.1;

var enemy1 = createSprite(200,130,10,10)
enemy1.addImage(enemy1Image);
enemy1.scale = 0.1;



var enemy2 = createSprite(215,130,10,10)
enemy2.addImage(enemy2Image);
enemy2.scale = 0.1;


var enemy3 = createSprite(165,250,10,10)
enemy3.addImage(enemy3Image);
enemy3.scale = 0.1;

var enemy4 = createSprite(270,250,10,10)
enemy4.addImage(enemy4Image);
enemy4.scale = 0.1;



  enemy1.velocityY = 8;
  enemy2.velocityY = 8;
  enemy3.velocityY = -8;
  enemy4.velocityY = -8;

}



function draw() {
  background(bgImage);


  if(keyDown("LEFT_ARROW")){
    fighter.x = fighter.x - 2;
  }

 if(keyDown("right")){
    fighter.x = fighter.x + 2;
  }

  if(fighter.isTouching(enemy1)||fighter.isTouching(enemy2)||fighter.isTouching(enemy3)||fighter.isTouching(enemy4)){
    fighter.x = 40;
    fighter.y = 190;
  }
  drawSprites();
}