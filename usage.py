import json
import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdForm(
            [
                fac.AntdPictureUpload(
                    id='upload-demo',
                    name='上传测试',
                )
            ],
            id='demo-form',
            enableBatchControl=True,
        )
    ],
    style={'padding': '50px 100px'},
)


if __name__ == '__main__':
    app.run(debug=True)
