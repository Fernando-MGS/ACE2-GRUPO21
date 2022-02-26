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

#Activacion de la conexion arduino
arduino = serial.Serial(puerto_serial, 9600)
time.sleep(3)
while True:
   dato_leido = arduino.readline().decode('utf-8').strip()
   print(dato_leido)


##Dato leido sera lo que se guardara en la db, idealmente sera un texto convertible a array con coma o punto y coma

#declaracion de la base de datos que se usa y de la coleccion
db = client[dbNombre]
collection = db['Magnitudes']
collection.insert_one({'TemperaturaInterior': 20, 'TemperaturaExterior': 17, 'Luz':110, 'Humedad':40.7, 'CO2':18, 'Fecha': datetime.datetime.now()})
