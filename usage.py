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
            locale='en-us',
            columns=[
                {
                    'title': '默认的checkbox模式',
                    'dataIndex': f'默认的checkbox模式'
                },
                {
                    'title': '自定义选项的checkbox模式',
                    'dataIndex': '自定义选项的checkbox模式'
                },
                {
                    'title': 'keyword模式标题',
                    'dataIndex': 'keyword模式'
                }
            ],
            data=[
                {
                    '默认的checkbox模式': i,
                    '自定义选项的checkbox模式': i,
                    'keyword模式': i
                }
                for i in range(5)
            ],
            bordered=True,
            filterOptions={
                '默认的checkbox模式': {
                    'filterSearch': True
                },
                '自定义选项的checkbox模式': {
                    'filterMode': 'checkbox',
                    'filterCustomItems': [1, 2, 3]
                },
                'keyword模式': {
                    'filterMode': 'keyword'
                }
            }
        )
    ],
    style={
        'padding': '100px'
    }
)


if __name__ == '__main__':
    app.run_server(debug=True)
