function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 45, 210);
}

function draw() {
  circle(mouseX, mouseY, 60);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
