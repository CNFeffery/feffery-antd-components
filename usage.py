import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdFlex(
            [
                fac.AntdButton('Button', type='primary')
                for i in range(24)
            ],
            gap='small',
            wrap=True,
        ),
        fac.AntdFlex(
            [
                fac.AntdButton('Button', type='primary')
                for i in range(24)
            ],
            gap='small',
        ),
        fac.AntdFlex(
            [
                fac.AntdQRCode(
                    value='https://fac.feffery.tech/',
                    status='active',
                ),
                fac.AntdQRCode(
                    value='https://fac.feffery.tech/',
                    status='expired',
                ),
                fac.AntdQRCode(
                    value='https://fac.feffery.tech/',
                    status='loading',
                ),
                fac.AntdQRCode(
                    value='https://fac.feffery.tech/',
                    status='scanned',
                ),
                fac.AntdQRCode(
                    errorLevel='H',
                    value='https://fac.feffery.tech/',
                    icon='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
                    iconSize={
                        'width': 40,
                        'height': 60
                    }
                ),
            ],
            gap='middle',
            wrap='wrap',
        ),
    ],
    style={'padding': 100},
)

if __name__ == '__main__':
    app.run(debug=True)
