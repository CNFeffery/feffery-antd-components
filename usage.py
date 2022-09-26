import json
import dash
import pandas as pd
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output, State

app = dash.Dash(__name__)

app.layout = html.Div(
    [

        fac.AntdTable(
            columns=[
                {
                    'title': f'字段{i}',
                    'dataIndex': f'字段{i}',
                    'width': 400
                }
                for i in range(5)
            ],
            data=[
                {
                    **{
                        f'字段{j}': i
                        for j in range(5)
                    },
                    'key': f'row-{i}'
                }
                for i in range(10)
            ],
            bordered=True,
            expandedRowKeyToContent=[
                {
                    'key': f'row-{i}',
                    'content': fac.AntdButton(
                        f'第{i}行展开内容示例',
                        type='primary'
                    )
                }
                for i in range(0, 10, 2)
            ]
        )
    ],
    style={
        'padding': '50px'
    }
)

if __name__ == '__main__':
    app.run(debug=True)
