var bullet, wall, thickness;
var speed, weight;

function setup() {
  createCanvas(1600,400);

  
  bullet = createSprite(50, 200, 5, 20);
  bullet.shapeColor = "white";

  thickness = random(22,83);

  wall = createSprite(1200,200,thickness,height/2);
  color(80,80,80);

  speed = random(223,321);
  weight = random(30,52); 

  bullet=createSprite(50, 200, 50,5);  
    bullet.velocityX = speed;
    bullet.shapeColor=color(255);

 
}

function draw() {
  background("black");  
  
  if(Collided(bullet, wall))
  {
  	bullet.velocityX=0;
  	var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);

  	
	if(damage>10)
	{
		wall.shapeColor=color(255,0,0);
		
	}

	

	if(damage<10)
	{
		wall.shapeColor=color("blue");
	}
	
  }


  drawSprites();
 
}
  
 
 function Collided(lbullet, lwall)
 {
   bulletRightEdge=lbullet.x +lbullet.width;
   wallLeftEdge=lwall.x;
   if (bulletRightEdge>=wallLeftEdge)
   {
     return true
   }
   return false;
 }
   
   
   
 