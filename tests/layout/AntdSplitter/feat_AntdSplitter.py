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
        fac.AntdDivider('基本用法'),
        fac.AntdSpace(
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
            ],
            direction='vertical',
            style=style(width='100%'),
        ),
        fac.AntdDivider('垂直方向'),
        fac.AntdSplitter(
            id='splitter-3',
            layout='vertical',
            items=[
                {
                    'key': 'splitter1',
                    'children': desc('First'),
                },
                {
                    'key': 'splitter2',
                    'children': desc('Second'),
                },
            ],
            style=style(
                height=300,
                boxShadow='0 0 10px rgba(0, 0, 0, 0.1)',
            ),
        ),
        fac.AntdDivider('可折叠'),
        fac.AntdSpace(
            [
                fac.AntdSplitter(
                    id='splitter-4',
                    items=[
                        {
                            'key': 'splitter1',
                            'children': desc('First'),
                            'collapsible': True,
                            'min': '20%',
                        },
                        {
                            'key': 'splitter2',
                            'children': desc('Second'),
                            'collapsible': True,
                        },
                    ],
                    style=style(
                        height=200,
                        boxShadow='0 0 10px rgba(0, 0, 0, 0.1)',
                    ),
                ),
                fac.AntdSplitter(
                    id='splitter-5',
                    layout='vertical',
                    items=[
                        {
                            'key': 'splitter1',
                            'children': desc('First'),
                            'collapsible': True,
                            'min': '20%',
                        },
                        {
                            'key': 'splitter2',
                            'children': desc('Second'),
                            'collapsible': True,
                        },
                    ],
                    style=style(
                        height=300,
                        boxShadow='0 0 10px rgba(0, 0, 0, 0.1)',
                    ),
                ),
            ],
            direction='vertical',
            style=style(width='100%'),
        ),
        fac.AntdDivider('多面板'),
        fac.AntdSplitter(
            id='splitter-6',
            items=[
                {
                    'key': 'splitter1',
                    'children': desc('Panel 1'),
                    'collapsible': True,
                },
                {
                    'key': 'splitter2',
                    'children': desc('Panel 2'),
                    'collapsible': {'start': True},
                },
                {
                    'key': 'splitter3',
                    'children': desc('Panel 3'),
                },
            ],
            style=style(
                height=200,
                boxShadow='0 0 10px rgba(0, 0, 0, 0.1)',
            ),
        ),
        fac.AntdDivider('复杂组合'),
        fac.AntdSplitter(
            id='splitter-7',
            items=[
                {
                    'key': 'splitter1',
                    'children': desc('Left'),
                    'collapsible': True,
                },
                {
                    'key': 'splitter2',
                    'children': fac.AntdSplitter(
                        layout='vertical',
                        items=[
                            {
                                'key': 'splitter3',
                                'children': desc('Top'),
                            },
                            {
                                'key': 'splitter4',
                                'children': desc('Bottom'),
                            },
                        ],
                    ),
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
