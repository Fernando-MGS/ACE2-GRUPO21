/**
 * Create Image. 
 * 
 * The createImage() function provides a fresh buffer of pixels to play with.
 * This example creates an image gradient.
 */

PImage img;
PImage pic;
PImage back;
void setup() {
  
  size(1300, 650);
  img = createImage(115, 230, ARGB);
  for(int i = 0; i < img.pixels.length; i++) {
    float a = map(i, 0, img.pixels.length, 255, 0);
    img.pixels[i] = color(0, 153, 204, a);
  }
  pic=loadImage("term.png");
  back=loadImage("back.jpg");
}

void draw() {
  //FONDO
  background(11,16,20);
  //background(back);
  fill(228,126,42);
  textSize(95);
  text("DASHBOARD", 395,85);
  //CUADRO 1
  fill(11,16,20);
  stroke(228, 126, 42);
  strokeWeight(3);
  rect(60,120,340,200,24);
  strokeWeight(0);
   stroke(228, 126, 42,1);
  fill(11,16,20);
  rect(93,117,170,10);
  
  //CUADRO 2
  fill(11,16,20);
  stroke(228, 126, 42);
  strokeWeight(3);
  rect(485,120,340,200,24);
  //CUADRO 3
  fill(11,16,20);
  stroke(228, 126, 42);
  strokeWeight(3);
  rect(890,120,340,200,24);
  //CUADRO 4
  fill(11,16,20);
  stroke(228, 126, 42);
  strokeWeight(3);
  rect(60,385,550,250,24);
  //CUADRO 5
  fill(11,16,20);
  stroke(228, 126, 42);
  strokeWeight(3);
  rect(680,385,550,250,24);
  //fill(196,252,250);
  
  //image(pic,90,45);
  //image(pic,mouseX-pic.width/2,mouseY-pic.height/2);
  /*image(img, 90, 45);
  image(img, mouseX-img.width/2, mouseY-img.height/2);*/
}
