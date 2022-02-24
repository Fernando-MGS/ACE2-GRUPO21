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
  //etCO2();
  //getTemp();
  getLight();
 }

//obtener Humedad y temperatura
void getTempAndHumid(){
  
humedadDHT = sensorDHT.readHumidity();
temperaturaDHT = sensorDHT.readTemperature();

  if(isnan(humedadDHT)||isnan(temperaturaDHT)){
    Serial.println("ERROR AL OBTENER LOS DATOS");
    return;
    }
  //indice de calor
  float hic = sensorDHT.computeHeatIndex(temperaturaDHT,humedadDHT,false);
  //
  Serial.print ("Humedad: ");
  Serial.print(humedadDHT);
  Serial.print(" %\t");
  Serial.print("Temperatura: ");
  Serial.print(temperaturaDHT);
  Serial.print(" °C ");
  Serial.print("Indice de Calor: ");
  Serial.print(hic);
  Serial.println(" ");
  delay(3000);
  }
  //////////////
 
//metodo para calcular el CO2 calidad del aire 
void getCO2() 
{
  
  float ppm = gasSensor.getPPM();
  Serial.print("Calidad del aire = ");
  Serial.print(ppm);  
  Serial.println(" PPM");
  delay(3000);             
}
///
//metodo para obtener la temperatura con sensor lm35
void getTemp(){
  float temp;
  temp= analogRead(tempLM35);
  temp=temp*0.48828125;
  Serial.print ("Temperatura: ");
  Serial.print(temp);
  Serial.println("°C");
  delay(3000);
  
  }
  //metodo para obtenera la intensidad de luz en lux = lumen/m^2
  void getLight(){
    float lux = sensorLuz.readLightLevel();
    Serial.print("Intensidad de luz = ");
    Serial.print(lux);
    Serial.println("lumen/m^2");
    delay(3000);
    }
