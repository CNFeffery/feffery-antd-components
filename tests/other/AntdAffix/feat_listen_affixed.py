if True:
    import sys

    sys.path.append('../../../')
    import dash
    from dash import html
    import feffery_antd_components as fac
    from dash.dependencies import Input, Output
    from feffery_dash_utils.style_utils import style

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        html.Div(
            fac.AntdAffix(
                fac.AntdButton(
                    'affixed: False',
                    id='output',
                    type='primary',
                ),
                id='affix-demo',
                offsetTop=24,
            ),
            style={'marginBottom': '1000px'},
        )
    ],
    style=style(padding=100, height='1000vh'),
)


@app.callback(
    Output('output', 'children'),
    Input('affix-demo', 'affixed'),
)
def listen_affixed(affixed):
    return 'affixed: True' if affixed else 'affixed: False'


if __name__ == '__main__':
    app.run(debug=True)
