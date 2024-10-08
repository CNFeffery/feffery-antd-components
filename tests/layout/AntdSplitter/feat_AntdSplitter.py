if True:
    import sys

    sys.path.append('../../../')
    import feffery_antd_components as fac
    import json
    from dash import Dash, html
    from dash.dependencies import Input, Output
    from feffery_dash_utils.style_utils import style

app = Dash(__name__)


def desc(text):
    return fac.AntdFlex(
        fac.AntdTitle(
            text,
            type='secondary',
            level=5,
            style=style(whiteSpace='nowrap'),
        ),
        justify='center',
        align='center',
        style=style(height='100%'),
    )


app.layout = html.Div(
    [
        fac.AntdSplitter(
            id='splitter-1',
            items=[
                {
                    'children': desc('First'),
                    'defaultSize': '40%',
                    'min': '20%',
                    'max': '70%',
                },
                {'children': desc('Second')},
            ],
            style=style(
                height=200,
                boxShadow='0 0 10px rgba(0, 0, 0, 0.1)',
            ),
        ),
        fac.AntdSplitter(
            id='splitter-2',
            items=[
                {
                    'key': 'splitter1',
                    'children': desc('First'),
                    'size': '50%',
                },
                {
                    'key': 'splitter2',
                    'children': desc('Second'),
                    'size': '50%',
                },
            ],
            style=style(
                height=200,
                boxShadow='0 0 10px rgba(0, 0, 0, 0.1)',
            ),
        ),
        html.Pre(id='splitter-2-output'),
    ]
)


@app.callback(
    Output('splitter-2-output', 'children'),
    Input('splitter-2', 'currentSizes'),
)
def update_output(currentSizes):
    return json.dumps(
        currentSizes, indent=4, ensure_ascii=False
    )


if __name__ == '__main__':
    app.run(debug=True)
