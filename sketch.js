function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
if (mouseX < width /2){ //primeiro if/else

//segundo if/else
if (mouseY < height /2){
  background(242, 151, 154);
   //para linhas e círculo mudarem de cor 
  stroke(255);
  fill(255);}
  else{
  background(139, 199, 154);
   //para linhas e círculo mudarem de cor 
  stroke(0);
  fill(0);
 }
}


else { //primeiro if/else

//terceiro if/else
  if (mouseY < height /2) {
  background(249, 232, 165);
  //para linhas e círculo
  stroke(0); 
  fill(0);}
  else {
  background(138, 136, 193);
   //para linhas e círculo
  stroke(255);
  fill(255);
  }
}

strokeWeight(4);

// linha superior esquerda e direita superior
line(mouseX, mouseY, 0, 0);
line(mouseX, mouseY, width, 0);

//linha inferior esquerda e inferior direita
line(mouseX, mouseY, 0, height);
line(mouseX, mouseY, width, height);

//linhas do meio verticais
line(mouseX, mouseY, width/2, 0);
line(mouseX, mouseY, width/2, height);

//linhas do meio horizontais
line(mouseX, mouseY, 0, height/2);
line(mouseX, mouseY, width, height/2);

//círculo rato
circle(mouseX, mouseY, 110);


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
}