import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdBackTop(id='input'),
        fac.AntdText(id='output'),
    ],
    style={'height': 99999, 'padding': 50},
)


@app.callback(
    Output('output', 'children'), Input('input', 'nClicks')
)
def demo(nClicks):
    return f'nClicks: {nClicks}'


if __name__ == '__main__':
    app.run(debug=True)
