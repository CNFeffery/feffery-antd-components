import dash
import json
from flask import request
from dash import html
from requests import options
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(
    __name__
)


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


@app.callback(
    Output('picture-upload-upload', 'children'),
    [Input('picture-upload', 'lastUploadTaskRecord'),
     Input('picture-upload', 'listUploadTaskRecord')]
)
def picture_upload_callback(lastUploadTaskRecord, listUploadTaskRecord):

    return json.dumps({
        'lastUploadTaskRecord': lastUploadTaskRecord,
        'listUploadTaskRecord': listUploadTaskRecord
    }, indent=4, ensure_ascii=False)


app.layout = html.Div(
    [
        fac.AntdTimeRangePicker(
            allowClear=True,
            format='HH:mm:ss'
        ),

        fac.AntdSlider(
            id='qr-version',
            min=1,
            max=40,
            step=1,
            defaultValue=10,
            style={
                'width': '300px'
            }
        ),
        fac.AntdPictureUpload(
            id='picture-upload',
            apiUrl='/upload/',
            fileListMaxLength=10,
            buttonContent='上传图片',
            editable=True,
            editConfig={
                'rotate': True
            },
            style={
                'display': 'none'
            }
        ),
        html.Pre(
            id='picture-upload-upload'
        ),
        fac.AntdDivider(isDashed=True),

        fac.AntdTable(
            columns=[
                {
                    'title': 'ellipsis内容省略示例',
                    'dataIndex': 'ellipsis内容省略示例',
                    'renderOptions': {
                        'renderType': 'ellipsis'
                    }
                }
            ],
            data=[
                {
                    'key': i,
                    'ellipsis内容省略示例': '这是一段废话，用来演示超长内容再渲染巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉'
                }
                for i in range(3)
            ],
            bordered=True,
            style={
                'width': '250px'
            }
        ),
        fac.AntdDivider(isDashed=True),

        fac.AntdTable(
            columns=[
                {
                    'title': 'ellipsis-copyable模式示例',
                    'dataIndex': 'ellipsis-copyable模式示例',
                    'renderOptions': {
                        'renderType': 'ellipsis-copyable'
                    }
                }
            ],
            data=[
                {
                    'key': i,
                    'ellipsis-copyable模式示例': '这是一段废话，用来演示超长内容再渲染巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉'
                }
                for i in range(3)
            ],
            bordered=True,
            style={
                'width': '250px'
            }
        )
    ],
    style={
        'padding': '100px'
    }
)


if __name__ == '__main__':
    app.run_server(debug=True)
