import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__, compress=True)

app.layout = html.Div(
    [
        fac.AntdInput(
            prefix='前缀',
            suffix='后缀',
            style={
                'width': 200
            },
            styles={
                'prefix': {
                    'color': 'red'
                },
                'suffix': {
                    'color': 'blue'
                },
                'input': {
                    'background': '#d3f261'
                }
            }
        ),
        fac.AntdInput(
            mode='text-area',
            showCount=True,
            style={
                'width': 200
            },
            styles={
                'count': {
                    'color': 'red'
                },
                'textarea': {
                    'color': '#389e0d'
                }
            }
        )
    ],
    style={
        'padding': '50px 100px'
    }
)

if __name__ == '__main__':
    app.run(debug=True)
