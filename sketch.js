var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survival_time = 0
var ground

function preload(){
  
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}

function setup() {
  createCanvas(600,600);
  
  monkey = createSprite(80,315);
  monkey.addAnimation("copnusdmxo", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4
  ground.x = ground.width/2;
  
  FoodGroup = createGroup();
  ObstacleGroup = createGroup();
}


function draw() {
   background("white")
  
   if (ground.x < 450){
      ground.x = ground.width/2;
    }
  
   if(keyDown("space") && (monkey.y > 200)) {
     monkey.velocityY = -12;
    }
 
   monkey.velocityY = monkey.velocityY + 0.8;
       
   monkey.collide(ground);
  
   Obstacles();
   food();
  
  stroke("black");
  textSize(20);
  survival_time = Math.ceil(frameCount/frameRate());
  text("Survival Time = " + survival_time,250,50);
  
  drawSprites();
  
}

function Obstacles(){
 if (frameCount % 300 === 0){
   var obstacle = createSprite(600,320);
   obstacle.addImage(obstacleImage)
   obstacle.velocityX = -5
      
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.15;
    obstacle.lifetime = 300;
   
   //add each obstacle to the group
    ObstacleGroup.add(obstacle);
 }
}

function food() {
  if (frameCount % 80 === 0) {
    var food = createSprite(600,120,40,10);
    food.y = Math.round(random(120,200));
    food.addImage(bananaImage);
    food.velocityX = -3;
    food.scale = 0.08;
    
     //assign lifetime to the variable
    food.lifetime = 200;
        
    FoodGroup.add(food);
  }
}
