import dash
from dash.dependencies import Input, Output
import dash_core_components as dcc
import dash_html_components as html
import feffery_antd_components as fac
import dash_bootstrap_components as dbc

INITIAL = '1+1=2'

CITIES = ['Boston', 'London', 'Montreal']

app = dash.Dash(__name__)

app.layout = html.Div([
    "Remember this important info:",
    html.Br(),

    dbc.Input(id='important-info',  persistence=True),

    dbc.Select(
        id='persisted-city',
        value='Montreal',
        options=[{'label': v, 'value': v} for v in CITIES],
        persistence=True
    ),

    fac.AntdSelect(
        value='Montreal',
        options=[{'label': v, 'value': v} for v in CITIES],
        persistence=True,
        persisted_props=['value'],
        style={
            # 使用css样式固定宽度
            'width': '200px'
        }
    )
])


if __name__ == '__main__':
    app.run_server(debug=True)
