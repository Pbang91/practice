from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from models    import City
from typing     import List

async def get_biggest_cities(session : AsyncSession) -> List[City]:
    result = await session.execute(select(City).order_by(City.population.desc()).limit(20))

    return result.scalars().all()


def add_city(session : AsyncSession, name : str, population : int):
    new_city = City(name=name, population=population)
    session.add(new_city)
    session.refresh(new_city)
    return new_city