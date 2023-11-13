import dash
import uuid
import json
import time
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__, compress=True)

app.layout = html.Div(
    [
        fac.AntdQRCode(
            id='qrcode',
            value='初始值',
            # type="svg",
            icon="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
            size=180,
            iconSize=50,
            color='#1890ff',
            bgColor='#fff',
            # bordered=False,
            errorLevel='H',
            status='loading', # 初始化loading
            expires=5,
            autoSpin=True
        ),
        html.Pre(
            id='output'
        )
    ],
    style={
        'padding': '50px 100px'
    }
)


@app.callback(
    [Output('qrcode', 'value'),
     Output('qrcode', 'status')],
    Input('qrcode', 'value')
)
def init_value(value):

    if value == '初始值':

        time.sleep(1)

        return [str(uuid.uuid4()), 'active']

    return dash.no_update


@app.callback(
    [Output('qrcode', 'value', allow_duplicate=True),
     Output('qrcode', 'status', allow_duplicate=True)],
    Input('qrcode', 'refreshClicks'),
    prevent_initial_call=True
)
def demo(refreshClicks):

    time.sleep(3)

    return str(uuid.uuid4()), 'active'

if __name__ == '__main__':
    app.run(debug=True)
