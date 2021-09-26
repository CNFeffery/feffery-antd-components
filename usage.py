from feffery_antd_components.AntdButton import AntdButton
import dash
import time
import numpy as np
import pandas as pd
import dash_core_components as dcc
import feffery_antd_components as fac
import dash_html_components as html
from dash.dependencies import Input, Output, State


demo_df = pd.DataFrame({
    '排序列1': np.random.randint(0, 100, 10000),
    '排序列2': np.random.randint(0, 100, 10000),
    '标签': [f'测试{i}' for i in range(10000)]
})

demo_df['排序列2'] = demo_df['排序列2'].astype('str')

app = dash.Dash(__name__)

app.server.config['MAX_CONTENT_LENGTH'] = 5 * 1024 * 1024

app.layout = html.Div(
    [


        fac.AntdMenu(
            menuItems=[
                {
                    'component': 'Item',
                    'props': {
                        'title': '測試',
                        'key': '測試',
                        'icon': 'earth'
                    }
                }
            ]
        ),

        fac.AntdButton('打开modal', id='modal-demo-input'),

        fac.AntdModal(
            title={
                'content': '测试',
                'prefixIcon': 'fc-planner'
            },
            id='modal-demo-output'
        ),


        fac.AntdUpload(
            id='upload-demo',
            apiUrl='http://127.0.0.1:8050/upload/',
            fileListMaxLength=10,
            buttonContent='点击上传.dxf格式文件',
            fileMaxSize=200,
            fileTypes=['dxf'],
            multiple=True,
            directory=False,
            failedTooltipInfo='啊哦，上传出了问题...'
        ),
        fac.AntdDivider(
            '上传测试',
            innerTextOrientation='left'
        ),
        fac.AntdCollapse(
            dcc.Markdown('''
                ```Python
                html.Div(
                    [
                        fac.AntdButton('default'),
                        fac.AntdButton('primary', type='primary'),
                        fac.AntdButton('dashed', type='dashed'),
                        fac.AntdButton('link', type='link'),
                        fac.AntdButton('text', type='text')
                    ]
                )
                ```
                '''),
            title='查看代码',
            ghost=True,
            collapsible='header'
        ),
        fac.AntdResult(
            id='result-demo',
            title='success示例',
            subTitle='初始化',
            status='success',
            style={
                'border': '1px dashed lightgrey'
            }
        ),

        fac.AntdDivider(),

        fac.AntdRow(
            [
                fac.AntdCol(
                    fac.AntdSpace(
                        [
                            fac.AntdInput(
                                id='default-input-demo',
                                placeholder='default测试',
                                addonBefore='前缀测试',
                                addonAfter='后缀测试',
                                style={
                                    'width': '100%'
                                }
                            ),

                            fac.AntdDivider(),

                            fac.AntdInput(
                                id='search-input-demo',
                                placeholder='search测试',
                                mode='search',
                                allowClear=True,
                                style={
                                    'width': '100%'
                                }
                            ),

                            fac.AntdDivider(),

                            fac.AntdInput(
                                id='text-area-input-demo',
                                placeholder='text-area测试',
                                mode='text-area',
                                allowClear=True,
                                maxLength=20,
                                showCount=True,
                                style={
                                    'height': '100px'
                                }
                            ),

                            fac.AntdDivider(),

                            fac.AntdInput(
                                id='password-input-demo',
                                placeholder='password测试',
                                mode='password',
                                style={
                                    'width': '100%'
                                }
                            ),

                            fac.AntdDivider(),

                            fac.AntdCheckbox(
                                id='checkbox-demo',
                                label='选择框测试'
                            ),

                            fac.AntdDivider(),

                            fac.AntdCheckboxGroup(
                                id='checkbox-group-demo',
                                options=[
                                    {
                                        'label': f'选项{i}',
                                        'value': str(i)
                                    }
                                    for i in range(1, 5)
                                ]
                            ),

                            fac.AntdDivider(),

                            html.Div(
                                [
                                    fac.AntdParagraph(
                                        '这是一段文字'*10
                                    ),
                                    fac.AntdParagraph(
                                        '这一段code模式文字'*10,
                                        code=True
                                    ),
                                    fac.AntdParagraph(
                                        '这一段copyable模式文字'*10,
                                        copyable=True
                                    ),
                                    fac.AntdParagraph(
                                        '这一段strikethrough模式文字'*10,
                                        strikethrough=True
                                    ),
                                    fac.AntdParagraph(
                                        '这一段disabled模式文字'*10,
                                        disabled=True
                                    ),
                                    fac.AntdParagraph(
                                        '这一段mark模式文字'*10,
                                        mark=True
                                    ),
                                    fac.AntdParagraph(
                                        '这一段strong模式文字'*10,
                                        strong=True
                                    ),
                                    fac.AntdParagraph(
                                        '这一段italic模式文字'*10,
                                        italic=True
                                    ),
                                    fac.AntdText(
                                        '这一段italic模式文字'*10,
                                        italic=True
                                    ),
                                    fac.AntdParagraph(
                                        '这一段underline模式文字'*10,
                                        underline=True
                                    ),
                                    fac.AntdParagraph(
                                        '这一段type=secondary模式文字'*10,
                                        type='secondary'
                                    ),
                                    fac.AntdParagraph(
                                        '这一段type=success模式文字'*10,
                                        type='success'
                                    ),
                                    fac.AntdParagraph(
                                        '这一段type=warning模式文字'*10,
                                        type='warning'
                                    ),
                                    fac.AntdParagraph(
                                        '这一段type=danger模式文字'*10,
                                        type='danger'
                                    )
                                ]
                            ),

                            fac.AntdDivider(),
                            fac.AntdEmpty(
                                description='自定义描述文字示例',
                                image='https://www.baidu.com/img/flexible/logo/pc/result.png',
                                imageStyle={
                                    'filter': 'grayscale(100%)'
                                }
                            ),

                            fac.AntdDivider(),

                            fac.AntdCascader(
                                id='cascader-demo',
                                changeOnSelect=True,
                                placeholder='请选择：',
                                expandTrigger='hover',
                                popupPlacement='topLeft',
                                options=[
                                    {
                                        'value': 'zhejiang',
                                        'label': 'Zhejiang',
                                        'children': [
                                            {
                                                'value': 'hangzhou',
                                                'label': 'Hangzhou',
                                                'children': [
                                                    {
                                                        'value': 'xihu',
                                                        'label': 'West Lake',
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        'value': 'jiangsu',
                                        'label': 'Jiangsu',
                                        'children': [
                                            {
                                                'value': 'nanjing',
                                                'label': 'Nanjing',
                                                'children': [
                                                    {
                                                        'value': 'zhonghuamen',
                                                        'label': 'Zhong Hua Men'
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                ],

                            )
                        ],
                        direction='vertical',
                        style={
                            'width': '500px'
                        }
                    ),
                    style={
                        'borderRight': '1px solid lightgrey',
                        'paddingRight': '25px'
                    }
                ),

                fac.AntdCol(
                    fac.AntdSpace(
                        [
                            fac.AntdTooltip(
                                html.H6('Tooltip hover测试'),
                                title='测试内容'
                            ),
                            fac.AntdTooltip(
                                fac.AntdButton(
                                    'Tooltip click测试',
                                    type='primary'
                                ),
                                title='测试内容',
                                placement='bottom',
                                trigger='click'
                            ),
                            fac.AntdTooltip(
                                fac.AntdInput(
                                    mode='search',
                                    placeholder='Tooltip focus测试'
                                ),
                                title='测试内容',
                                trigger='focus'
                            ),
                            fac.AntdDivider(),
                            fac.AntdSpin(
                                fac.AntdTable(
                                    id='table-demo',
                                    mode='server-side',
                                    filterOptions={
                                        '排序列1': {
                                            'filterMode': 'keyword'
                                        },
                                        '排序列2': {
                                            'filterMode': 'checkbox',
                                            'filterCustomItems': [str(i) for i in range(100)]
                                        }
                                    },
                                    titlePopoverInfo={
                                        '排序列1': {
                                            'title': '字段含义',
                                            'content': '巴拉巴拉'*10
                                        },
                                        '标签': {
                                            'title': '字段含义',
                                            'content': 'abcd'*20
                                        }
                                    },
                                    columns=[
                                        {
                                            'title': '排序列1',
                                            'dataIndex': '排序列1'
                                        },
                                        {
                                            'title': '排序列2',
                                            'dataIndex': '排序列2'
                                        },
                                        {
                                            'title': '标签',
                                            'dataIndex': '标签',
                                            'renderOptions': {
                                                'renderType': 'button'
                                            }
                                        }
                                    ],
                                    data=demo_df.head(5).to_dict('records'),
                                    bordered=True,
                                    sortOptions={
                                        'sortDataIndexes': ['排序列1', '排序列2'],
                                        'multiple': True
                                    },
                                    pagination={
                                        'current': 1,
                                        'pageSize': 5,
                                        'total': demo_df.shape[0]
                                    }
                                )
                            ),
                            fac.AntdSwitch(
                                # id='switch-demo',
                                checkedChildren='开启',
                                unCheckedChildren='关闭'
                            ),

                            fac.AntdDivider(),

                            fac.AntdParagraph(
                                [
                                    fac.AntdText(
                                        'Ctrl',
                                        keyboard=True
                                    ),
                                    '+',
                                    fac.AntdText(
                                        'K',
                                        keyboard=True
                                    )
                                ]
                            ),

                            fac.AntdTitle(
                                '标题示例',
                                level=4,
                                copyable=True
                            ),

                            fac.AntdDivider(),

                            fac.AntdSpace(
                                [
                                    fac.AntdInput(
                                        id='tabs-test-input',
                                        placeholder='输入新标签页名称',
                                        style={
                                            'width': '175px'
                                        }
                                    ),
                                    fac.AntdButton(
                                        '新建',
                                        id='tabs-test-button',
                                        type='primary'
                                    ),
                                    html.Div(
                                        id='tabs-test-notifaction-container'
                                    )
                                ]
                            ),

                            fac.AntdTabs(
                                [
                                    fac.AntdTabPane(
                                        [
                                            fac.AntdParagraph(
                                                '测试1'*100,
                                                mark=True
                                            )
                                        ],
                                        tab='测试1',
                                        key='测试1',
                                        closable=False
                                    ),
                                    fac.AntdTabPane(
                                        [
                                            fac.AntdSwitch(
                                                id='switch-demo',
                                                checkedChildren='开启',
                                                unCheckedChildren='关闭'
                                            )
                                        ],
                                        tab='测试2',
                                        key='测试2',
                                        titleSideInfoPopover={
                                            'content': 'balabalabala'
                                        }
                                    )
                                ],
                                id='tabs-demo',
                                defaultActiveKey='测试2',
                                tabPosition='left',
                                size='small',
                                style={'height': '200px'},
                                type='editable-card'
                            ),

                            fac.AntdDivider(),

                            fac.AntdSkeleton(
                                fac.AntdSpace(
                                    id='pagination-demo-test',
                                    direction='vertical'
                                )
                            ),

                            fac.AntdPagination(
                                id='pagination-demo',
                                defaultCurrent=3,
                                total=100,
                                defaultPageSize=5,
                                pageSizeOptions=[5, 10],
                                showQuickJumper=False,
                                showSizeChanger=False,
                                showTotalPrefix='总记录数：',
                                showTotalSuffix='条！',
                                size='small'
                            ),

                            fac.AntdDivider(),

                            fac.AntdTreeSelect(
                                id='tree-select-demo',
                                treeData=[
                                    {
                                        'title': '节点1',
                                        'key': '节点1',
                                        'value': '节点1',
                                        'children': [
                                            {
                                                'title': '节点1-1',
                                                'key': '节点1-1',
                                                'value': '节点1-1',
                                            },
                                            {
                                                'title': '节点1-2',
                                                'key': '节点1-2',
                                                'value': '节点1-2',
                                            },
                                            {
                                                'title': '节点1-3',
                                                'key': '节点1-3',
                                                'value': '节点1-3',
                                            }
                                        ]
                                    },
                                    {
                                        'title': '节点2',
                                        'key': '节点2',
                                        'value': '节点2',
                                        'children': [
                                            {
                                                'title': '节点2-1',
                                                'key': '节点2-1',
                                                'value': '节点2-1',
                                            },
                                            {
                                                'title': '节点2-2',
                                                'key': '节点2-2',
                                                'value': '节点2-2',
                                                'children': [
                                                    {
                                                        'title': '节点2-2-1',
                                                        'key': '节点2-2-1',
                                                        'value': '节点2-2-1',
                                                    },
                                                    {
                                                        'title': '节点2-2-2',
                                                        'key': '节点2-2-2',
                                                        'value': '节点2-2-2',
                                                    },
                                                    {
                                                        'title': '节点2-2-3',
                                                        'key': '节点2-2-3',
                                                        'value': '节点2-2-3',
                                                    }
                                                ]
                                            },
                                            {
                                                'title': '节点2-3',
                                                'key': '节点2-3',
                                                'value': '节点2-3',
                                            }
                                        ]
                                    }
                                ],
                                placeholder='请选择值：',
                                virtual=False,
                                listHeight=300,
                                defaultValue='节点1-1',
                                multiple=True,
                                maxTagCount=3,
                                treeCheckable=True,
                                size='middle',
                                # treeCheckStrictly=True,
                                # treeDefaultExpandAll=True,
                                treeDefaultExpandedKeys=['节点2']
                            ),
                            fac.AntdDivider(),

                            fac.AntdButton(
                                '打开抽屉',
                                id='drawer-demo-button',
                                type='primary'
                            ),

                            html.Div(
                                fac.AntdDrawer(
                                    html.Div(
                                        ['测试'*2000, fac.AntdPopover(
                                            [
                                                fac.AntdButton(
                                                    '点击查看代码', type='link'),

                                                dcc.Markdown('''
                ```Python
                html.Div(
                    [
                        fac.AntdButton('default'),
                        fac.AntdButton('primary', type='primary'),
                        fac.AntdButton('dashed', type='dashed'),
                        fac.AntdButton('link', type='link'),
                        fac.AntdButton('text', type='text')
                    ]
                )
                ```
                ''')
                                            ],
                                            contentChildrenIndexes=[1],
                                            placement='rightBottom',
                                            trigger='click',
                                            containerId='popover-container-demo'
                                        ),
                                            '测试'*2000],
                                        id='popover-container-demo',
                                        style={
                                            'overflowY': 'auto',
                                            'height': '400px',
                                            'border': '1px dashed lightgrey',
                                            'padding': '10px',
                                            'position': 'absolute'
                                        }
                                    ),
                                    id='drawer-demo',
                                    title='抽屉测试',
                                    forceRender=True,
                                    placement='bottom',
                                    closable=True,
                                    height=500,
                                    mask=True,
                                    maskClosable=False
                                    # containerId='drawer-container-demo'
                                ),
                                id='drawer-container-demo',
                                style={
                                    'position': 'relative',
                                    'height': '600px',
                                    'backgroundColor': 'lightgrey'
                                }
                            ),

                            fac.AntdDivider(),

                            fac.AntdPopover(
                                html.H6('Popover hover测试'),
                                title='测试内容'
                            ),
                            fac.AntdPopover(
                                [
                                    fac.AntdButton(
                                        'Popover click测试',
                                        type='primary'
                                    ),
                                    fac.AntdButton(
                                        'Popover click内嵌测试',
                                        type='primary'
                                    )
                                ],
                                title='测试内容',
                                placement='bottom',
                                trigger='click',
                                contentChildrenIndexes=[1]
                            ),
                            fac.AntdPopover(
                                fac.AntdInput(
                                    mode='search',
                                    placeholder='Popover focus测试'
                                ),
                                title='测试内容',
                                trigger='focus'
                            ),

                            fac.AntdDivider(),

                            fac.AntdRadioGroup(
                                id='radio-group-demo',
                                options=[
                                    {
                                        'label': '选项1', 'value': '选项1'
                                    },
                                    {
                                        'label': '选项2', 'value': '选项2'
                                    },
                                    {
                                        'label': '选项3', 'value': '选项3'
                                    },
                                    {
                                        'label': '选项4', 'value': '选项4', 'disabled': True
                                    }
                                ],
                                defaultValue='选项2',
                                optionType='button',
                                buttonStyle='solid',
                                size='large'
                            )
                        ],
                        direction='vertical',
                        style={
                            'width': '500px'
                        }
                    ),
                    style={
                        'paddingLeft': '25px'
                    }
                )
            ],
            justify='center'
        )
    ],
    style={
        'width': '100%',
        'height': '100%',
        'padding': '20px 50px 200px 50px'
    }
)


@app.callback(
    Output('result-demo', 'subTitle'),
    [Input('default-input-demo', 'value'),
     Input('default-input-demo', 'nSubmit'),
     Input('search-input-demo', 'value'),
     Input('text-area-input-demo', 'value'),
     Input('password-input-demo', 'value'),
     Input('search-input-demo', 'nClicksSearch'),
     Input('checkbox-demo', 'checked'),
     Input('checkbox-group-demo', 'value'),
     Input('switch-demo', 'checked'),
     Input('tree-select-demo', 'value'),
     Input('cascader-demo', 'value'),
     Input('radio-group-demo', 'value'),
     Input('upload-demo', 'lastUploadTaskRecord'),
     Input('table-demo', 'recentlyButtonClickedRow')],
    [State('checkbox-demo', 'checked'),
     State('checkbox-group-demo', 'value')],
    prevent_initial_call=True
)
def test(default_input_value,
         default_input_nSubmit,
         search_input_value,
         text_area_input_value,
         password_input_value,
         nClicksSearch,
         checkbox_checked,
         checkbox_group_value,
         switch_checked,
         tree_select_demo_value,
         cascader_demo_value,
         radio_group_demo_value,
         upload_demo_lastUploadTaskRecord,
         table_demo_recentlyButtonClickedRow,
         checkbox_checked_state,
         checkbox_group_value_state):

    ctx = dash.callback_context

    return ctx.triggered[0]['prop_id'] + '：' + str(ctx.triggered[0]['value'])


@app.callback(
    [Output('table-demo', 'data'),
     Output('table-demo', 'pagination')],
    [Input('table-demo', 'pagination'),
     Input('table-demo', 'sorter'),
     Input('table-demo', 'filter')],
    State('table-demo', 'filterOptions'),
    prevent_initial_call=True
)
def table_pagination_test(pagination, sorter, filter, filterOptions):
    '''
    服务端AntdTable数据加载示例
    '''

    time.sleep(0.5)

    # 获取上下文信息
    ctx = dash.callback_context

    # inputs = ctx.inputs

    # pagination = inputs['table-demo.pagination']
    # sorter = inputs['table-demo.sorter']
    # filter = inputs['table-demo.filter']
    # print('='*100)
    # print(ctx.triggered[0]['prop_id'])
    # print(pagination)
    # print(sorter)
    # print(filter)
    # print(filterOptions)

    # 若本次回调由翻页操作触发
    if ctx.triggered[0]['prop_id'] == 'table-demo.pagination':

        batch_df = demo_df.copy()

        # 实施筛选操作
        if filter:
            # 针对每个字段以其设定的过滤模式进行离线筛选
            for key, value in filter.items():
                if value:
                    if 'filterMode' in filterOptions[key].keys():
                        if filterOptions[key]['filterMode'] == 'checkbox':
                            batch_df = batch_df.loc[batch_df[key].isin(
                                value), :]
                        elif filterOptions[key]['filterMode'] == 'keyword':
                            batch_df = batch_df.loc[batch_df[key].astype(
                                'str').str.contains(value[0]), :]

        # 实施排序操作
        if sorter:
            ascending = list(map(lambda order: True if order ==
                                 'ascend' else False, sorter['orders']))

            if ascending.__len__() == 1:
                ascending = ascending[0]

            elif ascending.__len__() == 0:
                return demo_df.iloc[(pagination['current'] - 1)*pagination['pageSize']:pagination['current']*pagination['pageSize'], :].to_dict('records')

            batch_df = (
                batch_df
                .sort_values(
                    sorter['columns'],
                    ascending=ascending
                )
            )

        # 实施分页操作，且不更新pagination参数

        start_index = (pagination['current'] - 1)*pagination['pageSize']
        end_index = pagination['current']*pagination['pageSize']

        return (
            batch_df.iloc[start_index:end_index, :].to_dict('records'),
            dash.no_update
        )

    # 若本次回调由筛选或排序操作触发
    elif ctx.triggered[0]['prop_id'] in ['table-demo.sorter', 'table-demo.filter']:

        batch_df = demo_df.copy()

        # 实施筛选操作
        if filter:
            # 针对每个字段以其设定的过滤模式进行离线筛选
            for key, value in filter.items():
                if value:
                    if 'filterMode' in filterOptions[key].keys():
                        if filterOptions[key]['filterMode'] == 'checkbox':
                            batch_df = batch_df.loc[batch_df[key].isin(
                                value), :]
                        elif filterOptions[key]['filterMode'] == 'keyword':
                            batch_df = batch_df.loc[batch_df[key].astype(
                                'str').str.contains(value[0]), :]

        # 实施排序操作
        if sorter and sorter['columns'].__len__() != 0:
            ascending = list(map(lambda order: True if order ==
                                 'ascend' else False, sorter['orders']))

            if ascending.__len__() == 1:
                ascending = ascending[0]

            elif ascending.__len__() == 0:
                return demo_df.iloc[(pagination['current'] - 1)*pagination['pageSize']:pagination['current']*pagination['pageSize'], :].to_dict('records')

            batch_df = (
                batch_df
                .sort_values(
                    sorter['columns'],
                    ascending=ascending
                )
            )

        pagination = {
            'current': 1,
            'pageSize': 5,
            'total': batch_df.shape[0]
        }

        start_index = (pagination['current'] - 1)*pagination['pageSize']
        end_index = pagination['current']*pagination['pageSize']

        print(pagination)

        # 实施分页操作，且不更新pagination参数
        return (
            batch_df.iloc[start_index:end_index, :].to_dict('records'),
            pagination
        )


@app.callback(
    [Output('tabs-demo', 'children'),
     Output('tabs-test-notifaction-container', 'children')],
    [Input('tabs-demo', 'latestDeletePane'),
     Input('tabs-test-button', 'nClicks')],
    [State('tabs-test-input', 'value'),
     State('tabs-demo', 'children')],
    prevent_initial_call=True
)
def tabs_add_remove_test(latestDeletePane, nClicks, new_tab_key, children):

    ctx = dash.callback_context

    if ctx.triggered[0]['prop_id'] == 'tabs-test-button.nClicks':
        current_tab_keys = set([child['props']['key'] for child in children])

        if new_tab_key in current_tab_keys:
            return dash.no_update, fac.AntdNotification(message='已存在同名标签页！',
                                                        description='请尝试其他合法名称',
                                                        type='error',
                                                        placement='rightBottom')

        return children + [fac.AntdTabPane(new_tab_key*100, tab=new_tab_key, key=new_tab_key)], None

    elif ctx.triggered[0]['prop_id'] == 'tabs-demo.latestDeletePane':

        return [child for child in children if child['props']['key'] != latestDeletePane], dash.no_update

    return dash.no_update


@app.callback(
    Output('pagination-demo-test', 'children'),
    Input('pagination-demo', 'current'),
    Input('pagination-demo', 'pageSize')
)
def pagination_test(current, pageSize):

    time.sleep(0.5)

    return [fac.AntdTag(content=f'项目{i+1}', color='#b3e5fc') for i in range((current-1)*pageSize, current*pageSize)]


@app.callback(
    Output('drawer-demo', 'visible'),
    Input('drawer-demo-button', 'nClicks'),
    State('drawer-demo', 'visible'),
    prevent_initial_call=True
)
def draw_test(nClicks, visible):

    if nClicks and not visible:
        return True

    return dash.no_update


@app.callback(
    Output('modal-demo-output', 'visible'),
    Input('modal-demo-input', 'nClicks')
)
def link_test(nClicks):

    return True


if __name__ == '__main__':
    app.run_server(debug=True, port=8118)
