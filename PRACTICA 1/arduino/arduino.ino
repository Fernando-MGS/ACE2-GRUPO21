#include <DHT.h>
//constantes para el sensor de humedad y temperatura
#define SENSORDHT 2
#define DHTTYPE DHT11
//
//Variables para el sensor de temperatura
DHT sensorDHT(SENSORDHT,DHTTYPE);
float humedadDHT;
float temperaturaDHT;
//
//constantes para el sensor de calidad de aire
#define inMQ135     A0                        
#define co2Zero     55 //para calibrar el sensor de CO2 nivel 0
//
void setup() {
Serial.begin(9600);

sensorDHT.begin();  //INICIANDO SENSOR DE HUMEDAD Y TEMPERATURA

pinMode(inMQ135,INPUT);  //PIN DE LECTURA DEL SENSOR DE CO2
}

void loop() {
  //getTempAndHumid();
  getCO2();
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
  
  int co2now[10];                               //array para la leer el CO2
  int co2raw = 0;                               //int para valor abs de CO2
  int co2ppm = 0;                               //int para las ppm calculado
  int zzz = 0;                                  //int para promediar 


  for (int x = 0;x<10;x++)  //samplpe co2 10x over 2 seconds
  {                   
    co2now[x]=analogRead(A0);
    delay(200);
  }

  for (int x = 0;x<10;x++)  //add samples together
  {                     
    zzz=zzz + co2now[x];  
  }
  
  co2raw = zzz/10;                            //se divide la muestra / 10
  co2ppm = co2raw - co2Zero;                 //se obtiene las ppm de CO2

  Serial.print("Calidad del aire = ");
  Serial.print(co2ppm);  // prints the value read
  Serial.println(" PPM");
  delay(3000);             
}
///
