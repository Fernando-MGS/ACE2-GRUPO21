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
   dato_leido = arduino.readline().decode('utf-8').strip()
   collection.insert_one({'TemperaturaInterior': 20, 'TemperaturaExterior': 17, 'Luz':110, 'Humedad':40.7, 'CO2':18, 'Fecha': datetime.datetime.now()})
   print(dato_leido)

