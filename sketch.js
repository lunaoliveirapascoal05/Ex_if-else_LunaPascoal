function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
if (mouseX < width /2){ //primeiro if/else

//segundo if/else
if (mouseY < height /2){
  background(242, 151, 154);}
  else{
  background(139, 199, 154);
 }
}


else { //primeiro if/else

//terceiro if/else
  if (mouseY < height /2) {
  background(249, 232, 165); }
  else {
  background(138, 136, 193);
  }
  }





strokeWeight(0);
circle(mouseX, mouseY, 120);



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
}