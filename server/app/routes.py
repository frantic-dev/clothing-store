from flask import request, session
from flask_login import current_user
import sqlalchemy as sa
from app import app, db, products
from app.models import User


@app.route('/api/clear-session')
def clear_session():
    session.pop('current_user', None)
    return 'session cleared'


@app.route('/api/login', methods=['GET', 'POST'])  # type: ignore
def login():
    if request.method == 'GET':
        return {'backend': 'im working'}
    if request.method == 'POST':
        data = request.get_json()
        user = db.session.scalar(
            sa.select(User).where(User.email == data['email'])
        )
        session['current_user'] = data
        if user is None or not user.check_password(data['password']):
            return {'loginSuccess': False, 'response': 'wrong username or password'}
        return {'loginSuccess': True, 'firstName': user.firstName, 'lastName': user.lastName, 'email': user.email, 'wishlist': user.wishlist}


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
                # type: ignore
                firstName=data['firstName'], lastName=data['lastName'], email=data['email'])
            new_user.set_password(data['password'])
            db.session.add(new_user)
            db.session.commit()
            session['current_user'] = data
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


@app.route('/api/wishlist', methods=['GET', 'POST'])  # type: ignore
def wishlist():
    current_user = session.get('current_user')
    if request.method == 'POST':
        data = request.get_json()
        product_id = str(data['product_id'])
        user = db.session.scalar(
            sa.select(User).where(User.email == current_user['email'])
        )
        user.wishlist = user.wishlist + ',' +  \
            product_id if user.wishlist else product_id
        db.session.commit()
        return user.wishlist
    if request.method == 'GET' and not current_user == None:
        user = db.session.scalar(
            sa.select(User).where(User.email == current_user['email'])
        )
        return user.wishlist
