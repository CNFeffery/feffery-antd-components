import dash
import json
import numpy as np
from dash import html
from datetime import datetime
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__, compress=True)

app.layout = html.Div(
    [
        fac.AntdTable(
            columns=[
                {
                    'title': 'int型示例',
                    'dataIndex': 'int型示例',
                    'editable': True,
                    'width': '25%'
                },
                {
                    'title': 'float型示例',
                    'dataIndex': 'float型示例',
                    'editable': True,
                    'width': '25%'
                },
                {
                    'title': 'str型示例',
                    'dataIndex': 'str型示例',
                    'editable': True,
                    'width': '25%'
                },
                {
                    'title': '日期时间示例',
                    'dataIndex': '日期时间示例',
                    'editable': True,
                    'width': '25%'
                },
            ],
            data=[
                {
                    'int型示例': 123,
                    'float型示例': 1.23,
                    'str型示例': '示例字符',
                    '日期时间示例': datetime.now().strftime('%Y-%m-%d %H:%M:%S')
                }
            ] * 3,
            bordered=True
        ),

        fac.AntdTable(
            columns=[
                {
                    'title': 'mini-area示例1',
                    'dataIndex': 'mini-area示例1',
                    'renderOptions': {
                        'renderType': 'mini-area'
                    },
                    'width': '50%'
                },
                {
                    'title': 'mini-area示例2',
                    'dataIndex': 'mini-area示例2',
                    'renderOptions': {
                        'renderType': 'mini-area',
                        'tooltipCustomContent': '''(x, data) => `数值：${data[0]?.data?.y.toFixed(3)}`'''
                    },
                    'width': '50%'
                }
            ],
            data=[
                {
                    'mini-area示例1': [
                        np.random.rand()
                        for i in range(25)
                    ],
                    'mini-area示例2': [
                        np.random.rand()
                        for i in range(25)
                    ]
                }
            ] * 3,
            bordered=True,
            style={
                'width': 300
            }
        )
    ],
    style={
        'padding': 50
    }
)


if __name__ == '__main__':
    app.run(debug=True)
