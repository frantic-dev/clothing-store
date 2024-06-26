"""add cart column to user table

Revision ID: 2750203965b4
Revises: b781a400e20f
Create Date: 2024-06-04 21:55:11.509165

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '2750203965b4'
down_revision = 'b781a400e20f'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.add_column(sa.Column('cart', sa.String(length=256), nullable=True))
        batch_op.create_index(batch_op.f('ix_user_cart'), ['cart'], unique=False)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.drop_index(batch_op.f('ix_user_cart'))
        batch_op.drop_column('cart')

    # ### end Alembic commands ###
