from sqlalchemy import Column, String, Integer
from database  import Base

class City(Base):
    __tablename__ = "cities"

    id         = Column(Integer, autoincrement=True, primary_key=True, index=True)
    name       = Column(String, unique=True)
    population = Column(String)