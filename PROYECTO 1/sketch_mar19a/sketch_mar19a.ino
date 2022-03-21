#include <DHT.h>
#include <DHT_U.h>
#include <Wire.h>
//constantes para el sensor de humedad y temperatura
#define SENSORDHT 6 //entrada de datos
#define DHTYPE DHT11 //modelo de sensor
DHT sensorDHT(SENSORDHT,DHTYPE);
float humedadDHT;

///////
const int s0= 1;
const int s1 = 2;
const int s2 = 3;
const int s3 = 4;
const int out = 7;

int rojo =0;
int verde =0;
int azul =0;
//////

///////////////
const int Trigger =8;
const int Echo =9;

///////////////
void setup() {
Serial.begin(9600);
sensorDHT.begin();  //INICIANDO SENSOR DE HUMEDAD Y TEMPERATURA
Wire.begin();
pinMode(s0,OUTPUT);
pinMode(s1,OUTPUT);
pinMode(s2,OUTPUT);
pinMode(s3,OUTPUT);
pinMode(out,INPUT);
digitalWrite(s0,HIGH);
digitalWrite(s1,HIGH);
///////////
pinMode(Trigger, OUTPUT);
pinMode(Echo,INPUT);
digitalWrite(Trigger,LOW);
}

void loop() {
  /////////////OBTENER HUMEDAD/////////
  humedadDHT = sensorDHT.readHumidity();
  /////////////////////////////////////
  ////////////OBTENER COLOR//////////
  color();   
  int auxcol;
  if (rojo < azul && verde > azul && rojo < 35) 
  {  
  auxcol=1;   
  }   
  else if (azul < rojo && azul < verde && verde < rojo)  
  {  
   auxcol =2;        
  }  

  else if (rojo > verde && azul > verde )  
  {  
   auxcol = 3;       
  }  
  else{
  auxcol =4;  
  }
    
  ///////////////////////////////////
//////////////////OBTENER DISTANCIA///////////
long t;
long d;

digitalWrite(Trigger,HIGH);
delayMicroseconds(10);
digitalWrite(Trigger,LOW);
t = pulseIn(Echo,HIGH);
d= t/59;

//////////////
////////////fotodiodo//////////////////
///////////////////////////////////////

Serial.println(String(auxcol)+","+String(humedadDHT)+","+String(d)+","+"10");
  delay(2000);
}

void color()  
{    
  digitalWrite(s2, LOW);  
  digitalWrite(s3, LOW);   
  rojo = pulseIn(out, digitalRead(out) == HIGH ? LOW : HIGH);  
  digitalWrite(s3, HIGH);   
  azul = pulseIn(out, digitalRead(out) == HIGH ? LOW : HIGH);  
  digitalWrite(s2, HIGH);    
  verde = pulseIn(out, digitalRead(out) == HIGH ? LOW : HIGH);  
}
