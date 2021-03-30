var movingRect , fixedRect

function setup() {
  createCanvas(800,800);
  movingRect=createSprite(400,200,50,80)
  fixedRect=createSprite(200,200,80,50)
  movingRect.shapeColor="purple"
  fixedRect.shapeColor="white"
}

function draw() {
  background(0);
movingRect.x=mouseX
movingRect.y=mouseY
if(movingRect.x-fixedRect.x<(movingRect.width+fixedRect.width)/2&&
fixedRect.x-movingRect.x<(movingRect.width+fixedRect.width)/2&&
movingRect.y-fixedRect.y<(movingRect.height+fixedRect.height)/2&&
fixedRect.y-movingRect.y<(movingRect.height+fixedRect.height)/2){
movingRect.shapeColor="red"
}
else{
  movingRect.shapeColor="purple"
}
  drawSprites();
}