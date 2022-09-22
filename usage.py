import json
import dash
import pandas as pd
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output, State

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdText(
            '增删改一体化表格示例',
            style={
                'fontSize': '20px',
                'borderLeft': '3px solid #2e94f7',
                'paddingLeft': '5px',
            }
        )
    ],
    style={
        'padding': '50px'
    }
)

if __name__ == '__main__':
    app.run(debug=True)
