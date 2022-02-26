#include "MQ135.h" //libreria para MQ13
#include <Wire.h> 
#include <BH1750.h>//Libreria para sensor de luz
#include <DHT.h>//libreria para sensor de temperatura y humedad

//constantes para el sensor de humedad y temperatura
#define SENSORDHT 2 //entrada de datos
#define DHTTYPE DHT11 //modelo de sensor
//
//Variables para el sensor de temperatura y humedad
DHT sensorDHT(SENSORDHT,DHTTYPE);
float humedadDHT;
float temperaturaDHT;
//
//read-only para el sensor de temperatura
const int tempLM35 = A1;


//constantes para el sensor de calidad de aire
#define pinMQ135     A0  //entrada de datos                      
#define co2Zero     206.85 //para calibrar el sensor de CO2 nivel 0
MQ135 gasSensor = MQ135(pinMQ135);
//

//declaracion de variable para utilzar el luxometro
BH1750 sensorLuz;
//
void setup() {
Serial.begin(9600);

sensorDHT.begin();  //INICIANDO SENSOR DE HUMEDAD Y TEMPERATURA
float  rzero=gasSensor.getRZero();  //PIN DE LECTURA DEL SENSOR DE CO2
Wire.begin();
sensorLuz.begin();//INICIANDO SENSOR DE LUZ DE INTENSIDAD
}

void loop() {
  //getTempAndHumid();
  humedadDHT = sensorDHT.readHumidity();
  temperaturaDHT = sensorDHT.readTemperature();
  if(isnan(humedadDHT)||isnan(temperaturaDHT)){
  Serial.println("ERROR AL OBTENER LOS DATOS");
    return;
    }
  //indice de calor
  float hic = sensorDHT.computeHeatIndex(temperaturaDHT,humedadDHT,false);
  
  //getCO2();
   float ppm = gasSensor.getPPM();
  

  //getTemp();
  int value =analogRead(tempLM35);
  float millivolts=(value/1023.0)*5000;
  //Serial.print ("Temperatura: ");
  float tempCelsius = millivolts/10;
  
  //getLight();
   float lux = sensorLuz.readLightLevel();    
    Serial.println(String(temperaturaDHT,2)+","+String(tempCelsius,2)+","+String(lux,2)+","+String(humedadDHT,2)+","+String(ppm,2));
    delay(3000);
 }

 
