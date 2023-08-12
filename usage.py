import dash
import json
from dash import html
from datetime import datetime
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdCenter(
            fac.AntdButton(
                '测试',
                icon=fac.AntdIcon(
                    icon='antd-question'
                ),
                type='primary',
            ),
            style={
                'height': 400,
                'border': '1px solid #ced4da',
                'borderRadius': 8
            }
        )
    ],
    style={
        'padding': 150
    }
)

if __name__ == '__main__':
    app.run(debug=True)
