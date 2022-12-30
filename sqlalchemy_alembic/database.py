from sqlalchemy import create_engine
from sqlalchemy import text

from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker


# engine = create_engine("mysql+pymysql://root:1201@localhost:3306/test_db?charset=utf8", echo=True, future=True)

# with engine.connect() as conn:
#     result = conn.execute(text("select 'hello world'"))
#     print(result.all())

# connect 후 commit으로 db 업로드 가능
# with engine.connect() as conn:
    # conn.execute(text("CREATE TABLE some_table (x int, y int)"))

    # conn.execute(
    #     text("INSERT INTO some_table (x,y) VALUES(:x, :y)"),
    #     [{"x" : 1, "y" : 1}, {"x" : 2, "y" : 4}]
    # )
    # conn.commit()

# begin으로 바로 커밋 가능
# with engine.begin() as conn:
#     conn.execute(
#         text("INSERT INTO some_table (x,y) VALUES (:x, :y)"),
#         [{"x" : 6, "y" : 8}, {"x" : 9, "y" : 10}]
#     )

# 장고 orm과 마찬가지로 for문이나 list로 들어갈 때 실제 DB로 전달한다. 따라서 reuslt는 한번 밖에 못쓰인다. for문 여러개 돌릴려면 우선 eager loading으로 가져온 것을 돌려쓰자
# with engine.connect() as conn:
#     result = conn.execute(text("SELECT x, y FROM some_table"))
#     print(result)
    # for row in result:
    #     print(f"x: {row.x} y: {row.y}")

    # for x, y in result:
    #     print(f"x: {x} y: {y}")

    # for dict_row in result.mappings():
    #     x = dict_row['x']
    #     y = dict_row['y']

    #     print(x, y)
    
# Session class에 engine을 넣어줘도 사용할 수 있다.
# stmt = text("SELECT x, y FROM some_table WHERE y > :y ORDER BY x, y").bindparams(y=6)

# with Session(engine) as session:
#     result = session.execute(stmt)

#     for row in result:
#         print(f"{row.x} , {row.y}")

DATABASE_URL = "mysql+aiomysql://root:1111@localhost:3306/test_db?charset=utf8"

a_engine = create_async_engine(DATABASE_URL, echo=True)

Base = declarative_base()

async_session = sessionmaker(
    a_engine,
    class_=AsyncSession,
    expire_on_commit=False
)

async def get_session() -> AsyncSession:
    # async with async_session() as session:
    #     yield session

    session = async_session()

    try:
        yield session
    
    finally:
        await session.close()


async def init_models():
        async with a_engine.begin() as conn:
            await conn.run_sync(Base.metadata.drop_all)
            await conn.run_sync(Base.metadata.create_all)