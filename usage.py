import dash
import numpy as np
from dash import html
from flask import request
import feffery_antd_components as fac
from dash.dependencies import Input, Output, State

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


@app.callback(
    Output('output', 'children'),
    [Input('input', 'lastUploadTaskRecord'),
     Input('input', 'listUploadTaskRecord')]
)
def test(lastUploadTaskRecord, listUploadTaskRecord):
    if lastUploadTaskRecord:
        from pprint import pprint
        print('\n'*100)
        pprint(lastUploadTaskRecord)
        print('-'*200)
        pprint(listUploadTaskRecord)
        print('='*200)

    return dash.no_update


app.layout = html.Div(
    [

        fac.AntdUpload(
            id='input',
            apiUrl='/upload/',
            # multiple=True,
            style={
                'marginBottom': '200px'
            }
        ),

        html.Div(
            id='output'
        ),

        fac.AntdTable(
            columns=[
                {
                    'title': '图片字段测试',
                    'dataIndex': '图片字段测试',
                    'width': '200px',
                    'renderOptions': {
                        'renderType': 'image'
                    }
                }
            ],
            data=[
                {
                    '图片字段测试': {
                        'src': 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
                        'height': '100%'
                    }
                }
            ] * 100,
            bordered=True,
            style={
                'width': '300px'
            }
        ),

        fac.AntdTable(
            selectedRowKeys=['2', '4'],
            rowSelectionWidth='4rem',
            columns=[
                {
                    'title': '默认的checkbox模式',
                    'dataIndex': f'默认的checkbox模式',
                    'width': '33.33%',
                    'conditionStyle': '''
                    (record, index) => {
                        if (record.默认的checkbox模式 >= 10) {
                            return {
                                style: {
                                    color: "red"
                                }
                            }
                        }
                        if (record.默认的checkbox模式 % 2 === 0) {
                            return {
                                style: {
                                    backgroundColor: "#ffe7ba"
                                }
                            }
                        }
                        return {
                            style: {
                                fontWeight: "bold"
                            }
                        }
                    }
                    '''
                    # 'fixed': 'left'
                },
                {
                    'title': '自定义选项的checkbox模式',
                    'dataIndex': '自定义选项的checkbox模式',
                    'width': '33.33%'
                },
                {
                    'title': 'keyword模式',
                    'dataIndex': 'keyword模式',
                    'width': '33.33%'
                }
            ],
            sticky=True,
            pagination={
                'pageSize': 100
            },
            data=[
                {
                    '默认的checkbox模式': i,
                    '自定义选项的checkbox模式': i,
                    'keyword模式': i
                }
                for i in range(500)
            ],
            filterOptions={
                '默认的checkbox模式': {
                    'filterMode': 'keyword'
                },
                '自定义选项的checkbox模式': {
                    'filterMode': 'keyword'
                },
                'keyword模式': {
                    'filterMode': 'keyword'
                }
            },
            rowSelectionType='checkbox',
            bordered=True,
            # maxHeight=200,
            maxWidth=1000,
            style={
                # 'width': '800px'
            }
        )
    ],
    style={
        'height': '100vh',
        'padding': '50px'
    }
)

if __name__ == '__main__':
    app.run_server(debug=True)


# import dash
# import numpy as np
# from dash import html, dcc
# from flask import request
# import feffery_antd_components as fac
# from dash.dependencies import Input, Output, State

# app = dash.Dash(__name__, suppress_callback_exceptions=True)


# @app.server.route('/upload/', methods=['POST'])
# def upload():
#     '''
#     构建文件上传服务
#     :return:
#     '''

#     # 获取上传id参数，用于指向保存路径
#     uploadId = request.values.get('uploadId')

#     # 获取上传的文件名称
#     filename = request.files['file'].filename

#     print({'filename': filename})

#     return {'filename': filename}


# app.layout = html.Div(
#     [
#         fac.AntdTable(
#             columns=[
#                 {
#                     'title': '图片字段测试',
#                     'dataIndex': '图片字段测试',
#                     'width': '200px',
#                     'renderOptions': {
#                         'renderType': 'image'
#                     }
#                 }
#             ],
#             data=[
#                 {
#                     '图片字段测试': {
#                         'src': 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
#                         'height': '100%'
#                     }
#                 }
#             ] * 5,
#             bordered=True,
#             style={
#                 'width': '300px'
#             }
#         ),

#         fac.AntdTable(
#             selectedRowKeys=['2', '4'],
#             rowSelectionWidth='4rem',
#             columns=[
#                 {
#                     'title': '默认的checkbox模式',
#                     'dataIndex': f'默认的checkbox模式',
#                     'width': '33.33%',
#                     'conditionStyle': '''
#                     (record, index) => {
#                         if (record.默认的checkbox模式 >= 10) {
#                             return {
#                                 style: {
#                                     color: "red"
#                                 }
#                             }
#                         }
#                         if (record.默认的checkbox模式 % 2 === 0) {
#                             return {
#                                 style: {
#                                     backgroundColor: "#ffe7ba"
#                                 }
#                             }
#                         }
#                         return {
#                             style: {
#                                 fontWeight: "bold"
#                             }
#                         }
#                     }
#                     '''
#                     # 'fixed': 'left'
#                 },
#                 {
#                     'title': '自定义选项的checkbox模式',
#                     'dataIndex': '自定义选项的checkbox模式',
#                     'width': '33.33%'
#                 },
#                 {
#                     'title': 'keyword模式',
#                     'dataIndex': 'keyword模式',
#                     'width': '33.33%'
#                 }
#             ],
#             sticky=True,
#             pagination={
#                 'pageSize': 100
#             },
#             data=[
#                 {
#                     '默认的checkbox模式': i,
#                     '自定义选项的checkbox模式': i,
#                     'keyword模式': i
#                 }
#                 for i in range(5)
#             ],
#             filterOptions={
#                 '默认的checkbox模式': {
#                     'filterMode': 'keyword'
#                 },
#                 '自定义选项的checkbox模式': {
#                     'filterMode': 'keyword'
#                 },
#                 'keyword模式': {
#                     'filterMode': 'keyword'
#                 }
#             },
#             rowSelectionType='checkbox',
#             bordered=True,
#             # maxHeight=200,
#             maxWidth=1000,
#             style={
#                 # 'width': '800px'
#             }
#         )
#     ],
#     style={
#         'height': '100vh',
#         'padding': '50px'
#     }
# )

# if __name__ == '__main__':
#     app.run_server(debug=True)
