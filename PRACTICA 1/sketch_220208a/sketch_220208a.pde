SistemaParticulas sistemaParticulas;
PImage img;
PImage pic;
PImage back;
PImage ambiente;
PImage solar;
PImage humedad;
PImage co;
float data=0;
float temp1;
float temp2;
float hum;
float luz;
float pluz;
float phumedad;
float velocidad = 0;
int lastSeconds = 0;
int tiempoConsulta = 0;

void setup() {

  size(1300, 650);
  sistemaParticulas = new SistemaParticulas(new PVector(740,555));
  img = createImage(115, 230, ARGB);
  for (int i = 0; i < img.pixels.length; i++) {
    float a = map(i, 0, img.pixels.length, 255, 0);
    img.pixels[i] = color(0, 153, 204, a);
  }
  temp2=getTempExt();
  temp1=getTemp();
  luz=getLum();
  pluz=turnLum();
  hum=getHum();
  phumedad=turnHum();
  velocidad = getVelocidad();
  pic=loadImage("humedad1.png");
  back=loadImage("interior5.png");
  ambiente=loadImage("ambiente1.png");
  solar=loadImage("sol1.png");
  humedad=loadImage("humedad1.png");
  co=loadImage("co222.png");
}

void draw() {
  background(#E4E5E4);

  int currentSeconds = second();
  boolean consultar = false;

  if (currentSeconds != lastSeconds) {
    tiempoConsulta = tiempoConsulta + 1;
    if (tiempoConsulta == 5) {
      tiempoConsulta = 0;
      consultar = true;
    }
  }
  lastSeconds=currentSeconds;
  if (consultar) {
    temp1=getTemp();
    temp2=getTempExt();
    luz=getLum();
    hum=getHum();
    pluz=turnLum();
    phumedad=turnHum();
  }
  float velocidadAnimacion =  velocidad;
  if(velocidad >= 100){
    velocidadAnimacion = 0.5;
  } else if(velocidad >= 50) {
    velocidadAnimacion = 0.4;
  } else if (velocidad >= 40) {
    velocidadAnimacion = 0.3;
  } else if (velocidad >= 30) {
    velocidadAnimacion = 0.1;
  } else if (velocidad >= 20) {
    velocidadAnimacion = 0.05;
  } else if (velocidad >= 10) {
    velocidadAnimacion = 0.03;
  } else if (velocidad >= 1) {
    velocidadAnimacion = 0.01;
  } else if (velocidad >= 0) {
    velocidadAnimacion = 0;
  }
  
  
  
  //background(back);
  fill(#555955);
  textSize(95);
  text("DASHBOARD", 409, 85);
  //CUADRO 1
  fill(#E4E5E4);
  stroke(#0F2ABD);
  strokeWeight(3);
  rect(60, 120, 340, 200, 24);
  strokeWeight(0);
  stroke(228, 126, 42, 1);
  fill(#E4E5E4);
  rect(93, 117, 170, 10);
  fill(11, 16, 20);
  textSize(18);
  text("Temperatura Interior", 101, 125);
  textSize(40);
  text(temp1, 210, 235);
  textSize(40);
  text("C", 325, 235);
  fill(#EC1919);//barra roja
  rect(137, 200, 5, 70, 27);
  fill(#E4E5E4);//Barra gris
  rect(137, 200, 5, 70-temp1, 27);
  image(back, 75, 160);

  //CUADRO 2
  fill(#E4E5E4);
  stroke(#0F2ABD);
  strokeWeight(3);
  rect(485, 120, 340, 200, 24);
  strokeWeight(0);
  stroke(228, 126, 42, 1);
  fill(#E4E5E4);
  rect(518, 117, 170, 10);
  fill(11, 16, 20);
  textSize(18);
  text("Temperatura Exterior", 526, 125);
  textSize(40);
  text(temp2, 650, 235);
  textSize(40);
  text("C", 765, 235);
  fill(#EC1919);//barra roja
  rect(534, 180, 5, 93, 27);
  fill(#E4E5E4);//barra gris
  rect(534, 180, 5, 93-temp2, 27);
  image(ambiente, 500, 160);


  //CUADRO 3
  fill(#E4E5E4);
  stroke(#0F2ABD);
  strokeWeight(3);
  rect(890, 120, 340, 200, 24);
  strokeWeight(0);
  stroke(228, 126, 42, 1);
  fill(#E4E5E4);
  rect(923, 117, 245, 10);
  fill(11, 16, 20);
  textSize(18);
  text("Cantidad de luz en el ambiente", 931, 125);
  textSize(40);
  text(luz, 1040, 235);
  textSize(40);
  text("lm", 1180, 235);
  fill(#FFE42F);
  arc(965, 225, 65, 65, 0, pluz, PIE);
  image(solar, 900, 160);

  //CUADRO 4
  fill(#E4E5E4);
  stroke(#0F2ABD);
  strokeWeight(3);
  rect(60, 385, 550, 250, 24);
  strokeWeight(0);
  stroke(228, 126, 42, 1);
  fill(#E4E5E4);
  rect(93, 384, 204, 10);
  fill(11, 16, 20);
  textSize(18);
  text("Humedad en el ambiente", 101, 390);
  textSize(65);
  text(hum, 275, 525);
  textSize(65);
  text("%", 462, 525);
  fill(#009999);
  arc(137, 544, 65, 90, 0, phumedad, PIE);
  image(humedad, 75, 460);

  //CUADRO 5
  fill(#E4E5E4);
  stroke(#0F2ABD);
  strokeWeight(3);
  rect(680, 385, 550, 250, 24);
  strokeWeight(0);
  stroke(228, 126, 42, 1);
  fill(#E4E5E4);
  rect(713, 384, 142, 10);
  //fill(196,252,250);
  fill(11, 16, 20);
  textSize(18);
  text("Calidad del aire", 725, 390);
  textSize(65);
  text(data, 800, 510);
  textSize(65);
  text("ppm", 980, 510);
  
  
  sistemaParticulas.agregarParticula(temp1, velocidadAnimacion);
  sistemaParticulas.run();
  //image(pic,mouseX-pic.width/2,mouseY-pic.height/2);
  /*image(img, 90, 45);
   image(img, mouseX-img.width/2, mouseY-img.height/2);*/
}

float getTemp() {
  float temperatura=0;
  //println("---");
  try {
    String[] texto = loadStrings("http://localhost:8080/temperatura");
    //println(texto[0]);
    return Float.valueOf(texto[0]);
  }
  catch(Exception ex) {
    //println(ex);
  }
  return temperatura;
}

float getTempExt() {
  float temperatura=0;
  //println("---");
  try {
    String[] texto = loadStrings("http://localhost:8080/temperaturaExt");
    //println(texto[0]);
    return Float.valueOf(texto[0]);
  }
  catch(Exception ex) {
    //println(ex);
  }
  return temperatura;
}

float getVelocidad() {
  float velocidad = 0;
  
  try {
    String[] texto = loadStrings("http://localhost:8080/velocidad");
  
    return Float.valueOf(texto[0]);
    
  } catch(Exception ex) {
    //println(ex);
  }
  
  return velocidad;
}

float getLum() {
  float lum=0;
  //println("---luz");
  try {
    String[] texto = loadStrings("http://localhost:8080/luz");
    //println("Lum:"+texto[0]);
    lum=Float.valueOf(texto[0]);
    return lum;
  }
  catch(Exception ex) {
    //println(ex);
  }
  return lum;
}

float getHum() {
  float hum=0;
  //println("---luz");
  try {
    String[] texto = loadStrings("http://localhost:8080/humedad");
    //println("Lum:"+texto[0]);
    hum=Float.valueOf(texto[0]);
    return hum;
  }
  catch(Exception ex) {
    //println(ex);
  }
  return hum;
}

float turnLum(){
  float ret=0;
  if(luz<23000){
    ret=(luz/23000)*(PI+PI);
  }else{
    ret=PI+PI;
  }
  
  /*if(luz<=100){
    println(100);
     // ret=  luz*(90/100)*(3.14159/180);
    }else if (luz<=200){
      //ret=  luz*(180/200)*(3.14159/180);
      ret=HALF_PI;
      println(200);
    }else if(luz <=300){
      //ret=  luz*(270/300)*(3.14159/180);
      println(300);
      ret=PI;
    }else if(luz<400){
      println(400);
      ret=PI+HALF_PI;
      //ret=  luz*(360/400)*(3.14159/180);
    }else{
      println(500);
      ret=PI+PI;
    }*/
   // println(luz+"%="+ret);
  return ret;
}
float turnHum(){
  float ret=0;
  /*if(hum<=25){
    println(100);
    ret=(hum/100)*(PI+PI);
     // ret=  luz*(90/100)*(3.14159/180);
    }else if (hum<=50){
      //ret=  luz*(180/200)*(3.14159/180);
      ret=(hum/100)*PI;
      println(200);
    }else if(hum <=75){
      //ret=  luz*(270/300)*(3.14159/180);
      println(300);
      ret=(hum/100)*(PI+HALF_PI);
    }else if(hum<100){
      println(400);
      ret=(hum/100)*(PI+PI);
      //ret=  luz*(360/400)*(3.14159/180);
    }else{
      println(500);
      ret=PI+PI;
    }*/
    ret=(hum/100)*(PI+PI);
    //println(hum+"%="+ret);
  return ret;
}
