import dash
import json
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output, State

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdWatermark(
            html.Div(
                style={
                    'height': '500px',
                    'boxShadow': '0 6px 16px rgb(107 147 224 / 14%)',
                    'marginBottom': '25px'
                }
            ),
            image='https://gw.alipayobjects.com/zos/bmw-prod/59a18171-ae17-4fc5-93a0-2645f64a3aca.svg',
            width=115,
            height=36
        )
    ],
    style={
        'padding': 100
    }
)


if __name__ == '__main__':
    app.run(debug=True)
