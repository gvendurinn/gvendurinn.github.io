function setup() {
  createCanvas(300,450);

}
function draw() {
  var haus = 10;
  background(255);
  stebbi(100,100,haus,10);
  stebbi(200,200,3*haus,10);


}
function stebbi(x,y, haus,litur){
  colorMode(HSB);
  stroke(litur,80,70);
  noFill();
  strokeWeight(3);
  rect(x-haus,y+haus/2,2*haus, 2*haus);
  ellipse(x-haus/2,y+3*haus,haus,haus);
  ellipse(x+haus/2,y+3*haus,haus,haus);
  ellipse(x-haus/2,y+4*haus,haus,2*haus);
  ellipse(x+haus/2,y+4*haus,haus,2*haus);
  ellipse(x-haus/2,y+5*haus,haus,2*haus);
  ellipse(x+haus/2,y+5*haus,haus,2*haus);
  ellipse(x,y,haus,haus);
  ellipse(x-haus/2,y+6*haus,haus,haus/2);
  ellipse(x+haus/2,y+6*haus,haus,haus/2);
  ellipse(x+haus,y+haus,haus,haus);
  ellipse(x-haus,y+haus,haus,haus);
  ellipse(x+haus,y+3*haus/2,haus,1.5*haus);
  ellipse(x+haus,y+5*haus/2,0.75*haus,1.5*haus);
  ellipse(x+1.2*haus,y+3.5*haus,0.5*haus,0.5*haus);
  ellipse(x-haus,y+3*haus/2,haus,1.5*haus);
  ellipse(x-haus,y+5*haus/2,0.75*haus,1.5*haus);
  ellipse(x-1.2*haus,y+3.5*haus,0.5*haus,0.5*haus);

}
