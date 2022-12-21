import json
from typing import Optional, Union

import uvicorn

from fastapi import FastAPI, status
from fastapi.responses import JSONResponse, Response
from fastapi.middleware.cors import CORSMiddleware

from pydantic import BaseModel

app = FastAPI()

origins = [
  "*"
]

app.add_middleware(
  CORSMiddleware,
  allow_origins = ["*"],
  allow_credentials = True,
  allow_methods = ["*"],
  allow_headers = ["*"],
)

class User(BaseModel):
  name : str
  password : str

class ResponseTest(User):
    id : str
  
class Rank(BaseModel):
  name : str
  rank : int

class PostResponse(BaseModel):
  title : str
  option1 : Optional[int] # Union 사용해도 가능
  option2 : Union[int, None]

class Count(BaseModel):
  counts : int

fake_db = {
    "id" : 1,
    "name" : "test",
    "password" : "test1234!",
    "image_url" : "https://test.img/test1.jpg"
}

@app.get('/', response_model=ResponseTest, status_code=200)
async def get_fake_user():
    '''
    reponse_model을 적용할 때는 단순 return으로 진행해야 schema에서 지정한 형식으로 필터링할 수 있다.
    JSONResponse나 Response 등을 사용하게 된다면, schema를 거치지 않고 전달된다.
    '''
    return fake_db
    # return Response(content=json.dumps(fake_db))
    # return JSONResponse(content=fake_db, status_code=status.HTTP_200_OK)
  
@app.get('/counts', response_model=Count)
async def get_fake_counts():
  data = {
    'counts' : 1
  }

  return JSONResponse(content=data, status_code=status.HTTP_200_OK)

@app.post('/')
async def rank_user(request : User):
  '''
  클래스 정상 적용
  '''
  rank_test_form = Rank(
    name=request.name,
    rank=1
  )

  return rank_test_form

@app.post('/posts', response_model=PostResponse)
async def upload_post(nickname):
  '''
  Optional, Union 정상 적용
  '''
  data1 = {
    "title" : nickname
  }

  data2 = {
    "title" : nickname,
    "option1" : 1
  }
  
  # return data1

  return data2

if __name__ == "__main__":
    uvicorn.run(app=app, host="0.0.0.0",port=8080)