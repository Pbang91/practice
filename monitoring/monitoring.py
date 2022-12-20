import asyncio

import uvicorn

from sse_starlette.sse import EventSourceResponse

from fastapi import FastAPI, Request, File
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

STREAM_DELAY = 1  # second
RETRY_TIMEOUT = 35000  # milisecond

origins = [
  "*"
]

app.add_middleware(
  CORSMiddleware,
  allow_origins = ["*"],
  allow_credentials = True,
  allow_methods = ["*"],
  allow_headers = ["*"],
  expose_headers = ["content-disposition"], 
)

@app.get('/access-monitor')
async def send_access_log_with_sse(request : Request, log_file : File):
    async def event_generator():
        lines = ["1,192.000.0.00,200,GET,/api/library/videos/e0a9e10580d9,2022-11-18 36:36"]

        while True:
            if await request.is_disconnected():
                break
            
            with open('/Users/geongyupark/Desktop/AIVE_RELEASE/API_log.csv', "r") as logfile:
                last_line = logfile.readlines()[-1]
                
                if lines[-1] != last_line:
                    lines.append(last_line)
                
                else:
                    continue
            
            if lines:
                yield {
                        "event": "new_message",
                        "retry": RETRY_TIMEOUT,
                        "data": lines
                }
            
            await asyncio.sleep(STREAM_DELAY)

    return EventSourceResponse(event_generator())

if __name__ == "__main__":
    uvicorn.run("monitoring:app", host="0.0.0.0", port=8888, reload=True)