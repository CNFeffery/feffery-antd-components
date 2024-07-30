import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdSwitch(
            id='spinning',
            checked=True,
            style={
                'position': 'fixed',
                'top': 50,
                'left': 50,
                'zIndex': 99999,
            },
        ),
        fac.AntdSpin(id='spin', manual=True, percent=66.6),
        fac.AntdSpin(
            id='spin-fullscreen',
            manual=True,
            fullscreen=True,
            percent='auto',
        ),
    ],
    style={'padding': 200},
)

app.clientside_callback(
    """(checked) => [checked, checked]""",
    [
        Output('spin', 'spinning'),
        Output('spin-fullscreen', 'spinning'),
    ],
    Input('spinning', 'checked'),
)

if __name__ == '__main__':
    app.run(debug=True)
