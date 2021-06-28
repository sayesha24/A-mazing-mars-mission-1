var rover, rover_img;
var gold, gold_img;
var rocket, rocket_img;
var alien, aliens_img;
var asteroids, asteroids_img;
var bg_img;

var score= 0;
var PLAY= 1;
var END= 0;
var gameState= PLAY;

var goldGroup;
var alienGroup;
var asteroidGroup;

var Rocketbutton;


function preload(){

 //bg_img= loadImage("Mars_img.png");
}

function setup(){

  createCanvas(1900, 1000)
  
  rover= createSprite(200, 800);

  rocket= createSprite(400, 800);
  rocket.visible= false;

  goldGroup= createGroup();
  alienGroup= createGroup();
  asteroidGroup= createGroup();


}

function draw(){

  background("lightgreen");

  
  if(gameState === PLAY){

  SpawnGold();
  SpawnAliens();
  SpawnAsteroids();


  if(keyDown("UP_ARROW")){
  
    rover.y += -3;
  }


  if(keyDown("LEFT_ARROW")){

    rover.x += -3;
    
  }

  if(keyDown("RIGHT_ARROW")){

    rover.x += 3;
    
  }

  if(keyDown("DOWN_ARROW")){

    rover.y += 3;
    
  }

  fill("black");
  textSize(23);
  text("SCORE: " + score, 100, 130);
  text("TOTAL GOLD: 10", 100, 80);

  if(score === 10){

    Rocketbutton= createButton('GO TO ROCKET');
    Rocketbutton.position(800, 400);
    
  }


  if(rover.isTouching(goldGroup)){

    score ++;
    goldGroup.destroyEach();
  }

  if(rover.isTouching(asteroidGroup)){

    text("MISSION ABORDED: THE ASTEROID HIT YOU", 500, 400);
    gameState= END;
  }

  if(score >= 3 && score <= 5){

    text("GO NEAR THE ALIENS AND PRESS SPACE TO PUT THE ALIENS TO SLEEP", 500, 400);
  }

  if(score >= 7 && score <= 9){

    text("MAKE SURE THE ASTEROIDS DON'T HIT YOU, OTHERWISE THE MISSION WILL BE ABORDED", 500, 400);

    alienGroup.destroyEach();
  }

 // if(Rocketbutton.mousePressed()){

   // rocket.visible= true;
 // }

 //if(alien.x - rover.x=== 10 && keyDown("SPACE")){

  //alienGroup.destroyEach();
  
// }
 }
else if(gameState === END){

  textSize(40);
  fill("black");
  text("GAME OVER", 700, 400);
}
  drawSprites();
}

function SpawnGold(){

  if (frameCount % 200 === 0 && score <= 10) {
    gold = createSprite(200, 800, 70,70);
    gold.x = Math.round(random(400,900));
    gold.y= Math.round(random(600,900));

    gold.lifeTime= 25;
  
  goldGroup.add(gold);
  }
}

function SpawnAliens(){

  if(frameCount% 150=== 0 && score >= 3 && score <=5){

    alien= createSprite(600, 800, 100, 100);
  //  alien.x= Math.round(random(rover.x + 20, rover.x + 100));
  alien.x= Math.round(random(600, 1500));
    alienGroup.add(alien);
  }
}

function SpawnAsteroids(){

  if(frameCount% 50=== 0 && score >= 7 && score <= 9){

    asteroids= createSprite(400, 100, 100, 100);
    asteroids.x= Math.round(random(100, 1600));

    asteroids.velocityY= 7;

    asteroidGroup.add(asteroids);
  }
}

function mousePressed(){

  rocket.visible= true;
  
}