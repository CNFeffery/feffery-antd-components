if True:
    import sys

    sys.path.append('../../../')
    from dash import Dash, html
    import feffery_antd_components as fac
    from feffery_dash_utils.style_utils import style

app = Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdSpace(
            [
                '基础使用：',
                fac.AntdSpace(
                    [
                        fac.AntdSplitter(
                            items=[
                                {
                                    'children': fac.AntdCenter(
                                        f'item{i}',
                                        style={
                                            'height': '100%'
                                        },
                                    )
                                }
                                for i in range(1, 3)
                            ],
                            style={
                                'height': 200,
                                'boxShadow': '0 0 10px rgba(0, 0, 0, 0.1)',
                            },
                        ),
                        fac.AntdSplitter(
                            items=[
                                {
                                    'children': fac.AntdCenter(
                                        f'item{i}',
                                        style={
                                            'height': '100%'
                                        },
                                    )
                                }
                                for i in range(1, 4)
                            ],
                            style={
                                'height': 200,
                                'boxShadow': '0 0 10px rgba(0, 0, 0, 0.1)',
                            },
                        ),
                    ],
                    direction='vertical',
                    style={'width': '100%'},
                ),
                '垂直布局：',
                fac.AntdSplitter(
                    items=[
                        {
                            'children': fac.AntdCenter(
                                f'item{i}',
                                style={'height': '100%'},
                            )
                        }
                        for i in range(1, 3)
                    ],
                    layout='vertical',
                    style={
                        'height': 300,
                        'boxShadow': '0 0 10px rgba(0, 0, 0, 0.1)',
                    },
                ),
                '默认尺寸：',
                fac.AntdSpace(
                    [
                        fac.AntdSplitter(
                            items=[
                                {
                                    'children': fac.AntdCenter(
                                        '30%',
                                        style={
                                            'height': '100%'
                                        },
                                    ),
                                    'defaultSize': '30%',
                                },
                                {
                                    'children': fac.AntdCenter(
                                        '70%',
                                        style={
                                            'height': '100%'
                                        },
                                    ),
                                    'defaultSize': '70%',
                                },
                            ],
                            style={
                                'height': 200,
                                'boxShadow': '0 0 10px rgba(0, 0, 0, 0.1)',
                            },
                        ),
                        fac.AntdSplitter(
                            items=[
                                {
                                    'children': fac.AntdCenter(
                                        '30%',
                                        style={
                                            'height': '100%'
                                        },
                                    ),
                                    'defaultSize': '30%',
                                },
                                {
                                    'children': fac.AntdCenter(
                                        '70%',
                                        style={
                                            'height': '100%'
                                        },
                                    ),
                                    'defaultSize': '70%',
                                },
                            ],
                            layout='vertical',
                            style={
                                'height': 300,
                                'boxShadow': '0 0 10px rgba(0, 0, 0, 0.1)',
                            },
                        ),
                    ],
                    direction='vertical',
                    style={'width': '100%'},
                ),
                '限制尺寸调整范围：',
                fac.AntdSpace(
                    [
                        fac.AntdSplitter(
                            items=[
                                {
                                    'children': fac.AntdCenter(
                                        'min: 50 max: 90%',
                                        style={
                                            'height': '100%'
                                        },
                                    ),
                                    'defaultSize': '30%',
                                    'min': 50,
                                    'max': '90%',
                                },
                                {
                                    'children': fac.AntdCenter(
                                        '70%',
                                        style={
                                            'height': '100%'
                                        },
                                    ),
                                    'defaultSize': '70%',
                                },
                            ],
                            style={
                                'height': 200,
                                'boxShadow': '0 0 10px rgba(0, 0, 0, 0.1)',
                            },
                        ),
                        fac.AntdSplitter(
                            items=[
                                {
                                    'children': fac.AntdCenter(
                                        'min: 50 max: 90%',
                                        style={
                                            'height': '100%'
                                        },
                                    ),
                                    'defaultSize': '30%',
                                    'min': 50,
                                    'max': '90%',
                                },
                                {
                                    'children': fac.AntdCenter(
                                        '70%',
                                        style={
                                            'height': '100%'
                                        },
                                    ),
                                    'defaultSize': '70%',
                                },
                            ],
                            layout='vertical',
                            style={
                                'height': 300,
                                'boxShadow': '0 0 10px rgba(0, 0, 0, 0.1)',
                            },
                        ),
                    ],
                    direction='vertical',
                    style={'width': '100%'},
                ),
                '可折叠：',
                fac.AntdSpace(
                    [
                        fac.AntdSplitter(
                            items=[
                                {
                                    'children': fac.AntdCenter(
                                        f'item{i}',
                                        style={
                                            'height': '100%'
                                        },
                                    ),
                                    'collapsible': True,
                                }
                                for i in range(1, 3)
                            ],
                            style={
                                'height': 200,
                                'boxShadow': '0 0 10px rgba(0, 0, 0, 0.1)',
                            },
                        ),
                        fac.AntdSplitter(
                            items=[
                                {
                                    'children': fac.AntdCenter(
                                        f'item{i}',
                                        style={
                                            'height': '100%'
                                        },
                                    ),
                                    'collapsible': True,
                                }
                                for i in range(1, 3)
                            ],
                            layout='vertical',
                            style={
                                'height': 300,
                                'boxShadow': '0 0 10px rgba(0, 0, 0, 0.1)',
                            },
                        ),
                    ],
                    direction='vertical',
                    style={'width': '100%'},
                ),
                '嵌套组合：',
                fac.AntdSpace(
                    [
                        fac.AntdSplitter(
                            items=[
                                {
                                    'children': fac.AntdCenter(
                                        'item1',
                                        style={
                                            'height': '100%'
                                        },
                                    ),
                                    'defaultSize': '30%',
                                },
                                {
                                    'children': fac.AntdSplitter(
                                        items=[
                                            {
                                                'children': fac.AntdCenter(
                                                    'item2',
                                                    style={
                                                        'height': '100%'
                                                    },
                                                ),
                                                'defaultSize': '30%',
                                            },
                                            {
                                                'children': fac.AntdCenter(
                                                    'item3',
                                                    style={
                                                        'height': '100%'
                                                    },
                                                ),
                                                'defaultSize': '70%',
                                            },
                                        ],
                                        layout='vertical',
                                        style={
                                            'height': '100%'
                                        },
                                    ),
                                    'defaultSize': '70%',
                                },
                            ],
                            style={
                                'height': 200,
                                'boxShadow': '0 0 10px rgba(0, 0, 0, 0.1)',
                            },
                        )
                    ],
                    direction='vertical',
                    style={'width': '100%'},
                ),
            ],
            direction='vertical',
            style=style(width='100%'),
        )
    ],
    style=style(padding=50),
)

if __name__ == '__main__':
    app.run(debug=True)
