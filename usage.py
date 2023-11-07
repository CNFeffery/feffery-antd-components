import json
import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__, compress=True)

app.layout = html.Div(
    [
        # token测试
        fac.AntdConfigProvider(
            fac.AntdSwitch(
                checked=False
            ),
            token={
                'motion': False,
                'colorPrimary': 'red'
            },
            wavesDisabled=True
        ),
        # componentsToken测试
        fac.AntdConfigProvider(
            fac.AntdSpace(
                [
                    fac.AntdSwitch(
                        checked=True
                    ),
                    fac.AntdButton(
                        '按钮测试',
                        type='primary'
                    )
                ]
            ),
            componentsToken={
                'Switch': {
                    'colorPrimary': 'red',
                    'algorithm': True
                },
                'Button': {
                    'colorPrimary': 'green',
                    'algorithm': True
                }
            },
            useOldTheme='default'
        )
    ],
    style={
        'padding': '50px 100px'
    }
)


if __name__ == '__main__':
    app.run(debug=True)
