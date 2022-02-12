/**
 * Create Image. 
 * 
 * The createImage() function provides a fresh buffer of pixels to play with.
 * This example creates an image gradient.
 */

PImage img;
PImage pic;
PImage back;
PImage ambiente;
PImage solar;
PImage humedad;
PImage co;
float data=0;
void setup() {
  
  size(1300, 650);
  img = createImage(115, 230, ARGB);
  for(int i = 0; i < img.pixels.length; i++) {
    float a = map(i, 0, img.pixels.length, 255, 0);
    img.pixels[i] = color(0, 153, 204, a);
  }
  pic=loadImage("humedad1.png");
  back=loadImage("interior5.png");
  ambiente=loadImage("ambiente1.png");
  solar=loadImage("sol1.png");
  humedad=loadImage("humedad1.png");
  co=loadImage("co222.png");
}

void draw() {
  //FONDO
  //background(11,16,20);
  background(#E4E5E4);
  //background(back);
  fill(#555955);
  textSize(95);
  text("DASHBOARD", 409,85);
  //CUADRO 1
  fill(#E4E5E4);
  stroke(#0F2ABD);
  strokeWeight(3);
  rect(60,120,340,200,24);
  strokeWeight(0);
  stroke(228, 126, 42,1);
  fill(#E4E5E4);
  rect(93,117,170,10);
  fill(11,16,20);
  textSize(18);
  text("Temperatura Interior",101,125);
  textSize(40);
  text(data,210,235);
  textSize(40);
  text("C",325,235);
  image(back,75,160);

  //CUADRO 2
  fill(#E4E5E4);
  stroke(#0F2ABD);
  strokeWeight(3);
  rect(485,120,340,200,24);
  strokeWeight(0);
  stroke(228, 126, 42,1);
  fill(#E4E5E4);
  rect(518,117,170,10);
  fill(11,16,20);
  textSize(18);
  text("Temperatura Exterior",526,125);
  textSize(40);
  text(data,650,235);
  textSize(40);
  text("C",765,235);
  //CUADRO 3
  fill(#E4E5E4);
  stroke(#0F2ABD);
  strokeWeight(3);
  rect(890,120,340,200,24);
  strokeWeight(0);
  stroke(228, 126, 42,1);
  fill(#E4E5E4);
  rect(923,117,245,10);
  fill(11,16,20);
  textSize(18);
  text("Cantidad de luz en el ambiente",931,125);
  textSize(40);
  text(data,1040,235);
  textSize(40);
  text("lm",1150,235);
  //CUADRO 4
  fill(#E4E5E4);
  stroke(#0F2ABD);
  strokeWeight(3);
  rect(60,385,550,250,24);
  strokeWeight(0);
  stroke(228, 126, 42,1);
  fill(#E4E5E4);
  rect(93,384,204,10);
  fill(11,16,20);
  textSize(18);
  text("Humedad en el ambiente",101,390);
  textSize(65);
  text(data,275,525);
  textSize(65);
  text("%",449,525);
  //CUADRO 5
  fill(#E4E5E4);
  stroke(#0F2ABD);
  strokeWeight(3);
  rect(680,385,550,250,24);
  strokeWeight(0);
  stroke(228, 126, 42,1);
  fill(#E4E5E4);
  rect(713,384,142,10);
  //fill(196,252,250);
  fill(11,16,20);
  textSize(18);
  text("Calidad del aire",725,390);
  textSize(65);
  text(data,885,525);
  textSize(65);
  text("%",1065,525);
  image(ambiente,500,160);
  image(solar,900,160);
  image(humedad,75,460);
  image(co,700,440);
  //image(pic,mouseX-pic.width/2,mouseY-pic.height/2);
  /*image(img, 90, 45);
  image(img, mouseX-img.width/2, mouseY-img.height/2);*/
}
