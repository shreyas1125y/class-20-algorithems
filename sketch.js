var fixedRect;
var movingRect;


function setup() {
  createCanvas(800,400);
 fixedRect =  createSprite(200, 200, 50, 80);
 movingRect=createSprite(400, 200, 80, 50);
 fixedRect.shapeColor="green";
movingRect.shapeColor="green";
}

function draw() {
  background(255,255,255);  
  console.log(movingRect.x-fixedRect.x);
 movingRect.x=World.mouseX;
 movingRect.y=World.mouseY;
 if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2&&fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.width/2&&fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.width/2&&movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2){
   movingRect.shapeColor="red";
   fixedRect.shapeColor="red";
 }
 else{
   movingRect.shapeColor="green";
   fixedRect.shapeColor="green";
 }
  drawSprites();
}