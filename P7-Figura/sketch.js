var size;

function setup() {
  createCanvas(300,450);
  size = random(0.4,1.2);
}
function draw() {
  var haus = 10;
  background(255);
  stebbi(100,100,3*haus,10,size);
  stebbi(200,300,2*haus,10,1)
  stebbi(250,200,1.5*haus,10,0.7);
  stebbi(100,300,2*haus,10,0.5);

}
function stebbi(x,y,haus,litur,test){
  colorMode(HSB);
  stroke(litur,80,70);
  noFill();
  strokeWeight(3);
  rectMode(CENTER);
  rect(x,y+1.5*haus,2*haus*test, 2*haus);
  ellipse(x-haus/2,y+3*haus,test*haus,haus);
  ellipse(x+haus/2,y+3*haus,test*haus,haus);
  ellipse(x-haus/2,y+4*haus,test*haus,2*haus);
  ellipse(x+haus/2,y+4*haus,test*haus,2*haus);
  ellipse(x-haus/2,y+5*haus,test*haus,2*haus);
  ellipse(x+haus/2,y+5*haus,test*haus,2*haus);
  ellipse(x,y,haus,haus);
  ellipse(x-haus/2,y+6*haus,haus,haus/2);
  ellipse(x+haus/2,y+6*haus,haus,haus/2);

  ellipse(x+haus*test+5,y+haus,test*haus,haus);
  ellipse(x-haus*test-5,y+haus,test*haus,haus);
  ellipse(x+haus*test+5,y+3*haus/2,test*haus,1.5*haus);
  ellipse(x+test*haus+5,y+5*haus/2,0.75*haus*test,1.5*haus);
  ellipse(x+1.2*haus*test,y+3.5*haus,0.5*haus,0.5*haus);
  ellipse(x-haus*test-5,y+3*haus/2,test*haus,1.5*haus);
  ellipse(x-test*haus-5,y+5*haus/2,0.75*haus*test,1.5*haus);
  ellipse(x-1.2*haus*test,y+3.5*haus,0.5*haus,0.5*haus);

}
