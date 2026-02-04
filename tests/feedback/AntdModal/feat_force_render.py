if True:
    import sys

    sys.path.append('../../../')
    import dash
    from dash import html
    from dash.dependencies import Input, Output
    from feffery_dash_utils.style_utils import style

    import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdModal(
            fac.AntdInput(id='modal-demo1-input', defaultValue='demo1'),
            id='modal-demo1',
        ),
        fac.AntdModal(
            fac.AntdInput(id='modal-demo2-input', defaultValue='demo2'),
            id='modal-demo2',
            forceRender=True,
        ),
        fac.AntdSpace(
            [
                fac.AntdText(id='demo1-output'),
                fac.AntdText(id='demo2-output'),
            ],
            direction='vertical',
        ),
    ],
    style=style(padding=50),
)


@app.callback(
    Output('demo1-output', 'children'),
    Input('modal-demo1-input', 'value'),
)
def demo1_output(value):
    return value


@app.callback(
    Output('demo2-output', 'children'),
    Input('modal-demo2-input', 'value'),
)
def demo2_output(value):
    return value


if __name__ == '__main__':
    app.run(debug=True)
