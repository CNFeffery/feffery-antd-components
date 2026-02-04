if True:
    import sys

    sys.path.append('../../../')
    import dash
    from dash import html

    import feffery_antd_components as fac

app = dash.Dash(__name__, compress=True)

app.layout = html.Div(
    [
        fac.AntdSpace(
            [
                fac.AntdTable(
                    columns=[
                        {
                            'title': 'mini-progress示例1',
                            'dataIndex': 'mini-progress示例1',
                            'renderOptions': {'renderType': 'mini-progress'},
                        },
                        {
                            'title': 'mini-progress示例2',
                            'dataIndex': 'mini-progress示例2',
                            'renderOptions': {
                                'renderType': 'mini-progress',
                                'progressOneHundredPercentColor': '#f08c00',
                            },
                        },
                        {
                            'title': 'mini-progress示例3',
                            'dataIndex': 'mini-progress示例3',
                            'renderOptions': {
                                'renderType': 'mini-progress',
                                'progressShowPercent': True,
                                'progressStrokeLinecap': 'round',
                            },
                        },
                        {
                            'title': 'mini-progress示例4',
                            'dataIndex': 'mini-progress示例4',
                            'renderOptions': {
                                'renderType': 'mini-progress',
                                'progressSize': 16,
                            },
                        },
                        {
                            'title': 'mini-progress示例5',
                            'dataIndex': 'mini-progress示例5',
                            'renderOptions': {
                                'renderType': 'mini-progress',
                                'progressColor': {
                                    'from': '#3c8ce7',
                                    'to': '#00eaff',
                                },
                            },
                        },
                        {
                            'title': 'mini-progress示例6',
                            'dataIndex': 'mini-progress示例6',
                            'renderOptions': {
                                'renderType': 'mini-progress',
                                'progressShowPercent': True,
                                'progressStrokeLinecap': 'round',
                                'progressPercentPrecision': 2,
                            },
                        },
                    ],
                    data=[
                        {
                            'mini-progress示例1': x,
                            'mini-progress示例2': x,
                            'mini-progress示例3': x,
                            'mini-progress示例4': x,
                            'mini-progress示例5': x,
                            'mini-progress示例6': x + 0.00123456,
                        }
                        for x in [0, 0.66, 1]
                    ],
                    bordered=True,
                    miniChartHeight=50,
                    tableLayout='fixed',
                ),
                fac.AntdTable(
                    columns=[
                        {
                            'title': f'{align} - {_type}',
                            'dataIndex': f'{align} - {_type}',
                            'renderOptions': {
                                'renderType': 'mini-progress',
                                'progressPercentPosition': {
                                    'align': align,
                                    'type': _type,
                                },
                                'progressShowPercent': True,
                            },
                        }
                        for align in [
                            'start',
                            'center',
                            'end',
                        ]
                        for _type in ['inner', 'outer']
                    ],
                    data=[
                        {
                            f'{align} - {_type}': x
                            for align in [
                                'start',
                                'center',
                                'end',
                            ]
                            for _type in ['inner', 'outer']
                        }
                        for x in [0, 0.66, 1]
                    ],
                    bordered=True,
                    miniChartHeight=50,
                    tableLayout='fixed',
                ),
            ],
            direction='vertical',
            style={'width': '100%'},
        )
    ],
    style={'padding': 50},
)


if __name__ == '__main__':
    app.run(debug=True)
