function setup() {
    // put setup code here

    var cnv = createCanvas(windowWidth, windowHeight);
    cnv.id('mycanvas');
    cnv.background(0);
 }
 
 function draw() {

    //ellipse(90, 90, 140, 140); // centro separacion borde izquierdo y centro separacion borde superior, ancho y alto.
   
    //background(62,187,185);
    //noFill();
 
    if (mouseIsPressed) 
        fill(300);
    else 
        fill(240, 140, 1);
   
   ellipse(mouseX, mouseY, 20, 20);
 }
 