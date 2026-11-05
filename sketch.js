function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
if (mouseX < width /2){ //primeiro if/else

//segundo if/else
if (mouseY < height /2){
  //rosa
  background(242, 151, 154);
   //stroke e fill para linhas e círculo mudarem de cor 
  stroke(139, 210, 154);
  fill(139, 210, 154);}

  else{
    //verde
  background(139, 210, 154);
  stroke(242, 151, 154);
  fill(242, 151, 154);
 }
}


else { //primeiro if/else

//terceiro if/else
  if (mouseY < height /2) {
    //amarelo
  background(249, 232, 165);
  //stroke e fill para linhas e círculos mudarem de cor
  stroke(138, 136, 193); 
  fill(138, 136, 193);}

  else {
    //roxo
  background(138, 136, 193);
  stroke(249, 232, 165);
  fill(249, 232, 165);
  }
}

strokeWeight(3);

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
circle(mouseX, mouseY, 125);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}