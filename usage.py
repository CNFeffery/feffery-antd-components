import dash
import uuid
import json
import time
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__, compress=True)

app.layout = html.Div(
    [
        fac.AntdSpace(
            [
                fac.AntdInput(
                    id='tree-search-demo-keyword',
                    placeholder='请输入搜索关键词',
                    value='省',
                    style={
                        'width': '100%'
                    }
                ),
                fac.AntdTree(
                    id='tree-search-demo',
                    treeData=[
                        {
                            'title': '四川省',
                            'key': '四川省',
                            'children': [
                                {
                                    'title': '成都市',
                                    'key': '成都市'
                                },
                                {
                                    'title': '广安市',
                                    'key': '广安市'
                                }
                            ]
                        },
                        {
                            'title': '重庆市',
                            'key': '重庆市',
                            'children': [
                                {
                                    'title': '渝中区',
                                    'key': '渝中区',
                                    'children': [
                                        {
                                            'title': '解放碑街道',
                                            'key': '解放碑街道'
                                        }
                                    ]
                                },
                                {
                                    'title': '渝北区',
                                    'key': '渝北区'
                                }
                            ]
                        }
                    ],
                    defaultExpandAll=True,
                    highlightStyle={
                        'background': '#ffffb8',
                        'padding': 0
                    }
                )
            ],
            direction='vertical',
            style={
                'width': '100%'
            }
        )
    ],
    style={
        'padding': '50px 100px'
    }
)

app.clientside_callback(
    '''(value) => value''',
    Output('tree-search-demo', 'searchKeyword'),
    Input('tree-search-demo-keyword', 'value')
)

if __name__ == '__main__':
    app.run(debug=True)
