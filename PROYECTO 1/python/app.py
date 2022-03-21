from ast import While
from pymongo import MongoClient
import datetime
import time
import serial

#Datos para la DB
mongodb_Host = 'mongodb://localhost'
dbNombre = 'Filtro'
client = MongoClient(mongodb_Host)

#Datos para conexion con arduino
puerto_serial = 'COM3'
#Activacion de la conexion arduino
arduino = serial.Serial(puerto_serial, 9600)
time.sleep(3)

db = client[dbNombre]
collection = db['Magnitudes']
collection.insert_one({'Suciedad1': 10, 'Humedad': 10, 'CantidadAgua':10, 'Suciedad2':10,  'Fecha': datetime.datetime.now()})


while True:

   dato_leido = arduino.readline().decode('utf-8')
   aux=dato_leido.split(':')
   if(aux[0] == "Magnitudes"):
      aux2=aux[1].split(',')
      print(aux2[0])
      print(aux2[1])
      print(aux2[2])
      print(aux2[3])
   ##Dato leido sera lo que se guardara en la db, idealmente sera un texto convertible a array con coma o punto y coma
   #declaracion de la base de datos que se usa y de la coleccion
      db = client[dbNombre]
      collection = db['Magnitudes']
      collection.insert_one({'Suciedad1': aux2[0], 'Humedad': aux2[1], 'CantidadAgua':aux2[2], 'Suciedad2':aux2[3],  'Fecha': datetime.datetime.now()})
   else:
      db = client[dbNombre]
      collection = db['Tiempo']
      collection.insert_one({'TiempoNecesario':aux[1]})

  
