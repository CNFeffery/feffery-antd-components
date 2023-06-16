import json
import dash
import random
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output, State

app = dash.Dash(__name__)

demo_value = None

app.layout = html.Div(
    [

        fac.AntdTable(
            columns=[
                {
                    'title': '字段1-1',
                    'dataIndex': '字段1-1',
                    'group': ['根节点', '字段1']
                },
                {
                    'title': '字段1-2-1',
                    'dataIndex': '字段1-2-1',
                    'group': ['根节点', '字段1', '字段1-2']
                },
                {
                    'title': '字段1-2-2',
                    'dataIndex': '字段1-2-2',
                    'group': ['根节点', '字段1', '字段1-2']
                },
                {
                    'title': '字段2',
                    'dataIndex': '字段2',
                    'group': ['根节点']
                },
                {
                    'title': '字段xx',
                    'dataIndex': '字段xx'
                }
            ],
            columnsWidthResizable=True,
            data=[
                {
                    '字段1-1': 1,
                    '字段1-2-1': 1,
                    '字段1-2-2': 1,
                    '字段2': 1,
                    '字段xx': 1
                }
            ] * 100,
            bordered=True
        )
    ],
    style={
        'padding': 50
    }
)


if __name__ == '__main__':
    app.run(debug=True)
