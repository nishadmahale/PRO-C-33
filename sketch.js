var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles=[];
var plinkos=[];
var turn=0;
var divisions=[];


var divisionHeight=300;
var score =0;
var points1=500;
var points2=500;
var points3=500;
var points4=500;
var points5=100;
var points6=100;
var points7=100;
var points8=200;
var points9=200;
var points10=200;
var gameState="play";



function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  
  
   


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) {
    
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) {
    
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) {
    
    
       plinkos.push(new Plinko(j,275));
  }

     for (var j = 50; j <=width-10; j=j+50){ 
    
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  
  
 text("Score: "+score,20,30);
 text(points1,670,520);
 text(points2,570,520);
 text(points3,490,520);
 text(points4,410,520);
 text(points5,325,520);
 text(points6,750,520);
 text(points7,100,520);
 text(points8,33,520);
 text(points9,267,520);
 text(points10,190,520);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }


}

function mousePressed(){
  if(gameState==="end"){


    count++;
    plinkos=new Plinko(mouseX,10,10,10);
  }
}
if(plinkos!=null){

 

if(plinkos.body.position.y>760){

if(plinkos.body.position.x<300){

  score=score+500;
  plinkos=null;

  if(count>=5) gameState="end";




}



}

if(plinkos!=null){

  plinkos.display();

if(plinkos.body.position.y>301){

if(plinkos.body.position.x<600){

  score=score+100;
  plinkos=null;

  if(count>=5) gameState="end";




}



}




}

if(plinkos!=null){

  plinkos.display();

if(plinkos.body.position.y>601){

if(plinkos.body.position.x<900){

  score=score+200;
  plinkos=null;

}




}




}




}

if(count===5){
gameState="end"
textSize(32)
stroke("red");
text(102,30,"GAME OVER");






}



