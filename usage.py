import dash
import json
import uuid
import numpy as np
from flask import request
from dash import html
from requests import options
import feffery_antd_components as fac
from datetime import datetime
from dash.dependencies import Input, Output, ALL, State
from faker import Faker

faker = Faker(locale='zh_CN')

app = dash.Dash(
    __name__
)


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
        'padding': '100px'
    }
)


if __name__ == '__main__':
    app.run_server(debug=True)
