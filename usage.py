import dash
from dash import html, dcc
from datetime import datetime
import feffery_antd_components as fac
from dash.dependencies import Input, Output, State

app = dash.Dash(__name__)

demo_date_picker = fac.AntdDatePicker(
    format='YYYYMMDD',
    value='20230824',
    defaultPickerValue='20230824'
)

app.layout = html.Div(
    [

    ],
    style={
        'padding': 150
    }
)


if __name__ == '__main__':
    app.run(debug=True)
