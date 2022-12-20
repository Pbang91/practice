import json
import os

from sqlalchemy import create_engine, Column, Integer, String, Text
from sqlalchemy.orm import Session, sessionmaker
from sqlalchemy.ext.declarative import declarative_base

BASE_DIR     = os.path.dirname(os.path.abspath(__file__))
SECRET_FILE  = os.path.join(BASE_DIR, 'secret.json')
DB           = json.loads(open(SECRET_FILE, encoding="utf8").read())['DB']
DATABASE_URL = f"mysql+pymysql://{DB['user']}:{DB['password']}@{DB['host']}:{DB['port']}/{DB['database']}?charset=utf8mb4"

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

def get_db():
    db = SessionLocal()

    try:
        yield db
    
    finally:
        db.close()

class Post(Base):
    __tablename__ = "posts"

    id         = Column(Integer, primary_key=True, index=True, autoincrement=True, nullable=False)
    nickname   = Column(String(20), nullable=False)
    password   = Column(String(30), nullable=False)
    title      = Column(String(100), nullable=False)
    hit        = Column(Integer, default=0)
    content    = Column(Text, nullable=False)

def get_count(db : Session):
    counts = db.query(Post).count() # return simple int

    print(counts)


db = get_db()
get_count(next(db))