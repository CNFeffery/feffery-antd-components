import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdSpace(
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
                fac.AntdSkeleton(
                    id='skeleton', manual=True, active=True
                ),
            ],
            direction='vertical',
            style={'width': '100%'},
        )
    ],
    style={'padding': 200},
)

app.clientside_callback(
    """(checked) => checked""",
    Output('skeleton', 'loading'),
    Input('spinning', 'checked'),
)

if __name__ == '__main__':
    app.run(debug=True)
