import cv2
import asyncio
import uuid
import os
import time
import functools

class MultiVideoCapture:
    @staticmethod
    def read_frame(video):
        ret, frame = video.read()

        if not ret:
            return False
        
        return frame
    
    @staticmethod
    def set_frame(video, start_frame):
        return video.set(cv2.CAP_PROP_POS_FRAMES, start_frame) # video의 현재프레임을 start_frame으로 변환시킨다. 되면 true
        
    @staticmethod
    def save_frame(filename, frame):
        cv2.imwrite(filename, frame)
    
    @staticmethod
    def resize_frmae(frame):
        resized_image = cv2.resize(frame,(512, 512))

        return resized_image
    
    @staticmethod
    def get_length_video(video):
        fps = video.get(cv2.CAP_PROP_FPS)
        frame_count = int(video.get(cv2.CAP_PROP_FRAME_COUNT))

        duration = frame_count / fps
        
        return duration
    
    @staticmethod
    def get_fps_of_video(video):
        # 초당 프레임의 정보를 가지고 옴
        fps = video.get(cv2.CAP_PROP_FPS)

        return fps

async def main(): # 1/5 단축
    start =time.time()
    loop = asyncio.get_event_loop()
    cv_setting_module = MultiVideoCapture()
            
    video = await loop.run_in_executor(None, cv2.VideoCapture, "/Users/geongyupark/Desktop/study/data/600_full.mp4")
    float_fps = cv_setting_module.get_fps_of_video(video)
            
    fps = int(float_fps)
    dir = uuid.uuid4()
    current_time = 1
    
    os.mkdir(f"/Users/geongyupark/Desktop/study/data/{dir}")
    while video.isOpened():
        ddd = current_time*fps
        await loop.run_in_executor(None, functools.partial(cv_setting_module.set_frame, video=video, start_frame=int(current_time*fps)))
        frame = await loop.run_in_executor(None, cv_setting_module.read_frame, video)
            
        if type(frame) == bool:
            break

        file_name = f"/Users/geongyupark/Desktop/study/data/{dir}/{current_time}.jpeg"

        if (video.get(1)-1) % ddd == 0: # 이상하게 set을 진행해도 현재 프레임이 +1가 됨. 그래서 1빼줌
            image = await loop.run_in_executor(None, cv_setting_module.resize_frmae,frame)
            await loop.run_in_executor(None, cv_setting_module.save_frame, file_name, image)
            
            if current_time == 1:
                current_time *= 5
            
            elif current_time > 1:
                current_time += 5
        
    video.release()
    end = time.time()
    print("걸린 시간 : {}".format(end-start))

async def main2():
    start = time.time()
    loop = asyncio.get_event_loop()
    cv_setting_module = MultiVideoCapture()
            
    video = await loop.run_in_executor(None, cv2.VideoCapture, "/Users/geongyupark/Desktop/study/data/600_full.mp4")
    float_fps = cv_setting_module.get_fps_of_video(video)
            
    fps = int(float_fps)
    dir = uuid.uuid4()
    current_time = 1
    
    os.mkdir(f"/Users/geongyupark/Desktop/study/data/{dir}")
    while video.isOpened():
        ddd = current_time*fps

        frame = await loop.run_in_executor(None, cv_setting_module.read_frame, video)
            
        if type(frame) == bool:
            break

        file_name = f"/Users/geongyupark/Desktop/study/data/{dir}/{current_time}.jpeg"
        
        if video.get(1) % ddd == 0:
            image = await loop.run_in_executor(None, cv_setting_module.resize_frmae,frame)
            await loop.run_in_executor(None, cv_setting_module.save_frame, file_name, image)
            
            if current_time == 1:
                current_time *= 5
            
            elif current_time > 1:
                current_time += 5
        
    video.release()
    end = time.time()
    print("걸린 시간 : {}".format(end-start))

asyncio.run(main())
asyncio.run(main2())