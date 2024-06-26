"""remove unique constrait from user first and last name

Revision ID: 9cb7aaefac95
Revises: 03d0aad23df5
Create Date: 2024-04-27 00:17:47.866566

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '9cb7aaefac95'
down_revision = '03d0aad23df5'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.drop_index('ix_user_firstName')
        batch_op.create_index(batch_op.f('ix_user_firstName'), ['firstName'], unique=False)
        batch_op.drop_index('ix_user_lastName')
        batch_op.create_index(batch_op.f('ix_user_lastName'), ['lastName'], unique=False)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.drop_index(batch_op.f('ix_user_lastName'))
        batch_op.create_index('ix_user_lastName', ['lastName'], unique=1)
        batch_op.drop_index(batch_op.f('ix_user_firstName'))
        batch_op.create_index('ix_user_firstName', ['firstName'], unique=1)

    # ### end Alembic commands ###
