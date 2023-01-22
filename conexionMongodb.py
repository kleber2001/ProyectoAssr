import pymongo

MONGO_USERNAME= "kgnunez"
PASSWORD= "9yrAHTDOLmFyaYmY"
MONGO_TIEMPO_FUERA= 1000
MONGO_BASEDATOS= "connection_ssh"
MONGO_COLECCION= "routes"

MONGO_URL="mongodb+srv://"+MONGO_USERNAME+":"+PASSWORD+"@cluster0.kesacsi.mongodb.net/"+MONGO_BASEDATOS+"?retryWrites=true&w=majority"


try:
    cliente=pymongo.MongoClient(MONGO_URL,serverSelectionTimeoutMS=MONGO_TIEMPO_FUERA)
    baseDatos=cliente[MONGO_BASEDATOS]
    coleccion=baseDatos[MONGO_COLECCION]
    direcciones_ip= []
    for datos in coleccion.find():
        direcciones_ip.append(datos["ip"])

    print(direcciones_ip)
    cliente.close()
except pymongo.errors.ServerSelectionTimeoutError as errortiempo:
    print("Tiempo excedido "+errortiempo)
except pymongo.errors.ConnectionFailure as errorconexion:
    print("Fallo al conectarse a Mongodb "+errorconexion)