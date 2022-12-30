from unicodedata import name
from fastapi import FastAPI, Depends
from sqlalchemy.exc import IntegrityError
from sqlalchemy.ext.asyncio import AsyncSession
from pydantic import BaseModel
from database import get_session, init_models
from service  import add_city, get_biggest_cities
from typing  import List

app = FastAPI()

class CitySchema(BaseModel):
    name : str
    population : int

@app.get("/cities/biggest", response_model=List[CitySchema])
async def read_biggest_cities(session : AsyncSession = Depends(get_session)):
    cities = await get_biggest_cities(session=session)

    return [CitySchema(name=c.name, population=c.population) for c in cities]

@app.post("/cities")
async def create_city(city : CitySchema, session : AsyncSession = Depends(get_session)):
    city = add_city(session=session, name=city.name, population=city.population)

    try:
        await session.commit()

        return city
    
    except IntegrityError as ex:
        await session.rollback()
        print(ex)