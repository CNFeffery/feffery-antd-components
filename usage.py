import dash
import json
import uuid
import numpy as np
from flask import request
from dash import html
from requests import options
import feffery_antd_components as fac
from dash.dependencies import Input, Output, ALL

app = dash.Dash(
    __name__
)

app.layout = html.Div(
    [

        fac.AntdTreeSelect(
            treeDefaultExpandAll=True,
            treeData=[
                {
                    "title": "Node1",
                    "value": "0-0",
                    "key": "0-0",
                    "children": [
                        {
                            "title": "Child Node1",
                            "value": "0-0-0",
                            "key": "0-0-0"
                        }
                    ]
                },
                {
                    "title": "Node2",
                    "value": "0-1",
                    "key": "0-1",
                    "children": [
                        {
                            "title": "Child Node3",
                            "value": "0-1-0",
                            "key": "0-1-0"
                        },
                        {
                            "title": "Child Node4",
                            "value": "0-1-1",
                            "key": "0-1-1"
                        },
                        {
                            "title": "Child Node5",
                            "value": "0-1-2",
                            "key": "0-1-2"
                        }
                    ]
                }
            ],
            style={
                'width': '250px'
            }
        ),

        fac.AntdTree(
            defaultExpandAll=True,
            treeData=[
                {
                    'title': '重庆市',
                    'key': '重庆市',
                    'children': [
                        {
                            'title': '渝北区',
                            'key': '渝北区'
                        },
                        {
                            'title': '江北区',
                            'key': '江北区',
                            'disabled': True
                        }
                    ]
                },
                {
                    'title': '北京市',
                    'key': '北京市',
                    'children': [
                        {
                            'title': '西城区',
                            'key': '西城区'
                        },
                        {
                            'title': '东城区',
                            'key': '东城区'
                        }
                    ]
                },
                {
                    'title': '四川省',
                    'key': '四川省',
                    'children': [
                        {
                            'title': '成都市',
                            'key': '成都市',
                            'children': [
                                {
                                    'title': '天府新区',
                                    'key': '天府新区'
                                }
                            ]
                        }
                    ]
                }
            ]
        ),

        fac.AntdCard(
            [
                fac.AntdCardGrid(
                    f'网格{i}',
                    style={
                        'width': '25%',
                        'display': 'flex',
                        'justifyContent': 'center',
                        'alignItems': 'center'
                    }
                )
                for i in range(10)
            ],
            title='卡片网格示例',
            style={
                'width': '800px',
                'marginBottom': '10px'
            }
        ),

        fac.AntdTable(
            columns=[
                {
                    'title': 'mini-line示例',
                    'dataIndex': 'mini-line示例',
                    'width': '20%',
                    'renderOptions': {
                        'renderType': 'mini-line',
                        'tooltipCustomContent': '''(x, data) => {
                            return `<div style="font-size: 20px;height: 200px;display: flex;align-items: center;">${data[0]?.data?.y}</ div>`;
                        }
                        '''
                    }
                },
                {
                    'title': 'mini-bar示例',
                    'dataIndex': 'mini-bar示例',
                    'width': '20%',
                    'renderOptions': {
                        'renderType': 'mini-bar'
                    }
                },
                {
                    # 注意，mini-progress模式接受的输入应当在0到1之间
                    'title': 'mini-progress示例',
                    'dataIndex': 'mini-progress示例',
                    'width': '20%',
                    'renderOptions': {
                        'renderType': 'mini-progress'
                    }
                },
                {
                    # 注意，mini-ring-progress模式接受的输入应当在0到1之间
                    'title': 'mini-ring-progress示例',
                    'dataIndex': 'mini-ring-progress示例',
                    'width': '20%',
                    'renderOptions': {
                        'renderType': 'mini-ring-progress'
                    }
                },
                {
                    'title': 'mini-area示例',
                    'dataIndex': 'mini-area示例',
                    'width': '20%',
                    'renderOptions': {
                        'renderType': 'mini-area'
                    }
                }
            ],
            data=[
                {
                    'key': i,
                    'mini-line示例': np.random.randint(1, 20, 10),
                    'mini-bar示例': np.random.randint(1, 20, 10),
                    'mini-progress示例': np.random.rand(),
                    'mini-ring-progress示例': np.random.rand(),
                    'mini-area示例': np.random.randint(1, 20, 10)
                }
                for i in range(3)
            ],
            miniChartHeight=60,
            bordered=True
        )
    ],
    style={
        'padding': '100px'
    }
)

if __name__ == '__main__':
    app.run_server(debug=True)
