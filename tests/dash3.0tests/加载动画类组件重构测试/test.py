if True:
    import sys

    sys.path.append('../../../')
    import time
    import dash
    from dash import html
    import feffery_antd_components as fac
    from dash.dependencies import Input, Output
    from feffery_dash_utils.style_utils import style

app = dash.Dash(__name__)

app.layout = html.Div(
    html.Div(
        [
            '测试',
            fac.AntdSpin(
                [
                    html.Div(
                        html.Div(
                            fac.AntdButton(
                                '测试',
                                id='button-demo',
                                type='primary',
                            )
                        )
                    ),
                    html.Div(id='inner-output-test'),
                ]
            ),
            html.Div(id='outer-output-test'),
        ],
        style=style(padding=50),
    )
)


@app.callback(
    [
        Output('button-demo', 'children'),
        Output('button-demo', 'type'),
        Output('inner-output-test', 'children'),
        Output('outer-output-test', 'children'),
    ],
    Input('button-demo', 'nClicks'),
    prevent_initial_call=True,
)
def demo_callback(nClicks):
    time.sleep(3)

    return [
        f'nClicks: {nClicks}',
        dash.no_update,
        f'inner: {nClicks}',
        f'outer: {nClicks}',
    ]


if __name__ == '__main__':
    app.run(debug=True)
