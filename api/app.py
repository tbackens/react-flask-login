from flask import Flask
from flask_sqlalchemy import SQLAlchemy



app = Flask(__name__)


app.config['SECRET_KEY'] = 'my_secret_key'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['JWT_SECRET_KEY'] = 'my_secret_key'

db = SQLAlchemy(app)