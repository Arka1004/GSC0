var car,wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);

  car = createSprite(50,200,50,50);
  wall = createSprite(1500,200,40,height/2);

 
}

function draw() {
  background("white"); 

  speed= random(55,90)
  weight= random(400,1500)

 car.velocityX= speed;

if(wall.x - car.x < (car.width + wall.width)/2){
  car.velocityX=0;
  
  var deformation= 0.5 * weight * speed * speed/22500;

}

text("Deformation "+ deformation, 1300,50);

if(deformation > 180){
  car.shapeColor=color("red");

}else if(deformation < 180 && deformation > 100){
  car.shapeColor=color("yellow");

}else if(deformation < 100){
  car.shapeColor=color("green");

}



drawSprites();

}