import time
import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdSelect(
            id='select-demo',
            options=[],
            autoSpin=True,
            style={'width': 200},
        )
    ],
    style={'padding': 50},
)


@app.callback(
    Output('select-demo', 'id'),
    Input('select-demo', 'value'),
)
def demo(value):
    time.sleep(999)

    return dash.no_update


if __name__ == '__main__':
    app.run(debug=True)
