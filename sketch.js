var personagem, torre;

function setup(){
 createCanvas(600,600);

 //criar os objetos do jogo
 torre = createSprite(300,20,300,1200);
 torre.shapeColor = 'black';
 personagem = createSprite(200,200,10,10);
 personagem.shapeColor = 'blue';

}

function draw(){
 background('gray');

  //movimento do personagem
  if(keyDown('space')){
   personagem.velocityY = -5;
  }

  //simula a gravidade
  personagem.velocityY = personagem.velocityY + 0.8;

  //movimento da torre
  torre.velocityY = 1;

  //torre não sair da tela
  if(torre.y > 400){
    torre.y = 400;
  }
  
  //criar obstaculos 
  gerarObstaculos();

  drawSprites();

}

//criar a função de obstaculos

function gerarObstaculos(){
  //aqui iremos adicionar os comandos para criar todos os obstaculos
  if(frameCount % 100 == 0){
    var obstaculo = createSprite(200,10);
    //vai gerar o obstaculo na posição aleatória entre 300 e 600
    obstaculo.x = Math.round(random(300, 600));
    obstaculo.y = Math.round(random(0, 800));
    
    //tempo de vida do obstaculo
    obstaculo.lifetime = 200;

  }
}
    
//climbersGroup.collide(ghost);
if(climbersGroup.isTouching(ghost)){
  ghost.velocityY = 0;
}
if(invisibleBlockGroup.isTouching(ghost) || ghost.y > 600){
  ghost.destroy();
  gameState = "end"
}
