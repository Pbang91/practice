"""Initialize entity

Revision ID: 69898503a614
Revises: 
Create Date: 2022-07-27 13:53:33.995318

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '69898503a614'
down_revision = None
branch_labels = None
depends_on = None


def upgrade(): #해당 버전으로 upgrade 할 시 진행할 함수 지금 revision이 head일 때 실행된다.
    # op.create_table(
    #     'cities',
    #     sa.Column('id', sa.Integer, autoincrement=True, primary_key=True, index=True),
    #     sa.Column('name', sa.String(50), unique=True),
    #     sa.Column('population', sa.Integer)
    # )
    op.drop_table('cities')

def downgrade(): # 해당 버전으로 downgrade 할 시 진행할 함수 상위 revision에서 내려올 때 실행된다.
    # op.drop_table('cities')
    op.create_table(
        'cities',
        sa.Column('id', sa.Integer, autoincrement=True, primary_key=True, index=True),
        sa.Column('name', sa.String(50), unique=True),
        sa.Column('population', sa.Integer)
    )