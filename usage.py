import dash
import numpy as np
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output, State

app = dash.Dash(__name__)

app.layout = html.Div(
    html.Div(
        [
            html.Div(
                id='password-md5-demo-output'
            ),
            fac.AntdInput(
                id='password-md5-demo',
                placeholder='输入框测试',
                mode='password',
                passwordUseMd5=True
            ),

            fac.AntdTreeSelect(
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
            # 需要relative
            fac.AntdTooltip(
                fac.AntdButton(
                    'click事件',
                    type='primary'
                ),
                title='这是一段AntdTooltip提示示例',
                trigger='click'
            ),

            # 需要relative
            fac.AntdTimeRangePicker(
                allowClear=True,
                hourStep=3,
                minuteStep=10,
                secondStep=10
            ),
            # 需要relative
            fac.AntdTimePicker(
                allowClear=True,
                hourStep=3,
                minuteStep=10,
                secondStep=10
            ),

            # 需要relative
            fac.AntdPopover(
                fac.AntdButton(
                    'click事件',
                    type='primary'
                ),
                title='这是一段AntdTooltip提示示例',
                trigger='click'
            ),

            # 需要relative
            fac.AntdPopconfirm(
                fac.AntdButton(
                    '点击触发',
                    type='primary'
                ),
                title='气泡确认测试'
            ),

            # 需要relative
            fac.AntdDropdown(
                title='触发点',
                trigger='click',
                menuItems=[
                    {
                        'title': '子页面1'
                    },
                    {
                        'title': '子页面2'
                    },
                    {
                        'isDivider': True
                    },
                    {
                        'title': '子页面3-1'
                    },
                    {
                        'title': '子页面3-2'
                    }
                ]
            ),

            # 需要relative
            fac.AntdMentions(
                options=[
                    {
                        'label': '费弗里',
                        'value': '费弗里'
                    },
                    {
                        'label': '小A',
                        'value': '小A'
                    },
                    {
                        'label': 'liz',
                        'value': 'liz'
                    }
                ],
                style={
                    'width': '400px'
                }
            ),

            fac.AntdCascader(
                options=[
                    {
                        'value': '节点1',
                        'label': '节点1',
                        'children': [
                            {
                                'value': '节点1-1',
                                'label': '节点1-1'
                            },
                            {
                                'value': '节点1-2',
                                'label': '节点1-2',
                                'children': [
                                    {
                                        'value': '节点1-2-1',
                                        'label': '节点1-2-1'
                                    },
                                    {
                                        'value': '节点1-2-2',
                                        'label': '节点1-2-2'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        'value': '节点2',
                        'label': '节点2',
                        'children': [
                            {
                                'value': '节点2-1',
                                'label': '节点2-1'
                            },
                            {
                                'value': '节点2-2',
                                'label': '节点2-2'
                            }
                        ]
                    }
                ],
                style={
                    'width': '300px'
                }
            ),
            fac.AntdTable(
                columns=[
                    {
                        'title': f'字段{i}',
                        'dataIndex': f'字段{i}'
                    }
                    for i in range(1, 6)
                ],
                data=[
                    {
                        f'字段{i}': np.random.randint(1, 5)
                        for i in range(1, 6)
                    }
                    for _ in range(10)
                ],
                filterOptions={
                    '字段1': {
                        'filterMode': 'keyword'
                    },
                    '字段3': {
                        'filterMode': 'checkbox',
                        'filterCustomItems': [1, 2, 3]
                    }
                }
            ),

            fac.AntdSelect(
                placeholder='请选择国家：',
                options=[
                    {'label': '中国', 'value': '中国'},
                    {'label': '美国', 'value': '美国'},
                    {'label': '俄罗斯', 'value': '俄罗斯'},
                    {'label': '德国', 'value': '德国', 'disabled': True},
                    {'label': '加拿大', 'value': '加拿大'}
                ],
                style={
                    # 使用css样式固定宽度
                    'width': '200px'
                }
            ),

            # 需要relative
            fac.AntdDatePicker(
                defaultValue='2021-01-01 23:00:00',
                showTime=True
            ),

            # 需要relative
            fac.AntdDateRangePicker(
                defaultValue=['2021-01-01 17:00:00', '2021-01-09 18:00:00'],
                showTime=True
            ),


            fac.AntdComment(
                authorName='费弗里',
                authorNameHref='https://github.com/CNFeffery/feffery-antd-components',
                publishTime={
                    'value': '2022-01-01 19:29:01',
                    'format': 'YYYY-MM-DD hh:mm:ss'
                },
                commentContent='我希望feffery-components项目系列组件可以帮助更多人快速开发心仪的网站应用！😀'
            ),

            html.Div(
                style={
                    'height': '1000px'
                }
            )

        ],
        style={
            'padding': '100px 200px',
            'position': 'relative'
        }
    ),
    style={
        'margin': '100px',
        'border': '1px solid grey',
        'height': '800px',
        'overflowY': 'auto'
    }
)

@app.callback(
    Output('password-md5-demo-output', 'children'),
    Input('password-md5-demo', 'md5Value')
)
def test(md5Value):

    return md5Value




if __name__ == '__main__':
    app.run_server(debug=True)
