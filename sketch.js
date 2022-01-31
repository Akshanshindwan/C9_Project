
function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30);

}

function draw() 
{

  // write the code to change background color 
  // to red when RIGHT_ARROW is pressed
  
  

  if (keyIsDown(LEFT_ARROW)) 
  {
    box.x=box.x-1
    background("blue");
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    box.y=box.y-1
    background("yellow");
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    box.y=box.y+1
    background("green");
  }
  if(keyIsDown(RIGHT_ARROW))
  {
    box.x=box.x+1
    background("red")
  }

  
  drawSprites();
}

