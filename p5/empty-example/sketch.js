function setup() {
   // put setup code here
   createCanvas(3000, 3000);
}

function draw() {
  // put drawing code here
  //ellipse(90, 90, 140, 140); // centro separacion borde izquierdo y centro separacion borde superior, ancho y alto.
  
  //background(62,187,185);
  //noFill();

  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(22,66,88,33);
  }
  ellipse(mouseX, mouseY, 20, 20);
}
