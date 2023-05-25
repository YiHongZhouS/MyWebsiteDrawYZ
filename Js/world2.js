let myRobot;
let bgs;//startscherm
let bgg;//gamescherm
let bge;//eindscherm
let isPressed = false;
let Borbs = [];
let Gorbs = [];

let eatSound;
let startSound;
let endSound;
let mainSound;
let myFont;

var screen = 0;
var score = 0;
var points = 0;
var level = 1;
var index = 0;

function preload() {

  bgs = loadImage('img/start.jpg');
  bgg = loadImage('img/game.jpg');
  bge = loadImage('img/stop.jpg');
  eatSound = loadSound('sound/eat.mp3');
  startSound = loadSound('sound/introstart.mp3');
  endSound = loadSound('sound/gameover.mp3');
  mainSound = loadSound('sound/main.mp3');
  //myFont = loadFont('https://fontlibrary.org//face/asd');
}


function setup() {
  createCanvas(windowWidth, windowHeight);

 
  for (let i = 0; i < 10; i++) {
    let orbx = random(width);
    let orby = random(height);
    let color = '#311135';
    let alive = true;
    let accel = 0;
    let orb2 = new Orb2(orbx,orby,color,alive,accel);
    Borbs.push(orb2);
    
  }
  for (let j = 0; j < 10; j++) { 
    let orbx = random(width);
    let orby = random(height);
    let color = '#73a96f'
    let alive = true;
    let orb1 = new Orb(orbx,orby,color,alive);
    Gorbs.push(orb1);
  
  }

let robotX = width/2;
let robotY = height/2;
let speed = 10;
let hitsize = 140;
let SS = 1
myRobot = new robot(robotX,robotY,speed,hitsize,SS); //SS nog toevoegen! voor grow()
} 


function draw() {

if (screen == 0){
  push();
    startScreen();
  pop()
  }

else if(screen == 1){
  push();
  gameOn();
  pop();
}
else if(screen == 2){
  push();
  gameOver();
  pop();
}
//image(backgroundImg, 0, 0,windowWidth,windowHeight);// van af blijven
//hieronder robotdeel 
}

function keyPressed(){
  push();
  if(keyCode ===32){
     isPressed = !isPressed;  
     if (eatSound.isPlaying()) {
      push();
      eatSound.stop();
      eatSound.play();
      pop();
    } else {
      push();
      eatSound.play();
      pop();
    } 
  }
  pop();

  //spelstarten met ENTER
  push();
  if (keyCode === ENTER){  
  screen +=1;


  if (screen == 2){
    push();
    if (endSound.isPlaying()) {
      endSound.stop();
      endSound.play();
    } else {
      endSound.play();
    } 
    pop()
  }
  if (screen ==3 )
  {
    
    if(startSound.isPlaying())
{
  push();
  startSound.stop();
  pop();
}

    screen = 0;
    resetGame();
  }
  }
  pop();
  }

  

function startScreen(){

  image(bgs, 0, 0,windowWidth,windowHeight); 
  push()
 if (!startSound.isPlaying()) {
    startSound.play();
 }
 pop()

		fill(255);
		textAlign(CENTER);
    //textFont(myFont);
    textSize(100);
		text('GALACTIC FEAST', width / 2 , height / 2-50)
    textSize(20);
		text('PRESS ENTER TO START', width / 2, height / 2);
    textSize(30);
    text('Eat planets | Avoid Blackholes', width / 2, height / 2 + 50);

// moet bij startscreen staan!

}

function gameOn(){
  if (startSound.isPlaying()) {
    push();
    startSound.stop();
    mainSound.play();
    pop();
  }
image(bgg, 0, 0,windowWidth,windowHeight); 

levelup();
		//ScoreBoard
    textSize(25);
		fill(255)
		textAlign(LEFT)
		text("TOTAL ORBS = " + score, 50, 50)
    text("TOTAL POINTS = " + points, 50, 100)
    textAlign(RIGHT);
    text("LEVEL  " + level,width-100,50)

//myRobot.move(); optioneel, maar schuinbewegen kan hier niet

if (keyIsDown(UP_ARROW)) { // andere move optie zie class file
  myRobot.moveUp();

} 
if (keyIsDown(DOWN_ARROW)) {
  myRobot.moveDown();

}
if (keyIsDown(LEFT_ARROW)) {

  myRobot.moveLeft();
} 
if (keyIsDown(RIGHT_ARROW)) {
  myRobot.moveRight();
}

if (isPressed){
  myRobot.option2()

}
else{
  myRobot.option1();
}

//hieronder Orbsdeel

for (let j = 0; j < Gorbs.length; j++) {
  Gorbs[j].move();
  Gorbs[j].display();

  if(isPressed){
  if(myRobot.intersects(Gorbs[j])){
    push();
    if (eatSound.isPlaying()) {
      push();
      eatSound.stop();
      eatSound.play();
      pop();
    } else {
      push();
      eatSound.play();
      pop();
    } 
    
  
    pop();
    myRobot.eats(0.015);
    Gorbs.splice(j, 1);
    let newOrb = new Orb(random(width), random(height), '#73a96f',true);
    Gorbs.push(newOrb); // add new green orb
    score += 1;
    points += round(Gorbs[j].size/4);

  }

}
}

for (let i = 0; i < Borbs.length; i++) {
if (levelup()){
  Borbs[i].Rapid(100); ///LUKT NIET :( WRM???
}
else {
  accel = 0;
}
  Borbs[i].move();
  Borbs[i].display();



  if(isPressed){
  if(myRobot.intersects(Borbs[i])){

    if (endSound.isPlaying()) {
      endSound.stop();
      endSound.play();
    } else {
      endSound.play();
    } 
  Borbs.splice(i, 1);
  let newBorb = new Orb2(random(width), random(height), '#311135',true,0);
  Borbs.push(newBorb);  
  screen = 2;

}

}

}

}



 

function gameOver(){
  if (mainSound.isPlaying()) {
    push();
    mainSound.stop();
    endSound.play();
    pop();
  }
  image(bge, 0, 0,windowWidth,windowHeight);
  fill(255) 
  textAlign(CENTER);
  textSize(50);
  text('THANKS FOR FEEDING ME!', width / 2, height / 2)
  textSize(30);
  text("SCORE = " + score, width / 2, height / 2 + 50)
  text("POINTS = " + points, width / 2, height / 2 + 100)
  text('ANOTHER ROUND?', width / 2, height / 2 + 150);
  
} 

function levelup(){
if (points > index*100)
{
  index+=1;
  level+=1;

}
}

function resetGame(){
score=0;
points=0;
level=1;
index=0;
isPressed = false;
Borbs = [];
Gorbs = [];
for (let i = 0; i < 10; i++) {
  let orbx = random(width);
  let orby = random(height);
  let color = '#311135';
  let alive = true;
  let accel = 0;
  let orb2 = new Orb2(orbx, orby, color, alive,accel);
  Borbs.push(orb2);
}
for (let i = 0; i < 10; i++) {
  let orbx = random(width);
  let orby = random(height);
  let color = '#73a96f';
  let alive = true;
  let orb1 = new Orb(orbx, orby, color, alive);
  Gorbs.push(orb1);
}
let robotX = width / 2;
let robotY = height / 2;
let speed = 10;
let hitsize = 140;
let SS = 1;
myRobot = new robot(robotX, robotY, speed, hitsize, SS);

}

