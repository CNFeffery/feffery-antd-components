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
                    'title': '基础示例',
                    'dataIndex': '基础示例',
                    'width': '25%',
                    'filterResetToDefaultFilteredValue': True
                },
                {
                    'title': '自定义选项',
                    'dataIndex': '自定义选项',
                    'width': '25%'
                },
                {
                    'title': '单选模式',
                    'dataIndex': '单选模式',
                    'width': '25%'
                },
                {
                    'title': '启用搜索框',
                    'dataIndex': '启用搜索框',
                    'width': '25%'
                }
            ],
            data=[
                {
                    '基础示例': s,
                    '自定义选项': s,
                    '单选模式': s,
                    '启用搜索框': s,
                }
                for s in list('abced')
            ],
            filterOptions={
                '基础示例': {},
                '自定义选项': {
                    'filterCustomItems': list('abcdefghijk')
                },
                '单选模式': {
                    'filterMultiple': False
                },
                '启用搜索框': {
                    'filterSearch': True
                }
            },
            defaultFilteredValues={
                '基础示例': ['a', 'c']
            }
        )
    ],
    style={
        'padding': 50
    }
)


if __name__ == '__main__':
    app.run(debug=True)
