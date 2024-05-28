from typing import Optional
from jinja2 import Undefined
import sqlalchemy as sa
import sqlalchemy.orm as so
from app import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from app import login


class User(UserMixin, db.Model):
    id: so.Mapped[int] = so.mapped_column(primary_key=True)
    firstName: so.Mapped[str] = so.mapped_column(
        sa.String(64), index=True)
    lastName: so.Mapped[str] = so.mapped_column(
        sa.String(64), index=True)
    email: so.Mapped[str] = so.mapped_column(
        sa.String(120), index=True, unique=True)
    password_hash: so.Mapped[Optional[str]] = so.mapped_column(sa.String(256))
    wishlist: so.Mapped[str] = so.mapped_column(
        sa.String(256), index=True, default='', nullable=True)

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        # type: ignore
        return check_password_hash(self.password_hash, password)

    def __repr__(self):
        return '<User {}>'.format(self.firstName)


@login.user_loader
def load_user(id):
    return db.session.get(User, int(id))
