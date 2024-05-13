from flask import request
from flask_login import current_user
import sqlalchemy as sa
from app import app, db, products
from app.models import User


@app.route('/api/login', methods=['GET', 'POST'])  # type: ignore
def login():
    if request.method == 'GET':
        return {'backend': 'im working'}
    if request.method == 'POST':
        data = request.get_json()
        user = db.session.scalar(
            sa.select(User).where(User.email == data['email'])
        )
        if user is None or not user.check_password(data['password']):
            return {'loginSuccess': False, 'response': 'wrong username or password'}
        return {'loginSuccess': True, 'firstName': user.firstName, 'lastName': user.lastName}


@app.route('/api/signup', methods=['GET', 'POST'])  # type: ignore
def signup():
    if request.method == 'POST':
        data = request.get_json()
        user = db.session.scalar(
            sa.select(User).where(User.email == data['email'])
        )
        if user is None:
            # type: ignore
            new_user = User(
                firstName=data['firstName'], lastName=data['lastName'], email=data['email'])
            new_user.set_password(data['password'])
            db.session.add(new_user)
            db.session.commit()
            return {'loginSuccess': True, 'firstName': data['firstName'], 'lastName': data['lastName']}
        return {'signupSuccess': False, 'response': 'an account already exists with that email'}


@app.route('/api/products')
def getProducts():
    limit = request.args.get('limit')
    if limit:
        return products.data[:int(limit)]
    return products.data


@app.route('/api/products/<product_id>')
def getProduct(product_id):
    return next(
        (product for product in products.data if product['id'] == int(product_id)), 'yepi')
