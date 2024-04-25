from flask import request
from flask_login import current_user
import sqlalchemy as sa
from app import app, db
from app.models import User


@app.route('/api/login', methods=['GET', 'POST'])
def test():
    if request.method == 'GET':
        return {'backend': 'im working'}
    if request.method == 'POST':
        data = request.get_json()
        user = db.session.scalar(
            sa.select(User).where(User.email == data['email'])
        )
        if user is None or not user.check_password(data['password']):
            return {'redirect': False, 'response': 'wrong username or password'}
        return {'redirect': True, 'username': user.username}

