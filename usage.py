import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdSpace(
            [
                fac.AntdInput(
                    id='input-dmeo', style={'width': 200}
                ),
                fac.AntdText(id='input-demo-output'),
            ]
        )
    ],
    style={'padding': 50},
)


@app.callback(
    Output('input-demo-output', 'children'),
    Input('input-dmeo', 'focusing'),
)
def demo(focusing):
    return f'focusing: {focusing}'


if __name__ == '__main__':
    app.run(debug=True)
