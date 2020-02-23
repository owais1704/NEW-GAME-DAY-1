var hero,ground;



function setup() {
  createCanvas(1200,400);
 hero = createSprite(50, 350, 20, 50);
 ground = createSprite(600, 390, 1200 , 10);
}

function draw() {
  background("black");  
  drawSprites();
}