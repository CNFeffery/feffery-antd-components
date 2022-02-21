import dash
import numpy as np
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output, State

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdProgress(
            percent=80
        ),
        html.Div(
            style={
                'height': '100px'
            }
        ),
        html.Div(
            [

                html.Div(
                    [

                        html.Div(
                            fac.AntdMenu(
                                menuItems=[
                                    {
                                        'component': 'SubMenu',
                                        'props': {
                                            'key': f'{sub_menu}',
                                            'title': f'子菜单{sub_menu}'
                                        },
                                        'children': [
                                            {
                                                'component': 'ItemGroup',
                                                'props': {
                                                    'key': f'{sub_menu}-{item_group}',
                                                    'title': f'菜单项分组{sub_menu}-{item_group}'
                                                },
                                                'children': [
                                                    {
                                                        'component': 'Item',
                                                        'props': {
                                                            'key': f'{sub_menu}-{item_group}-{item}',
                                                            'title': f'菜单项{sub_menu}-{item_group}-{item}'
                                                        }
                                                    }
                                                    for item in range(1, 3)
                                                ]
                                            }
                                            for item_group in range(1, 3)
                                        ]
                                    }
                                    for sub_menu in range(1, 5)
                                ],
                                mode='horizontal'
                            ),
                            style={
                                'width': '250px'
                            }
                        ),

                        html.Div(
                            fac.AntdMenu(
                                menuItems=[
                                    {
                                        'component': 'SubMenu',
                                        'props': {
                                            'key': f'{sub_menu}',
                                            'title': f'子菜单{sub_menu}'
                                        },
                                        'children': [
                                            {
                                                'component': 'ItemGroup',
                                                'props': {
                                                    'key': f'{sub_menu}-{item_group}',
                                                    'title': f'菜单项分组{sub_menu}-{item_group}'
                                                },
                                                'children': [
                                                    {
                                                        'component': 'Item',
                                                        'props': {
                                                            'key': f'{sub_menu}-{item_group}-{item}',
                                                            'title': f'菜单项{sub_menu}-{item_group}-{item}'
                                                        }
                                                    }
                                                    for item in range(1, 3)
                                                ]
                                            }
                                            for item_group in range(1, 3)
                                        ]
                                    }
                                    for sub_menu in range(1, 5)
                                ]
                            ),
                            style={
                                'width': '250px'
                            }
                        ),


                        fac.AntdTable(
                            columns=[
                                {
                                    'title': '字段示例1',
                                    'dataIndex': '字段示例1'
                                },
                                {
                                    'title': '字段示例2',
                                    'dataIndex': '字段示例2'
                                },
                                {
                                    'title': '字段示例3',
                                    'dataIndex': '字段示例3'
                                }
                            ],
                            data=[
                                {
                                    '字段示例1': i,
                                    '字段示例2': i,
                                    '字段示例3': i
                                }
                                for i in range(5)
                            ],
                            rowSelectionType='radio'
                        ),

                        fac.AntdSpace(
                            [
                                fac.AntdButton(
                                    [
                                        fac.AntdIcon(
                                            icon='md-power-settings-new'
                                        ),
                                        'md-power-settings-new'
                                    ]
                                ),
                                fac.AntdButton(
                                    [
                                        fac.AntdIcon(
                                            icon='md-layers'
                                        ),
                                        'md-layers'
                                    ],
                                    type='primary'
                                ),
                                fac.AntdButton(
                                    [
                                        fac.AntdIcon(
                                            icon='fc-repair'
                                        ),
                                        'fc-repair'
                                    ],
                                    type='dashed'
                                )
                            ]
                        ),

                        fac.AntdTable(
                            columns=[
                                {
                                    'title': 'ellipsis内容省略示例',
                                    'dataIndex': 'ellipsis内容省略示例',
                                    'renderOptions': {'renderType': 'copyable'}
                                }
                            ],
                            data=[
                                {
                                    'key': i,
                                    'ellipsis内容省略示例': '这是一段废话，用来演示超长内容再渲染巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉'
                                }
                                for i in range(5)
                            ],
                            bordered=True,
                            style={
                                'width': '250px'
                            }
                        ),
                        fac.AntdTitle(
                            'AntdIcon测试区域',
                            level=4
                        ),
                        fac.AntdSpace(
                            [
                                fac.AntdButton(
                                    [
                                        fac.AntdIcon(icon='search', style={
                                            'marginRight': '5px'}),
                                        '搜索'
                                    ]
                                ),

                                fac.AntdAvatar(
                                    mode='icon',
                                    icon='fc-vlc'
                                )
                            ]
                        ),
                        fac.AntdBreadcrumb(
                            items=[
                                {
                                    'title': 'feffery-components仓库主页',
                                    'href': 'https://github.com/CNFeffery/feffery-dash-components',
                                    'target': '_blank',
                                    'icon': 'github'
                                },
                                {
                                    'title': 'feffery-antd-components文档首页',
                                    'href': '/',
                                    'target': '_blank',
                                    'icon': 'home'
                                },
                                {
                                    'title': 'AntdBreadcrumb文档页',
                                    'href': '/AntdBreadcrumb',
                                    'target': '_blank',
                                    'icon': 'fc-approval'
                                }
                            ]
                        ),

                        fac.AntdDraggerUpload(
                            apiUrl='/upload/',
                            fileMaxSize=1,
                            fileListMaxLength=1,
                            text='拖拽上传示例',
                            hint='点击或拖拽文件至此处进行上传'
                        ),


                        fac.AntdDropdown(
                            title='触发点',
                            menuItems=[
                                {
                                    'title': '子页面1',
                                    'icon': 'global'
                                },
                                {
                                    'title': '子页面1',
                                    'icon': 'fc-plus'
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

                        html.Div(
                            fac.AntdMenu(
                                menuItems=[
                                    {
                                        'component': 'Item',
                                        'props': {
                                            'key': f'图标{icon}',
                                            'title': f'图标{icon}',
                                            'icon': icon
                                        }
                                    }
                                    for icon in [
                                        'home',
                                        'cloud-upload',
                                        'bar-chart',
                                        'pie-chart',
                                        'dot-chart',
                                        'line-chart',
                                        'apartment',
                                        'app-store',
                                        'app-store-add',
                                        'bell',
                                        'calculator',
                                        'calendar',
                                        'database',
                                        'history',
                                        'fc-services',
                                        'fc-questions',
                                        'fc-organization'
                                    ]
                                ],
                                mode='inline'
                            ),
                            style={
                                'width': '250px'
                            }
                        ),
                        fac.AntdButton(
                            '触发全局提示框', id='message-trigger-button-demo1', type='primary'),
                        html.Div(id='message-container-demo1'),

                        fac.AntdButton(
                            '触发对话框',
                            type='primary',
                            id='modal-demo-trigger-1'
                        ),

                        fac.AntdModal(
                            fac.AntdText('对话框内容测试'),
                            id='modal-demo-1',
                            visible=False,
                            title={
                                'content': '标题测试',
                                'prefixIcon': 'search'
                            },
                            renderFooter=True
                        ),


                        fac.AntdPopover(
                            fac.AntdButton(
                                '鼠标悬浮于此',
                                type='primary'
                            ),
                            content=[
                                fac.AntdButton(
                                    '鼠标悬浮于此',
                                    type='primary'
                                ),
                                fac.AntdButton(
                                    '鼠标悬浮于此',
                                    type='primary'
                                ),
                                fac.AntdButton(
                                    '鼠标悬浮于此',
                                    type='primary'
                                ),
                                fac.AntdTimeline(
                                    items=[
                                        {
                                            'content': '训练数据导入',
                                            'icon': 'md-cloud-upload',
                                            'iconStyle': {
                                                'fontSize': '18px'
                                            }
                                        },
                                        {
                                            'content': '模型训练',
                                            'icon': 'clock-circle',
                                            'iconStyle': {
                                                'fontSize': '18px'
                                            }
                                        },
                                        {
                                            'content': '模型持久化',
                                            'icon': 'fc-accept-database',
                                            'iconStyle': {
                                                'fontSize': '18px'
                                            }
                                        },
                                        {
                                            'content': '模型发布',
                                            'icon': 'md-cloud-done',
                                            'iconStyle': {
                                                'fontSize': '18px'
                                            }
                                        }
                                    ],
                                    style={
                                        'margin': '20px'
                                    }
                                )
                            ],
                            title={
                                'content': '标题前缀图标测试',
                                'prefixIcon': 'fc-search'
                            }
                        ),


                        fac.AntdTimeline(
                            items=[
                                {
                                    'content': '训练数据导入',
                                    'icon': 'md-cloud-upload',
                                    'iconStyle': {
                                        'fontSize': '18px'
                                    }
                                },
                                {
                                    'content': '模型训练',
                                    'icon': 'clock-circle',
                                    'iconStyle': {
                                        'fontSize': '18px'
                                    }
                                },
                                {
                                    'content': '模型持久化',
                                    'icon': 'fc-accept-database',
                                    'iconStyle': {
                                        'fontSize': '18px'
                                    }
                                },
                                {
                                    'content': '模型发布',
                                    'icon': 'md-cloud-done',
                                    'iconStyle': {
                                        'fontSize': '18px'
                                    }
                                }
                            ],
                            style={
                                'margin': '20px'
                            }
                        ),


                        fac.AntdTree(
                            treeData=[
                                {
                                    'title': '负责人A',
                                    'key': '负责人A',
                                    'icon': 'user',
                                    'children': [
                                        {
                                            'title': '数仓1',
                                            'key': '数仓1',
                                            'icon': 'database',
                                            'children': [
                                                {
                                                    'title': f'业务表1-{i}',
                                                    'key': f'业务表1-{i}',
                                                    'icon': 'table'
                                                }
                                                for i in range(5)
                                            ]
                                        },
                                        {
                                            'title': '数仓2',
                                            'key': '数仓2',
                                            'icon': 'database',
                                            'children': [
                                                {
                                                    'title': f'业务表2-{i}',
                                                    'key': f'业务表2-{i}',
                                                    'icon': 'fc-search'
                                                }
                                                for i in range(5)
                                            ]
                                        }
                                    ]
                                }
                            ],
                            # 设置默认全部展开
                            defaultExpandAll=True,
                            checkable=True
                        ),


                        fac.AntdStatistic(
                            title='统计数值示例',
                            titleTooltip='这是一段指标说明内容巴拉巴拉'*10,
                            value=1332971
                        ),
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
                            defaultValue=['2021-01-01 17:00:00',
                                          '2021-01-09 18:00:00'],
                            showTime=True
                        ),


                        fac.AntdComment(
                            id='comment-demo',
                            authorName='费弗里',
                            authorNameHref='https://github.com/CNFeffery/feffery-antd-components',
                            publishTime={
                                'value': '2022-01-01 19:29:01',
                                'format': 'YYYY-MM-DD hh:mm:ss'
                            },
                            commentContent='我希望feffery-components项目系列组件可以帮助更多人快速开发心仪的网站应用！😀',
                            showDelete=True
                        ),

                        html.Div(id='comment-output-demo'),

                        html.Div(
                            style={
                                'height': '1000px'
                            }
                        )

                    ],
                    style={
                        'padding': '100px 200px',
                        'position': 'relative'
                    },
                    id='container-demo'
                )
            ],
            style={
                'margin': '100px',
                'border': '1px solid grey',
                'height': '800px',
                'overflowY': 'auto'
            }
        )
    ],
    style={
        'height': '100vh'
    }
)


@app.callback(
    Output('password-md5-demo-output', 'children'),
    Input('password-md5-demo', 'md5Value')
)
def test(md5Value):

    return md5Value


@app.callback(
    Output('comment-output-demo', 'children'),
    [Input('comment-demo', 'replyClicks'),
     Input('comment-demo', 'deleteClicks')]
)
def test_(replyClicks, deleteClicks):

    return f'{replyClicks} - {deleteClicks}'


@app.callback(
    Output('message-container-demo1', 'children'),
    Input('message-trigger-button-demo1', 'nClicks'),
    prevent_initial_call=True
)
def message_demo1(nClicks):
    return fac.AntdMessage(
        content='全局提示框示例',
        icon='fc-overtime',
        duration=0
    )


@app.callback(
    Output('modal-demo-1', 'visible'),
    Input('modal-demo-trigger-1', 'nClicks'),
    prevent_initial_call=True
)
def modal_demo_callback1(nClicks):
    return True


if __name__ == '__main__':
    app.run_server(debug=True)
