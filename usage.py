import dash
import numpy as np
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdTable(
            columns=[
                {
                    'title': '数值测试1',
                    'dataIndex': '数值测试1',
                    'width': '50%',
                    'renderOptions': {
                        'renderType': 'custom-format'
                    },
                },
                {
                    'title': '数值测试2',
                    'dataIndex': '数值测试2',
                    'width': '50%',
                    'renderOptions': {
                        'renderType': 'custom-format'
                    },
                },
            ],
            data=[
                {
                    '数值测试1': np.random.rand(),
                    '数值测试2': np.random.rand(),
                }
                for i in range(10)
            ],
            sortOptions={
                'sortDataIndexes': [
                    '数值测试1',
                    '数值测试2',
                ]
            },
            bordered=True,
            customFormatFuncs={
                '数值测试1': '(x, record) => `${(x*100).toFixed(2)}% - ${record["数值测试2"].toFixed(2)}`',
                '数值测试2': '(x) => x <= 0.5 ? `低水平：${x.toFixed(2)}` : `高水平：${x.toFixed(2)}`',
            },
            style={'width': '500px'},
        )
    ],
    style={'padding': 50},
)

if __name__ == '__main__':
    app.run(debug=True)
