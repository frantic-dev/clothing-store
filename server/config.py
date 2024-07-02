from datetime import timedelta
import os
basedir = os.path.abspath(os.path.dirname(__file__))

class Config:
  SECRET_KEY = os.environ.get('SECRET_KEY') or 'you-will-never-guess'
  SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or 'sqlite:///' + os.path.join(basedir, 'app.db')
  JWT_SECRET_KEY = 'pop-pop-it-dahyun'
  JWT_TOKEN_LOCATION = ['headers']
  JWT_ACCESS_TOKEN_EXPIRE = timedelta(hours=1)