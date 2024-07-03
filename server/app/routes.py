from datetime import datetime, timedelta, timezone
from flask import jsonify, request
from flask_jwt_extended import create_access_token, get_jwt, get_jwt_identity, jwt_required, set_access_cookies
import sqlalchemy as sa
from app import app, db, products
from app.models import User


@app.after_request
def refresh_expiring_jwts(response):
    try:
        exp_timestamp = get_jwt()["exp"]
        now = datetime.now(timezone.utc)
        target_timestamp = datetime.timestamp(now + timedelta(minutes=30))
        if target_timestamp > exp_timestamp:
            access_token = create_access_token(identity=get_jwt_identity())
            set_access_cookies(response, access_token)
        return response
    except (RuntimeError, KeyError):
        # Case where there is not a valid JWT. Just return the original response
        return response


@app.route('/api/auth')
def csrf():
    return request.cookies


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

        response = jsonify(
            {'loginSuccess': True, 'firstName': user.firstName,
                'lastName': user.lastName, 'email': user.email}
        )

        set_access_cookies(response, access_token)
        return response, 200


@app.route('/api/rememberUser')
@jwt_required()
def rememberUser():
    user_id = get_jwt_identity()
    user = db.session.scalar(
        sa.select(User).where(User.id == user_id)
    )
    if user is None:
        return {'success': False}
    return {'success': True, 'firstName': user.firstName, 'lastName': user.lastName, 'email': user.email}


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
