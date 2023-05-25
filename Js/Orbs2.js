class Orb2 {
  constructor(orbx,orby,color,alive,accel) {
    this.color = color;
    this.orbx = orbx;
    this.orby = orby;
    this.r = random(10, 25);
    this.accel = accel;   
    this.size = this.r*2;
    this.speedX = random( - 2 , 2);
    this.speedY = random( - 2 , 2);
    this.alive= alive;
    

  }

  move() {
    push()
    this.orbx += this.speedX + this.accel;
    this.orby += this.speedY + this.accel;
    
    if (this.orbx + this.r >= width || this.orbx - this.r <= 0) {
      this.speedX = -this.speedX;
    }
    
    if (this.orby + this.r >= height || this.orby - this.r <= 0) {
      this.speedY = -this.speedY;
    }
    pop()
  }

  display() {
    push();
    noStroke();
    fill(this.color);
    ellipse(this.orbx, this.orby, this.size, this.size);
    pop();
  }


  Rapid(amount){
    this.accel += amount;
  }
}
