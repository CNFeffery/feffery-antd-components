import json
import dash
from faker import Faker
import pandas as pd
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output, State

faker = Faker(locale='zh_CN')

app = dash.Dash(__name__)

app.layout = html.Div(
    [

        fac.AntdInput(
            value='测试测试',
            readOnly=True
        ),

        fac.AntdTable(
            columns=[
                {
                    'title': '国家名示例',
                    'dataIndex': '国家名示例',
                    'width': '20%'
                },
                {
                    'title': '省份名示例',
                    'dataIndex': '省份名示例',
                    'width': '20%'
                },
                {
                    'title': '城市名示例',
                    'dataIndex': '城市名示例',
                    'width': '20%'
                },
                {
                    'title': '日期示例',
                    'dataIndex': '日期示例',
                    'width': '20%'
                },
                {
                    'title': '邮编示例',
                    'dataIndex': '邮编示例',
                    'width': '20%'
                }
            ],
            data=[
                {
                    'key': i,
                    '国家名示例': faker.country(),
                    '省份名示例': faker.province(),
                    '城市名示例': faker.city_name(),
                    '日期示例': faker.date(pattern="%Y-%m-%d", end_datetime=None),
                    '邮编示例': faker.postcode()
                }
                for i in range(100)
            ],
            bordered=True,
            pagination={
                'pageSize': 10,
                'current': 5,
                'pageSizeOptions': [5, 10, 15, 20, 25],
                'showTotalPrefix': '本次共取得示例数据 ',
                'showTotalSuffix': ' 条！😋',
                'position': 'bottomCenter'
            }
        )
    ],
    style={
        'padding': '50px'
    }
)

if __name__ == '__main__':
    app.run(debug=True)
