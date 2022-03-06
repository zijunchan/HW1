let x =400;
let y =200;
let sx =5;
let sy =5;
let speed =10;

 

let score =0;
let alive = true;
let life =3;

 

function setup(){
createCanvas(800,400);

 

let theta = random(-60,60) *PI/180;

 

sx = (speed * cos(theta));
sy = (speed * sin(theta));

 

}

 


function keyPressed(){
  
  x = 400;
  y = 200;
  let theta = random(-60,60) *PI/180;

 

sx = ( speed * cos(theta));
sy = (speed* sin(theta));
alive =true;
}

 

 

function draw(){
background(255);  
fill(255,0,0);
circle(x,y,20);  
fill(0,0,255);
rect(800-40,mouseY-50, 20,100);
rect(20,y-50, 20,100);

 

x=x+sx;
y=y+sy;

 

if ( x< 40 ){
  sx= -sx;
}

 


if ( x > 780)
{
 sx=0;
 sy=0;
 
 if ( alive) {
  
   life=life -1;
   
 }
 
 alive = false;
 
}

 

if (x > 760 && y > (mouseY -50) && y < (mouseY +50))
{
 sx=-sx; 
 if ( alive)
 {
 score=score+10;
 
 }
}

 

 


if (y > 400 || y< 0 ){
  sy= -sy;
}

 

textSize(10);
text("Score:"+score+ " Life:" +life , 360, 20); 

 


if ( life <=0)
{
  textSize(50);
  fill(255,0,0);
 text("Game Over", 300, 200); 
}
  
}
