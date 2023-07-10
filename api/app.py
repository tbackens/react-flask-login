from flask import Flask,redirect,url_for,render_template,request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import create_access_token

from models import User



app = Flask(__name__)

app.config['SECRET_KEY'] = 'my_secret_key'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'

db = SQLAlchemy(app)



@app.route('/token',methods=['POST'])
def get_auth_token():
    email = request.json.get("email")
    password = request.json.get("password")
    user = db.session.query(User).filter_by(email=email).first
    print (user.__dict__)

    if user.email != email or user.check_pw_hash() == False:
        return jsonify({"msg": "bad email or password"}), 401
    
    access_token = create_access_token(identity={user.email})
    return jsonify(access_token)




@app.route('/',methods=['GET','POST'])
def home():
    if request.method=='POST':
        # Handle POST Request here
        return render_template('index.html')
    return render_template('index.html')

if __name__ == '__main__':
    #DEBUG is SET to TRUE. CHANGE FOR PROD
    db.create_all()
    app.run(port=5000,debug=True)