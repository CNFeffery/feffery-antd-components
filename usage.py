import json
import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__, compress=True)

app.layout = html.Div(
    [
        fac.AntdSpace(
            [
                fac.AntdButton(
                    'not happy',
                    type='primary'
                ),
                fac.AntdButton(
                    'happy',
                    type='primary',
                    motionType='happy-work'
                ),
                fac.AntdConfigProvider(
                    fac.AntdButton(
                        'no wave',
                        type='primary'
                    ),
                    wavesDisabled=True
                )
            ]
        )
    ],
    style={
        'padding': '50px 100px'
    }
)


if __name__ == '__main__':
    app.run(debug=True)
