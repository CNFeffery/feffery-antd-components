
import dash
import numpy as np
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output, State

app = dash.Dash(__name__)

app.layout = html.Div(
    [

        fac.AntdRadioGroup(
            options=[
                {
                    'label': fac.AntdText(
                        [
                            fac.AntdIcon(icon=icon),
                            f'选项{i}'
                        ]
                    ),
                    'value': f'选项{i}'
                }
                for i, icon in enumerate([
                    'antd-carry-out',
                    'antd-car',
                    'antd-bulb',
                    'antd-build'
                ])
            ],
            defaultValue='选项1'
        )
    ],
    style={
        'padding': '50px'
    }
)

if __name__ == '__main__':
    app.run(debug=True)
