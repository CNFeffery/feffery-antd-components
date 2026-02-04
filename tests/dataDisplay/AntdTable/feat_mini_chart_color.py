if True:
    import sys

    sys.path.append('../../../')
    import dash
    import numpy as np
    from dash import html
    from feffery_dash_utils.style_utils import style

    import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    fac.AntdSpace(
        [
            fac.AntdTable(
                columns=[
                    {
                        'title': 'mini-line示例1',
                        'dataIndex': 'mini-line示例1',
                        'renderOptions': {
                            'renderType': 'mini-line',
                            'miniChartColor': 'red',
                        },
                        'width': '50%',
                    },
                    {
                        'title': 'mini-line示例2',
                        'dataIndex': 'mini-line示例2',
                        'renderOptions': {
                            'renderType': 'mini-line',
                            'miniChartColor': 'red',
                            'tooltipCustomContent': """(x, data) => `数值：${data[0]?.data?.y.toFixed(3)}`""",
                        },
                        'width': '50%',
                    },
                ],
                data=[
                    {
                        'mini-line示例1': [np.random.rand() for i in range(25)],
                        'mini-line示例2': [np.random.rand() for i in range(25)],
                    }
                ]
                * 3,
                bordered=True,
                style={'width': 300},
            ),
            fac.AntdTable(
                columns=[
                    {
                        'title': 'mini-bar示例1',
                        'dataIndex': 'mini-bar示例1',
                        'renderOptions': {
                            'renderType': 'mini-bar',
                            'miniChartColor': 'red',
                        },
                        'width': '50%',
                    },
                    {
                        'title': 'mini-bar示例2',
                        'dataIndex': 'mini-bar示例2',
                        'renderOptions': {
                            'renderType': 'mini-bar',
                            'miniChartColor': 'red',
                            'tooltipCustomContent': """(x, data) => `数值：${data[0]?.data?.y.toFixed(3)}`""",
                        },
                        'width': '50%',
                    },
                ],
                data=[
                    {
                        'mini-bar示例1': [np.random.rand() for i in range(25)],
                        'mini-bar示例2': [np.random.rand() for i in range(25)],
                    }
                ]
                * 3,
                bordered=True,
                style={'width': 300},
            ),
            fac.AntdTable(
                columns=[
                    {
                        'title': 'mini-area示例1',
                        'dataIndex': 'mini-area示例1',
                        'renderOptions': {
                            'renderType': 'mini-area',
                            'miniChartColor': 'red',
                        },
                        'width': '50%',
                    },
                    {
                        'title': 'mini-area示例2',
                        'dataIndex': 'mini-area示例2',
                        'renderOptions': {
                            'renderType': 'mini-area',
                            'miniChartColor': 'red',
                            'tooltipCustomContent': """(x, data) => `数值：${data[0]?.data?.y.toFixed(3)}`""",
                        },
                        'width': '50%',
                    },
                ],
                data=[
                    {
                        'mini-area示例1': [np.random.rand() for i in range(25)],
                        'mini-area示例2': [np.random.rand() for i in range(25)],
                    }
                ]
                * 3,
                bordered=True,
                style={'width': 300},
            ),
        ],
        direction='vertical',
        style=style(width='100%'),
    ),
    style={'padding': 100},
)


if __name__ == '__main__':
    app.run(debug=True)
