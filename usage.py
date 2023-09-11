import dash
from dash import html, dcc
import feffery_antd_components as fac
from dash.dependencies import Input, Output, State

app = dash.Dash(__name__, compress=True, suppress_callback_exceptions=True)

app.layout = html.Div(
    [
        fac.AntdInput(
            id='persistence-input-demo',
            placeholder='请输入',
            persistence=True,
            style={
                'width': 256
            }
        )
    ],
    style={
        'padding': '50px 100px'
    }
)


if __name__ == '__main__':
    app.run(debug=True)
