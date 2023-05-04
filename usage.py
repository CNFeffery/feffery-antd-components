import uuid
import json
import dash
import random
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdButton(
            '刷新位置',
            id='refresh-dropdown-position'
        ),
        html.Div(
            id='dropdown-container'
        ),
        fac.AntdTree(
            id='tree-context-menu-test',
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
                    ],
                    'contextMenu': [
                        {
                            'key': '操作1',
                            'label': '操作1',
                            'icon': 'antd-compass'
                        },
                        {
                            'key': '操作2',
                            'label': '操作2',
                            'icon': 'antd-function'
                        },
                        {
                            'key': '操作3',
                            'label': '操作3'
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
                    ],
                    'contextMenu': [
                        {
                            'key': '操作1',
                            'label': '操作1'
                        }
                    ]
                }
            ],
            defaultExpandAll=True
        ),
        html.Pre(
            id='tree-context-menu-test-output'
        ),
        fac.AntdTable(
            columns=[
                {
                    'title': '字段1',
                    'dataIndex': '字段1'
                }
            ],
            data=[
                {
                    'key': f'row-{i}',
                    '字段1': '测试',
                    'children': [
                        {
                            'key': f'row-{i}-{j}',
                            '字段1': '测试1',
                            'children': [
                                {
                                    'key': f'row-{i}-{j}-{k}',
                                    '字段1': '测试2'
                                }
                                for k in range(3)
                            ]
                        }
                        for j in range(5)
                    ]
                }
                for i in range(3)
            ],
            bordered=True
        )
    ],
    style={
        'padding': 100
    }
)


@app.callback(
    Output('tree-context-menu-test-output', 'children'),
    Input('tree-context-menu-test', 'clickedContextMenu'),
    prevent_initial_call=True
)
def test(clickedContextMenu):

    return json.dumps(
        clickedContextMenu,
        indent=4,
        ensure_ascii=False
    )


@app.callback(
    Output('dropdown-container', 'children'),
    Input('refresh-dropdown-position', 'nClicks'),
    prevent_initial_call=True
)
def dropdown_test(nClicks):

    return fac.AntdDropdown(
        key=str(uuid.uuid4()),
        visible=True,
        freePosition=True,
        freePositionStyle={
            'left': random.uniform(100, 500),
            'top': random.uniform(100, 500)
        },
        menuItems=[
            {
                'title': f'右键菜单选项{i}',
                'key': f'右键菜单选项{i}'
            }
            for i in range(1, 6)
        ],
        trigger='click'
    )


if __name__ == '__main__':
    app.run(debug=True)
