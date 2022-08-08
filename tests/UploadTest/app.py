if True:
    import sys
    sys.path.append('../..')
    import json
    import dash
    from dash import html
    from flask import request
    import feffery_antd_components as fac
    from dash.dependencies import Input, Output

app = dash.Dash(__name__)


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

    return {'filename': filename}


app.layout = html.Div(
    [
        fac.AntdUpload(
            id='upload-demo',
            apiUrl='/upload/',
            fileMaxSize=1,
            multiple=True
        ),

        fac.AntdSpin(
            html.Pre(id='upload-demo-output'),
            text='回调中'
        )
    ],
    style={
        'width': '800px',
        'margin': '0 auto',
    }
)


@app.callback(
    Output('upload-demo-output', 'children'),
    [Input('upload-demo', 'lastUploadTaskRecord'),
     Input('upload-demo', 'listUploadTaskRecord')],
    prevent_initial_call=True
)
def upload_callback_demo(lastUploadTaskRecord, listUploadTaskRecord):
    if lastUploadTaskRecord:
        return json.dumps(
            {
                'lastUploadTaskRecord': lastUploadTaskRecord,
                'listUploadTaskRecord': listUploadTaskRecord
            },
            indent=4,
            ensure_ascii=False
        )


if __name__ == '__main__':
    app.run(debug=True)
