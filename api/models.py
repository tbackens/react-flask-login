from app import db
from werkzeug.security import check_password_hash, generate_password_hash
from flask_login import UserMixin



class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, unique=True, nullable=False)
    name = db.Column(db.String, unique=True, nullable=False)
    surname = db.Column(db.String, unique=True, nullable=False)
    password_hash = db.Column(db.String, nullable=False)

    def create_pw_hash(self, password):
        self.password_hash = generate_password_hash(password)

    def check_pw_hash(self, password):
        return check_password_hash(self.password_hash, password)
    
    def get_data(self):
        return {"id":self.id, 
                "username":self.username,
                "name": self.name,
                "surname" : self.surname}


    def __repr__(self):
        return '<User {}>'.format(self.username)
        
