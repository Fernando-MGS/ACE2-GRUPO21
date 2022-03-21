from ast import While
from pymongo import MongoClient
import datetime
import time
import serial

#Datos para la DB
mongodb_Host = 'mongodb://localhost'
dbNombre = 'Filtro'
client = MongoClient(mongodb_Host)


db = client[dbNombre]
collection = db['Magnitudes']
collection.insert_one({'Suciedad1': 12, 'Humedad': 12, 'CantidadAgua':12, 'Suciedad2':12,  'Fecha': datetime.datetime.now()})
collection = db['Tiempo']
collection.insert_one({'TiempoNecesario':12})


