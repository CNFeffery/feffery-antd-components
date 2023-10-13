from fastapi import FastAPI, Request, File, UploadFile, Form
from fastapi import status
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import os
import time

app = FastAPI()

# 前端页面url
origins = [
    "http://127.0.0.1:8050",
]

# 后台api允许跨域
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/upload")
async def common_upload(request: Request, uploadId: str = Form(), file: UploadFile = File(...)):
    try:
        try:
            os.makedirs(os.path.join(os.getcwd(), uploadId))
        except FileExistsError:
            pass
        filepath = os.path.join(os.getcwd(), uploadId, f'{file.filename}')
        with open(filepath, 'wb') as f:
            # 流式写出大型文件，这里的10代表10MB
            for chunk in iter(lambda: file.file.read(1024 * 1024 * 10), b''):
                f.write(chunk)
        return JSONResponse(
        status_code=status.HTTP_200_OK,
        content=jsonable_encoder(
            {
                'code': 200,
                'message': "上传成功",
                'data': {'filename': file.filename},
                'success': 'true',
                'time': time.time()
            }
        )
    )
    except Exception as e:
        return JSONResponse(
        status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
        content=jsonable_encoder(
            {
                'code': 500,
                'message': str(e),
                'data': "",
                'success': 'false',
                'time': time.time()
            }
        )
    )
        
        
if __name__ == '__main__':
    uvicorn.run(app='temp_api:app', host="127.0.0.1", port=9099, reload=True)
