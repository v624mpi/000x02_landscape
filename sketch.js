let waver;
let posy;
let whichone = 0;

function setup() {
  createCanvas(400, 400);

  waver = new waveMaker();
  posy = height*0.25;
  makeback();

}

function draw() {
  background(220);
  posy += 0.75;
  if (posy > height*1.2) {
    waver.srubs + random(1);
   makeback();
  }
  translate(width/2,posy);
  waver.update();
 }

function makeback() {
background
noFill();
for (let i = 0; i < widht*1.5; i++) {
  let scol = map(i, 0, widht*1.5,-600,325);
  strokeWeight(1);
  //stroke(0, 200-scol, 325-scol, 255); // blue
  stroke(325-scol, 200-scol, 25 ,255); // sunset
  circle(width/2, height/2,i);
}
}

function waveMaker() {
  this.xoff = 0;
  this.yoff = 0;
  this.yend = 0;
  this.ymod = 0;
  this.dense = 0;
  this.px = 0;
  this.py = 0;
  this.size = 0;
  this.shrubs = 1;
this.update = function(){
push();
beginShape();
vertex(-width/2,map(noise(0,this.yoff),0,1,
-height*0.25,height*0.25))
this.xoff = 0;
this.dense = map(posy,0,height,15,25);
for(let x = -width/2; x < width/2; x+=this.dense){
  let xmod = map(noise(this.yoff,x),0,1,
    -this.dense, this.dense);
    let y = map(noise(this.xoff, this.yoff),0,1, -height*0.25,height*0.25);
    let sw = map(noise(this.xoff, this.yoff),0,1, 2,12);
    this.size = map(posy,0,height,2,25);

    vertex(x+xmod,y);

    stroke(0,128,0,128);
    strokeWeight(this.size);

    //make shrubs
    if(random() < this.shrubs){
      this.madrone(x+xmod,y)
    }
//left right tree
    let tree = random (this.size*0.05,
                      this.size*0.5);
    if (random() < this.shrubs*0.02){
      push();
      translate(x+xmod, random(-this.size*2,
        this.size*2),y);
        rotate(random(-PI*0.02,PI*0.02));
        if (random() < 0.5) {
          let qp = HALF_PI;
          if (random() , 0.75) {
            qp = -HALF_PI;
          }
          rotate(qp+random( -PI*0.02,PI*0.02))
        }

      pop();
    }

}
//
endShape();
pop();
}



this.madrone = function(tx, ty){
push();
translate(ty,tx);
for (let q = 0; q < 6; q++){
  this.px = random(this.size*0.5);
  rotate(random(TWO_PI));
  strokeWeight(this.size*random(0.1,0.5));
  stroke(random(0,128),
          random(50,255),0,255);
          this.py = random(-this.size*0.25,
            this.size*0.25);
          point(this.px,this.py);
}
pop();
}
}