function setup() {
  createCanvas(300,400);
  background(100);
  noStroke();
  frameRate(10);
  colorMode(HSB);
}

function draw() {
  for(var x = 0; x < width; x = x+10){
    for(var y = 0; y < height; y = y+10){
      for(var z = 0; z < 300; z = z + 10) {
      fill(random(0,360),166 ,100);
      rect(x-z,y+z, tan(sqrt(y+z+x)),tan(z+x+y));
    }
    }
  }
}
