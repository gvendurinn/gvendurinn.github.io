var size;
var haus = 10;
var litur;
var y;
var x;
var test;
var stebbis = [];
var i = 0;
function setup() {
  createCanvas(600,600);
  size = random(0.4,1.2);
 for(var i = 0; i < 40; i = i+1) {
  stebbis[i] = new stebbi(random(200,400),random(30,190), random(5,20), random(0,255), size);
}
}

function draw() {
 background(255);
 for(var i = 0; i < 40; i = i+1) {
 stebbis[i].show();
 stebbis[i].move();
 }
 function mousePressed(){
   for (var i = stebbi.length-1; i >= 0; i = i-1){
     if(fjarl(stebbi[i].x,stebbi[i].y,mouseX,mouseY) < 50){
 		    stebbi.splice(i,1);
 	  }
   }
 }
}
class stebbi {
constructor(x,y,haus,litur,test) {
  this.haus = haus;
  this.test = test;
  this.x = x;
  this.y = y;
  this.dir = random(0,2*PI);
  this.speed = random(0,5);
}
show() {
  colorMode(HSB);
  stroke(litur,80,70);
  noFill();
  strokeWeight(3);
  rectMode(CENTER);
  rect(this.x,this.y+1.5*this.haus,2*this.haus*this.test, 2*this.haus);
  ellipse(this.x-this.haus/2,this.y+3*this.haus,this.test*this.haus,this.haus);
  ellipse(this.x+this.haus/2,this.y+3*this.haus,this.test*this.haus,this.haus);
  ellipse(this.x-this.haus/2,this.y+4*this.haus,this.test*this.haus,2*this.haus);
  ellipse(this.x+this.haus/2,this.y+4*this.haus,this.test*this.haus,2*this.haus);
  ellipse(this.x-this.haus/2,this.y+5*this.haus,this.test*this.haus,2*this.haus);
  ellipse(this.x+this.haus/2,this.y+5*this.haus,this.test*this.haus,2*this.haus);
  ellipse(this.x,this.y,this.haus,this.haus);
  ellipse(this.x-this.haus/2,this.y+6*this.haus,this.haus,this.haus/2);
  ellipse(this.x+this.haus/2,this.y+6*this.haus,this.haus,this.haus/2);
  ellipse(this.x+this.haus*this.test+5,this.y+this.haus,this.test*this.haus,this.haus);
  ellipse(this.x-this.haus*this.test-5,this.y+this.haus,this.test*this.haus,this.haus);
  ellipse(this.x+this.haus*this.test+5,this.y+3*this.haus/2,this.test*this.haus,1.5*this.haus);
  ellipse(this.x+this.test*this.haus+5,this.y+5*this.haus/2,0.75*this.haus*this.test,1.5*this.haus);
  ellipse(this.x+1.2*this.haus*this.test,this.y+3.5*this.haus,0.5*this.haus,0.5*this.haus);
  ellipse(this.x-this.haus*this.test-5,this.y+3*this.haus/2,this.test*this.haus,1.5*this.haus);
  ellipse(this.x-this.test*this.haus-5,this.y+5*this.haus/2,0.75*this.haus*this.test,1.5*this.haus);
  ellipse(this.x-1.2*this.haus*this.test,this.y+3.5*this.haus,0.5*this.haus,0.5*this.haus);
}
move(){
  this.x = this.x + this.speed*cos(this.dir);
  this.y = this.y + this.speed*sin(this.dir);
  this.speed = this.speed/1.05;
  if(this.speed < 0.1){
    this.dir = random(0,2*PI);
    this.speed = random(1,5);
  }
    if (fjarlægð(this.x,this.y,width/2,height/2) > 250){
      this.dir = atan((this.y - height/2)/(this.x-width/2));
      if(this.x - width/2 > 0){
        this.dir = this.dir + PI;
      }
}
}
}
function fjarlægð(x1,y1,x2,y2){
var dist = sqrt((x1 - x2)*(x1 - x2) + (y1 - y2)*(y1 - y2));
return dist;
}
