class robot{

  constructor(robotX=x, robotY=y, speed, hitsize,SS)
  {
    
    this.robotX = robotX;
    this.robotY = robotY;
    this.speed = speed;
    this.hitsize = hitsize;
    this.hit = this.hitsize/2;
    this.scaleX = 1;
    this.SS = SS;
    

  }

  
  show1(){
    push();
    scale(0.5);
    scale(this.SS);
    fill(188,158,130);
    beginShape();//bagage
    
    vertex(90,-10)
    vertex(-50,-5)
    vertex(-50,80)
    vertex(90,75)
    vertex(90,-10)
    vertex(70,-30)
    vertex(-70,-25)
    vertex(-70,60)
    vertex(-50,80)
    endShape();
    line(-50,-5,-70,-25)
    
    fill(92, 64, 51)
    beginShape();
    
    vertex(-60,-25)
    vertex(-40,-4)
    vertex(-40,80)
    vertex(-25,78)
    vertex(-25,-6)
    vertex(-45,-27)
    vertex(-60,-25)
   
    endShape();
    
    strokeWeight(1)
    fill(225, 219, 214);
    ellipse(73,44,26,55);//linkerarm
    fill(0);
    ellipse(69,32,25,30);
    fill(209, 209, 209);
    ellipse(69,32,21,30);
    
    beginShape();//bodyy
    vertex(-25, 0); // first point
    fill(225, 219, 214);
    bezierVertex(-50, 50, -50, 75, -25,85);
    bezierVertex(-10, 90, 5, 90,40,90);
    bezierVertex(60, 90, 110, 75,60,0);
    bezierVertex(65, 0, -25, 0, -25,0);
    endShape(); 
    
    beginShape();//kopp
    vertex(-30, 0); // first point
    bezierVertex(-45, -90, 85, -90, 70, 0);
    bezierVertex(80, 25, -45, 25, -30, 0);
    endShape();
    
    fill(209, 209, 209);
    ellipse(30,-20,65,60);//kopjesilhoutte
    fill(218,229,255);
    ellipse(30,-20,60,55);
    fill(0)
    ellipse(15,-25,20,20);//ooglinks
    fill(17,17,17)
    ellipse(15,-25,16,16);
    fill(255)
    ellipse(20,-27,4,4);
    fill(0)
    ellipse(48,-25,19,20);//oogrechts
    fill(17,17,17)
    ellipse(48,-25,15,16);
    fill(255)
    ellipse(53,-27,4,4);
    fill(0);
    ellipse(-20,-20,15,25);//oor
    fill(209, 209, 209);
    ellipse(-20,-20,13,23)
    fill(225, 219, 214);
    ellipse(-25,-20,19,30)
    fill(0);
    ellipse(10,80,30,30);//linkervoet
    fill(209, 209, 209);
    ellipse(10,80,27,30);
    fill(225, 219, 214);
    ellipse(12,80,27,40);
    fill(0);
    ellipse(63,78,30,30);//rechtervoet
    fill(209, 209, 209);
    ellipse(63,78,27,30);
    fill(225, 219, 214);
    ellipse(65,78,27,40);
    fill(0);
    ellipse(-30,32,25,30);//rechterarm
    fill(209, 209, 209);
    ellipse(-30,32,21,30);
    fill(225, 219, 214);
    ellipse(-33,45,25,55);
    strokeWeight(2)
    line(27,-60,27,-90); //attenne
    strokeWeight(1)
    fill(184, 224, 210)
    ellipse(27,-90,20,20)
  
    ellipse(60,24,5,5)
    fill(173, 216, 230)
    ellipse(52,25,5,5)
    noFill();
    noStroke();
    ellipse(20,25,this.hitsize,this.hitsize); // hitsize of the robot

    pop()
  
  
  }
  show2(){
    push();
    scale(0.5);
    scale(this.SS);
    fill(188,158,130);
    beginShape();//bagage
    
    vertex(90,-10)
    vertex(-50,-5)
    vertex(-50,80)
    vertex(90,75)
    vertex(90,-10)
    vertex(70,-30)
    vertex(-70,-25)
    vertex(-70,60)
    vertex(-50,80)
    endShape();
    line(-50,-5,-70,-25)
    
    fill(92, 64, 51)
    beginShape();
    
    vertex(-60,-25)
    vertex(-40,-4)
    vertex(-40,80)
    vertex(-25,78)
    vertex(-25,-6)
    vertex(-45,-27)
    vertex(-60,-25)
   
    endShape();
    
    strokeWeight(1)
    fill(225, 219, 214);
    ellipse(73,44,26,55);//linkerarm
    fill(0);
    ellipse(69,32,25,30);
    fill(209, 209, 209);
    ellipse(69,32,21,30);
    
    beginShape();//bodyy
    vertex(-25, 0); // first point
    fill(225, 219, 214);
    bezierVertex(-50, 50, -50, 75, -25,85);
    bezierVertex(-10, 90, 5, 90,40,90);
    bezierVertex(60, 90, 110, 75,60,0);
    bezierVertex(65, 0, -25, 0, -25,0);
    endShape(); 
    
    beginShape();//kopp
    vertex(-30, 0); // first point
    bezierVertex(-55, -130, 90, -130, 70, 0);
    bezierVertex(80, 25, -45, 25, -30, 0);
    endShape();
    
    fill(209, 209, 209);
    ellipse(30,-35,75,85);//kopjesilhoutte
    fill(218,229,255);
    ellipse(30,-35,70,80);
    fill(139, 0, 0)
    ellipse(15,-55,20,20);//ooglinks
    fill(17,17,17)
    ellipse(15,-55,16,16);
    fill(255)
    ellipse(13,-60,4,4);
    fill(139, 0, 0)
    ellipse(48,-55,19,20);//oogrechts
    fill(17,17,17)
    ellipse(48,-55,15,16);
    fill(255)
    ellipse(53,-57,4,4);
    fill(0);
    ellipse(-20,-35,15,25);//oor
    fill(209, 209, 209);
    ellipse(-20,-35,13,23)
    fill(225, 219, 214);
    ellipse(-25,-35,19,30)
    fill(0);
    ellipse(10,80,30,30);//linkervoet
    fill(209, 209, 209);
    ellipse(10,80,27,30);
    fill(225, 219, 214);
    ellipse(12,80,27,40);
    fill(0);
    ellipse(63,78,30,30);//rechtervoet
    fill(209, 209, 209);
    ellipse(63,78,27,30);
    fill(225, 219, 214);
    ellipse(65,78,27,40);
    fill(0);
    ellipse(-30,32,25,30);//rechterarm
    fill(209, 209, 209);
    ellipse(-30,32,21,30);
    fill(225, 219, 214);
    ellipse(-33,45,25,55);
    strokeWeight(2)
    line(40,-90,50,-120); //attenne
    line(14,-90,3,-120)
    strokeWeight(1)
    fill(139, 0, 0)
    ellipse(50,-120,20,20)
    ellipse(3,-120,20,20)
  
    ellipse(60,24,5,5)
    fill(139, 0, 0)
    ellipse(52,25,5,5)
    
    fill(0)
    ellipse(31.5,-20,55,45)
    fill(255,255,255)
    triangle(18,-40,27,-30, 29,-42)
    triangle(18,0,27,-7, 29,2)
    triangle(39,-42,44,-30, 48,-38)
    triangle(39,2,44,-9, 48,-1)
    noFill();
    noStroke();
    ellipse(20,25,this.hitsize,this.hitsize); // hitsize of the robot
    pop()

  }
  option1()
  {
  push();
  translate(this.robotX,this.robotY);
  scale(this.scaleX,1);
  this.show1();
  pop();
  }

option2()
{
    push()
    translate(this.robotX,this.robotY);
    scale(this.scaleX,1);
    this.show2();
    pop()
  
  }
  

moveLeft() {
 if(this.robotX > 0){
  this.robotX -= this.speed;
  this.scaleX = -1;
  }

}

moveRight() {
  if(this.robotX < width){
  this.robotX += this.speed;
  this.scaleX = 1;
}
}
moveUp() {
  if(this.robotY > 0){
  this.robotY -= this.speed;
}
}
moveDown() {
  if(this.robotY < height){
  this.robotY += this.speed;
}

}


intersects(other) {
  if (this.robotX - this.hit/2 < other.orbx + other.r/2 && this.robotX + this.hit/2 > other.orbx - other.r/2 && this.robotY - this.hit/2 < other.orby + other.r/2 && this.robotY + this.hit/2 > other.orby - other.r/2) {
    return true;
  }
  return false;
}
eats(amount) {
  this.SS += amount;
  
}
}

//move(){         // IS DUS NIET MEER NODIG WANT ANDERE VERSIE KAN WEL SCHUIN BEWEGEN
  //if (keyIsDown(LEFT_ARROW)) {
    //if(this.robotX > 0){
      //this.robotX -= this.speed;
     // this.scaleX = -1;
      //}
  //} else if (keyIsDown(RIGHT_ARROW)) {
    //if(this.robotX < width){
      //this.robotX += this.speed;
      //this.scaleX = 1;
    //}
  //} else if (keyIsDown(UP_ARROW)) {
    //if(this.robotY > 0){
      //this.robotY -= this.speed;
    //}
  //} else if (keyIsDown(DOWN_ARROW)) {
    //if(this.robotY < height){
      //this.robotY += this.speed;
  //}
//}
//}