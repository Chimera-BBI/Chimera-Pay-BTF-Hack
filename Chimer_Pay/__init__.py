from flask import Flask
import os


import yaml
from yaml.loader import SafeLoader


# Open the file and load the file
with open('./keys.yml') as f:
    data = yaml.load(f, Loader=SafeLoader)
    print(data)


app                                     = Flask(__name__)

SECRET_KEY                              = os.urandom(32)
app.config['SECRET_KEY']                = SECRET_KEY




for i in data:
    app.config[i] = data[i]
    print (i, " --> " , app.config[i])

# app.config["Connection Pool"]           = pool



from Chimer_Pay import routes