var towerImg, tower;
var obstaclesGroup;
var fantasminha, fantasminhaImg;
var sniperat, sniperatImg;
var bestafan,bestafanImg;
var inexistencia, inexistenciaImg;
var ghost, ghostImg, ghostAnimation;
var invisibleBlock3, invisibleBlock, invisibleBlock2
var gameState = "play"
var restart, restartImg
var obstaclesGroup

function preload(){
  towerImg = loadImage("tower.png");
  fantasminhaImg = loadImage("fantasminha.png");
  inexistenciaImg =  loadImage("mundial-do-palmeiras.png")
  sniperatImg =  loadImage("sniper-atomica.png");
    bestafanImg = loadImage("besta-fantasminha.png")

    restartImg = loadImage("restart.png")

    ghostAnimation = loadAnimation("ghost-standing.png", "ghost-jumping.png")
  
}

function setup() {
  createCanvas(600, 600);
  
  
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);

  ghost =  createSprite(290,500,20,20);
    ghost.addAnimation("running",ghostAnimation)
      ghost.scale = 0.4

      fantasminha = createSprite(200, -50,20,20);
        fantasminha.addImage("obstacle", fantasminhaImg);
          fantasminha.x  = Math.round(random(100,500))
            fantasminha.scale = 0.2
              fantasminha.velocityY = 4.2    
                fantasminha.velocityX = 3

       sniperat = createSprite(200, -50,20,20);
        sniperat.addImage("obstacle", sniperatImg);
         sniperat.x  = Math.round(random(100,500))
            sniperat.scale = 0.2
              sniperat.velocityY = 4.2
                sniperat.velocityX = -3
                

      bestafan = createSprite(200, -50,20,20);
        bestafan.addImage("obstacle", bestafanImg);
          bestafan.x  = Math.round(random(100,500))
            bestafan.scale = 0.2
              bestafan.velocityY = 4.2
                bestafan.velocityX = 3
               

      inexistencia = createSprite(200, -50,20,20);
        inexistencia.addImage("obstacle", inexistenciaImg);
          inexistencia.x  = Math.round(random(100,500))
            inexistencia.scale = 0.2
              inexistencia.velocityY = 4.2
                inexistencia.velocityX = -3
               
      invisibleBlock = createSprite(540,300,1,600)   
      invisibleBlock.visible = false  
        invisibleBlock2 = createSprite(60,300,1,600)   
        invisibleBlock2.visible = false
          invisibleBlock3 = createSprite(300,600,600,1)
           

            
                  
        
      restart = createSprite(300,300,20,20)
        restart.addImage("restart", restartImg)
          restart.visible = false;          
      
      
  
  
}

function draw() {
  background(200);
  
  
if (inexistencia.y === 550) {

  reset()
  
}


  if (gameState === "play") {
    
    restart.visible = false;

    if (keyDown(RIGHT_ARROW)) {

      ghost.x = ghost.x + 10;
    
   }

    if (keyDown(LEFT_ARROW)) {

      ghost.x = ghost.x - 10;
    
    }

   

    

  }

ghost.collide(invisibleBlock)
  ghost.collide(invisibleBlock2)

  if (gameState === "end") {

   
   restart.visible = true;
    
  }


  if (ghost.isTouching(inexistencia)) {

    gameState = "end";
      inexistencia.velocityY = 0
        inexistencia.velocityX = 0
    
  }

    if (ghost.isTouching(bestafan)) {

      gameState = "end";
        bestafan.velocityY = 0
          bestafan.velocityX = 0
      
    }

      if (ghost.isTouching(fantasminha)) {

        gameState = "end";
          fantasminha.velocityY = 0
            fantasminha.velocityX = 0
        
      }

      if (ghost.isTouching(sniperat)) {

        gameState = "end";
          sniperat.velocityY = 0
            sniperat.velocityX = 0
        
      }

      if (inexistencia.isTouching(invisibleBlock3) && bestafan.isTouching(invisibleBlock3) && sniperat.isTouching(invisibleBlock3) && fantasminha.isTouching(invisibleBlock3)) {
       
        reset()

      }
  
      inexistencia.bounceOff(invisibleBlock2)
        inexistencia.bounceOff(invisibleBlock)
      bestafan.bounceOff(invisibleBlock2)
        bestafan.bounceOff(invisibleBlock)
      sniperat.bounceOff(invisibleBlock2)
        sniperat.bounceOff(invisibleBlock)
      fantasminha.bounceOff(invisibleBlock2)
        fantasminha.bounceOff(invisibleBlock)  

  if(mousePressedOver(restart)) {
    reset();
    
  }

 
  //ghost.debug = true
  //ghost.setCollider()

    drawSprites()
}




function reset() {

restart.visible = false;
gameState = "play";

inexistencia.y = -50
    inexistencia.velocityY = 4.2
      inexistencia.x = Math.round(random(100,500))
        inexistencia.velocityX = -3
        
bestafan.y = -50
  bestafan.velocityY = 4.2
    bestafan.x = Math.round(random(100,500))
      bestafan.velocityX = 3

fantasminha.y = -50
  fantasminha.velocityY = 4.2
    fantasminha.x = Math.round(random(100,500))
      fantasminha.velocityX = 3

sniperat.y = -50
  sniperat.velocityY = 4.2
    sniperat.x = Math.round(random(100,500))
      sniperat.velocityX = -3

}