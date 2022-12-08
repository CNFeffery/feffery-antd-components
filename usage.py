import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdUpload(
            apiUrl='/upload/',
            fileMaxSize=1,
            status='warning',
            # defaultFileList=[
            #     {
            #         'name': '文件1.png',
            #         'status': 'done',
            #         'uid': 'xxxx',
            #         'url': 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
            #     }
            # ],
            listUploadTaskRecord=[{'fileName': '图1.png', 'fileSize': 45964, 'completeTimestamp': 1670073446090,
                                   'taskStatus': 'success', 'taskId': 'be71301f-2ce6-40de-a373-fced714c4072', 'uid': 'rc-upload-1670073422366-3',
                                   'url': 'http://127.0.0.1:9200/assets/imgs/%E9%99%A2logo.svg'}]
        ),

        fac.AntdDraggerUpload(
            apiUrl='/upload/',
            fileMaxSize=1,
            text='拖拽上传示例',
            hint='点击或拖拽文件至此处进行上传',
            status='warning',
            # defaultFileList=[
            #     {
            #         'name': '文件1.png',
            #         'status': 'done',
            #         'uid': 'xxxx',
            #         'url': 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
            #     }
            # ],
            listUploadTaskRecord=[{'fileName': '图1.png', 'fileSize': 45964, 'completeTimestamp': 1670073446090,
                                   'taskStatus': 'success', 'taskId': 'be71301f-2ce6-40de-a373-fced714c4072', 'uid': 'rc-upload-1670073422366-3',
                                   'url': 'http://127.0.0.1:9200/assets/imgs/%E9%99%A2logo.svg'}]
        ),

        fac.AntdPictureUpload(
            **{
                'apiUrl': 'http://127.0.0.1:8200/upload/attachments', 'buttonContent': '点击上传', 'downloadUrl': 'http://127.0.0.1:8200/download/attachments', 'fileListMaxLength': 1, 'fileTypes': ['jpg', 'png', 'jpeg'], 'uploadId': 'a306796b-9502-4be8-8f17-d710ebaaa76d', 'lastUploadTaskRecord': {'fileName': '图2.png', 'fileSize': 167612, 'completeTimestamp': 1670205277832, 'taskStatus': 'success', 'taskId': 'a306796b-9502-4be8-8f17-d710ebaaa76d'}, 'listUploadTaskRecord': [{'fileName': '图2.png', 'fileSize': 167612, 'completeTimestamp': 1670205277832, 'taskStatus': 'success', 'taskId': 'a306796b-9502-4be8-8f17-d710ebaaa76d', 'uid': 'rc-upload-1670205272687-2', 'url': 'http://127.0.0.1:8200/download/attachments?taskId=a306796b-9502-4be8-8f17-d710ebaaa76d&filename=图2.png'}]
            }
        ),

        fac.AntdDatePicker(
            picker='month',
            disabledDatesStrategy=[
                {
                    'mode': 'lt',
                    'target': 'specific-date',
                    'value': '2021-08-01'
                },
                {
                    'mode': 'gt',
                    'target': 'specific-date',
                    'value': '2022-03-31'
                }
            ]
        ),

        fac.AntdDateRangePicker(
            picker='month',
            disabledDatesStrategy=[
                {
                    'mode': 'lt',
                    'target': 'specific-date',
                    'value': '2021-08-01'
                },
                {
                    'mode': 'gt',
                    'target': 'specific-date',
                    'value': '2022-03-31'
                }
            ]
        ),

        fac.AntdSelect(
            placeholder='请选择国家：',
            options=[
                {'label': '中国', 'value': '中国'},
                {'label': '美国', 'value': '美国'},
                {'label': '俄罗斯', 'value': '俄罗斯'},
                {'label': '德国', 'value': '德国', 'disabled': True},
                {'label': '加拿大', 'value': '加拿大'}
            ],
            # readOnly=True,
            value='美国',
            style={
                # 使用css样式固定宽度
                'width': '200px'
            }
        ),

        fac.AntdSpoiler(
            fac.AntdParagraph(
                '巴拉巴拉'*200
            ),
            maxHeight=65
        ),

        fac.AntdButton(
            # '触发对话框',
            type='primary',
            id='modal-demo-trigger-1'
        ),

        fac.AntdModal(
            fac.AntdText('对话框内容测试'),
            id='modal-demo-1',
            visible=False,
            title=html.Span(
                [
                    fac.AntdIcon(icon='fc-search'),
                    '标题测试'
                ]
            ),
            renderFooter=True
        )
    ],
    style={
        'padding': '50px'
    }
)


@ app.callback(
    Output('modal-demo-1', 'visible'),
    Input('modal-demo-trigger-1', 'nClicks'),
    prevent_initial_call=True
)
def modal_demo_callback1(nClicks):
    return True


if __name__ == '__main__':
    app.run(debug=True)
