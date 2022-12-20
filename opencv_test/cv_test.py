import cv2 as cv

class MultiVideoCapture:
    @staticmethod
    async def read_frame(video):
        ret, frame = video.read()

        if not ret:
            print("Not Frame")
            return
        
        return True, frame
    
    @staticmethod
    async def set_frame(video, start_frame):
        video.set(cv.CAP_PROP_POS_FRAMES, start_frame)

    @staticmethod
    async def save_frame(filename, frame):
        cv.imwrite(filename, frame)
    
    @staticmethod
    async def resized_frame(frame):
        resized_image = cv.resize(frame,(512, 512))
        return resized_image
    
    @staticmethod
    async def get_length_video(video):
        fps = video.get(cv.CAP_PROP_FPS)
        frame_count = int(video.get(cv.CAP_PROP_FRAME_COUNT))

        duration = frame_count / fps
        
        return duration
    
    @staticmethod
    async def get_fps_of_video(video):
        # 초당 프레임의 정보를 가지고 옴
        fps = video.get(cv.CAP_PROP_FPS)

        return fps