// Hér kemur kóðinn þinn:
function setup(){
    createCanvas(480,480);
    background(60,0,60);
  }
    function draw() {
    if(mouseX < 200){
      fill(mouseX,mouseY,mouseX/mouseY);
    }
    else {
      fill(mouseX-mouseY,mouseX-50,mouseY-50);
    }
    ellipse(mouseX,mouseY,50,50);
  }
