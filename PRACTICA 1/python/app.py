from ast import While
from pymongo import MongoClient
import datetime
import time
import serial

#Datos para la DB
mongodb_Host = 'mongodb://localhost'
dbNombre = 'Pozo'
client = MongoClient(mongodb_Host)

#Datos para conexion con arduino
puerto_serial = 'COM3'
db = client[dbNombre]
collection = db['Magnitudes']
#Activacion de la conexion arduino
arduino = serial.Serial(puerto_serial, 9600)
time.sleep(3)

while True:

   dato_leido = arduino.readline().decode('utf-8')
   aux=dato_leido.split(',')

   print(aux[0])
   print(aux[1])
   print(aux[2])
   print(aux[3])
   print(aux[4])

##Dato leido sera lo que se guardara en la db, idealmente sera un texto convertible a array con coma o punto y coma

#declaracion de la base de datos que se usa y de la coleccion
   db = client[dbNombre]
   collection = db['Magnitudes']
   collection.insert_one({'TemperaturaInterior': aux[0], 'TemperaturaExterior': aux[1], 'Luz':aux[2], 'Humedad':aux[3], 'CO2':aux[4], 'Fecha': datetime.datetime.now()})

  
