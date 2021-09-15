var box

function setup() 
{
  createCanvas(400, 400);
  box=new Box(20,40,60,40,5,5);
  
}

function draw() 
{
  background(220);
  box.show()
  box.movey()
  box.bounceY()
}



