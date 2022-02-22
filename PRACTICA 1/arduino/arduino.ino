#include <DHT.h>
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
#define inMQ135     A0  //entrada de datos                      
#define co2Zero     55 //para calibrar el sensor de CO2 nivel 0
//
void setup() {
Serial.begin(9600);

sensorDHT.begin();  //INICIANDO SENSOR DE HUMEDAD Y TEMPERATURA

pinMode(inMQ135,INPUT);  //PIN DE LECTURA DEL SENSOR DE CO2
}

void loop() {
  //getTempAndHumid();
  //getCO2();
  getTemp();
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


  for (int x = 0;x<10;x++)  //muestra de CO2 10x durante 10s
  {                   
    co2now[x]=analogRead(A0);
    delay(200);
  }

  for (int x = 0;x<10;x++)  //agregando muestras
  {                     
    zzz=zzz + co2now[x];  
  }
  
  co2raw = zzz/10;                            //se divide la muestra / 10
  co2ppm = co2raw - co2Zero;                 //se obtiene las ppm de CO2

  Serial.print("Calidad del aire = ");
  Serial.print(co2ppm);  
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
