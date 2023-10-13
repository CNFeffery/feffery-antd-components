import dash
import json
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output, State, MATCH
import os
from flask import request, send_from_directory, Response

app = dash.Dash(__name__, compress=True)

app.layout = html.Div(
    [
        html.Div(
            [
                fac.AntdUpload(
                    apiUrl='http://127.0.0.1:9099/upload',
                    apiUrlExtraParams={'test': 111},
                    withCredentials=False,
                    # downloadUrl='/download',
                    downloadUrlExtraParams={
                        'token': 'test',
                        'a': 1
                    },
                    downloadUrlFromBackend=True,
                    fileMaxSize=1,
                    defaultFileList=[
                        {
                            'name': f'demo{i}.txt',
                            'status': 'done'
                        }
                        for i in range(1, 6)
                    ],
                    id={'type': 'upload-demo', 'index': 'AntdUpload'},
                    confirmBeforeDelete=True
                ),
                fac.AntdSpin(
                    html.Pre(id={'type': 'upload-demo-output',
                             'index': 'AntdUpload'}),
                    text='回调中'
                )
            ]
        ),
        html.Div(
            [
                fac.AntdDraggerUpload(
                    apiUrl='/upload/',
                    apiUrlExtraParams={'test': 222},
                    withCredentials=True,
                    # downloadUrl='/download',
                    downloadUrlExtraParams={
                        'token': 'test',
                        'a': 1
                    },
                    downloadUrlFromBackend=True,
                    fileMaxSize=1,
                    defaultFileList=[
                        {
                            'name': f'demo{i}.txt',
                            'status': 'done'
                        }
                        for i in range(1, 6)
                    ],
                    id={'type': 'upload-demo', 'index': 'AntdDraggerUpload'},
                    confirmBeforeDelete=True
                ),
                fac.AntdSpin(
                    html.Pre(id={'type': 'upload-demo-output',
                             'index': 'AntdDraggerUpload'}),
                    text='回调中'
                )
            ]
        ),
        html.Div(
            [
                fac.AntdPictureUpload(
                    apiUrl='/upload/',
                    apiUrlExtraParams={'test': 333},
                    withCredentials=True,
                    # downloadUrl='/download',
                    downloadUrlExtraParams={
                        'token': 'test',
                        'a': 1
                    },
                    downloadUrlFromBackend=True,
                    fileMaxSize=1,
                    defaultFileList=[
                        {
                            'name': f'demo{i}.png',
                            'status': 'done'
                        }
                        for i in range(1, 6)
                    ],
                    id={'type': 'upload-demo', 'index': 'AntdPictureUpload'},
                    confirmBeforeDelete=True
                ),
                fac.AntdSpin(
                    html.Pre(id={'type': 'upload-demo-output',
                             'index': 'AntdPictureUpload'}),
                    text='回调中'
                )
            ]
        ),
    ],
    style={
        'padding': '50px 100px'
    }
)


@app.callback(
    Output({'type': 'upload-demo-output', 'index': MATCH}, 'children'),
    [Input({'type': 'upload-demo', 'index': MATCH}, 'lastUploadTaskRecord'),
     Input({'type': 'upload-demo', 'index': MATCH}, 'listUploadTaskRecord')],
    prevent_initial_call=True
)
def upload_callback_demo(lastUploadTaskRecord, listUploadTaskRecord):
    if lastUploadTaskRecord:
        return json.dumps(
            {
                'type': dash.ctx.triggered_id.index,
                'lastUploadTaskRecord': lastUploadTaskRecord,
                'listUploadTaskRecord': listUploadTaskRecord
            },
            indent=4,
            ensure_ascii=False
        )


# 这里的app即为Dash实例
@app.server.route('/upload/', methods=['POST'])
def upload():
    '''
    构建文件上传服务
    :return:
    '''

    # 获取上传id参数，用于指向保存路径
    uploadId = request.values.get('uploadId')

    # 获取上传的文件名称
    filename = request.files['file'].filename
    print(request.values.get('test'))

    # 基于上传id，若本地不存在则会自动创建目录
    try:
        os.mkdir(os.path.join(os.getcwd(), uploadId))
    except FileExistsError:
        pass

    # 流式写出文件到指定目录
    with open(os.path.join(os.getcwd(), uploadId, filename), 'wb') as f:
        # 流式写出大型文件，这里的10代表10MB
        for chunk in iter(lambda: request.files['file'].read(1024 * 1024 * 10), b''):
            f.write(chunk)

    return {'filename': filename, 'url': f'http://127.0.0.1:8050/download?customInfo=test&taskId={uploadId}&filename={filename}'}


@app.server.route('/download', methods=['GET'])
def download():
    # 指定文件的路径
    taskId = request.args.get('taskId')
    filename = request.args.get('filename')
    directory = os.path.join(os.getcwd(), taskId)  # 替换为实际文件的目录路径
    return send_from_directory(directory, filename, as_attachment=True)


# 浏览器直接访问该请求，模拟设置cookie
@app.server.route('/setCookie')
def set_cookie():
    resp = Response('set_cookie成功')
    resp.set_cookie('name', 'test')
    return resp

if __name__ == '__main__':
    app.run(debug=True)
