"""Initialize entity

Revision ID: dd9fe4749517
Revises: 69898503a614
Create Date: 2022-07-27 15:59:00.324715

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'dd9fe4749517'
down_revision = '69898503a614'
branch_labels = None
depends_on = None


def upgrade():
    # op.create_table(
    #     'cities',
    #     sa.Column('id', sa.Integer, autoincrement=True, primary_key=True, index=True),
    #     sa.Column('name', sa.String(50), unique=True),
    #     sa.Column('population', sa.Integer)
    # )
    pass


def downgrade() -> None:
    pass
