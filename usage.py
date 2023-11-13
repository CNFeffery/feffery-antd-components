import dash
import json
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__, compress=True)

app.layout = html.Div(
    [
        fac.AntdSpace(
            [
                html.Pre(
                    id='output'
                ),
                fac.AntdColorPicker(
                    id='color-picker',
                    allowClear=True,
                    disabledAlpha=False
                )
            ],
            direction='vertical'
        ),
        fac.AntdQRCode(
            id='qrcode',
            value='https://github.com/CNFeffery/feffery-antd-components',
            type="svg",
            icon="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
            size=180,
            iconSize=50,
            color='#1890ff',
            bgColor='#fff',
            bordered=False,
            errorLevel='H',
            status='expired'
        )
    ],
    style={
        'padding': '50px 100px'
    }
)


@app.callback(
    Output('output', 'children'),
    Input('qrcode', 'refreshClicks')
)
def demo(refreshClicks):

    return json.dumps(
        dict(
            点击刷新次数=refreshClicks
        ),
        indent=4,
        ensure_ascii=False
    )


if __name__ == '__main__':
    app.run(debug=True)