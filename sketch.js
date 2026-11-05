function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
if (mouseX < width /2){ //primeiro if/else

//segundo if/else
if (mouseY < height /2){
  background(242, 151, 154);
  stroke(255);}
  else{
  background(139, 199, 154);
  stroke(255);
 }
}


else { //primeiro if/else

//terceiro if/else
  if (mouseY < height /2) {
  background(249, 232, 165);
  stroke(0); }
  else {
  background(138, 136, 193);
  stroke(0);
  }
}



strokeWeight(3);
// linha esquerda superior
line(mouseX, mouseY, 0, 0);

line(mouseX, mouseY, width, 0);

line(mouseX, mouseY, 0, height);

//círculo rato
circle(mouseX, mouseY, 120);



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
}