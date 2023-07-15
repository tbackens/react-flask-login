from app import app, db
from flask import Flask,redirect,url_for,render_template,request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import create_access_token
from flask_jwt_extended import JWTManager
import json

from flask_cors import CORS






jwt = JWTManager(app)
CORS(app, allow_headers='*', origins='http://localhost:3000', methods=['POST', 'OPTIONS', 'GET'])





from models import User


@app.route('/token',methods=['POST'])
def get_auth_token():
    username = request.json.get("username", None)
    password = request.json.get("password", None)
    if username != 'testuser' or password != 'testuser':
        return {'msg': 'Invalid email or password'}, 401
    user = User.query.filter_by(username=username).first()
    state = user.get_data()
    access_token = create_access_token(identity=username)
    response = {'access_token':access_token, 'state':state}
    return (response)




@app.route('/',methods=['GET','POST'])
def home():
    if request.method=='POST':
        # Handle POST Request here
        return render_template('index.html')
    return render_template('index.html')

def create_default_user():
    default_username = 'testuser'
    default_pw = 'testuser'
    default_name  = 'Timo'
    default_surname  = 'Backens'

    query = db.session.query(User).filter_by(username=default_username).first()
    if query is None:
        default_user = User(username=default_username, name=default_name, surname=default_surname)
        default_user.create_pw_hash(default_pw)
        db.session.add(default_user)
        db.session.commit()


with app.app_context():
    db.create_all()
    create_default_user()



if __name__ == '__main__':
    #DEBUG is SET to TRUE. CHANGE FOR PROD
    app.run(port=5001,debug=True)