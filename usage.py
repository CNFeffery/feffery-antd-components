import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdButton(
            '手动清空',
            id='clear',
            type='primary',
            style={'marginBottom': 8},
        ),
        fac.AntdForm(
            [
                fac.AntdPictureUpload(
                    id='upload-demo', name='上传测试'
                )
            ],
            id='demo-form',
            enableBatchControl=True,
        ),
    ],
    style={'padding': '50px 100px'},
)


@app.callback(
    Output('demo-form', 'values'),
    Input('clear', 'nClicks'),
    prevent_initial_call=True,
)
def clear(nClicks):
    return {'上传测试': None}


if __name__ == '__main__':
    app.run(debug=True)
