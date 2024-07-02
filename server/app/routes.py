from flask import after_this_request, make_response, request
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required
import sqlalchemy as sa
from app import app, db, products
from app.models import User


@app.route('/api/auth/token')
def access_token():
    access_token = request.cookies.get('access_token')
    return access_token


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

        access_token = create_access_token(identity=user.id)
        response = make_response()

        @after_this_request
        def after_login(response):
            response.set_cookie(
                'access_token', value=access_token, secure=True, httponly=True, max_age=60*60*24*7, samesite='Lax')
            return response

        return {'loginSuccess': True, 'firstName': user.firstName, 'lastName': user.lastName, 'email': user.email, 'wishlist': user.wishlist, 'cart': user.cart}


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


@app.route('/api/wishlist', methods=['GET', 'POST', 'PUT'])  # type: ignore
@jwt_required()
def wishlist():
    user_id = get_jwt_identity()
    user = db.session.scalar(
        sa.select(User).where(User.id == user_id)
    )
    if request.method == 'POST':
        data = request.get_json()
        product_id = str(data['product_id'])
        user.wishlist = user.wishlist + ',' +  \
            product_id if user.wishlist else product_id
        db.session.commit()
        return user.wishlist

    elif request.method == 'GET' and not user == None:
        return user.wishlist or ''

    elif request.method == 'PUT':
        data = request.get_json()
        user.wishlist = data['updatedWishlist']
        db.session.commit()
        return data['updatedWishlist']


@app.route('/api/cart', methods=['GET', 'POST', 'PUT'])  # type: ignore
@jwt_required()
def cart():
    user_id = get_jwt_identity()
    user = db.session.scalar(
        sa.select(User).where(User.id == user_id)
    )
    if request.method == 'POST':
        data = request.get_json()
        product_id = str(data['product_id'])
        user.cart = user.cart + ',' +  \
            product_id if user.cart else product_id
        db.session.commit()
        return user.cart

    elif request.method == 'GET' and not user == None:
        return user.cart or ''

    elif request.method == 'PUT':
        data = request.get_json()
        user.cart = data['updatedCart']
        db.session.commit()
        return data['updatedCart']
