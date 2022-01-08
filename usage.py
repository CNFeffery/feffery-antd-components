import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output, State

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdTitle('persistence测试', level=5),

        # fac.AntdSelect(
        #     id='persistence-select-demo',
        #     persistence=True,
        #     placeholder='请选择国家：',
        #     options=[
        #         {'label': '中国', 'value': '中国'},
        #         {'label': '美国', 'value': '美国'},
        #         {'label': '俄罗斯', 'value': '俄罗斯'},
        #         {'label': '德国', 'value': '德国', 'disabled': True},
        #         {'label': '加拿大', 'value': '加拿大'}
        #     ],
        #     style={
        #         # 使用css样式固定宽度
        #         'width': '200px'
        #     }
        # ),


        # fac.AntdTabs(
        #     [
        #         fac.AntdTabPane(
        #             html.Div(
        #                 '标签页1测试',
        #                 style={
        #                     'backgroundColor': 'rgba(241, 241, 241, 0.4)',
        #                     'height': '200px',
        #                     'display': 'flex',
        #                     'justifyContent': 'center',
        #                     'alignItems': 'center'
        #                 }
        #             ),
        #             tab='标签页1',
        #             key='标签页1'
        #         ),
        #         fac.AntdTabPane(
        #             html.Div(
        #                 fac.AntdButton('标签页2测试', type='primary'),
        #                 style={
        #                     'backgroundColor': 'rgba(241, 241, 241, 0.4)',
        #                     'height': '200px',
        #                     'display': 'flex',
        #                     'justifyContent': 'center',
        #                     'alignItems': 'center'
        #                 }
        #             ),
        #             tab='标签页2',
        #             key='标签页2'
        #         ),
        #         fac.AntdTabPane(
        #             html.Div(
        #                 fac.AntdButton('标签页2测试', type='dashed'),
        #                 style={
        #                     'backgroundColor': 'rgba(241, 241, 241, 0.4)',
        #                     'height': '200px',
        #                     'display': 'flex',
        #                     'justifyContent': 'center',
        #                     'alignItems': 'center'
        #                 }
        #             ),
        #             tab='标签页3',
        #             key='标签页3'
        #         )
        #     ],
        #     id='persistence-tabs-demo',
        #     persistence=True,
        # ),

        # fac.AntdCalendar(
        #     id='persistence-calendar-demo',
        #     persistence=True,
        #     style={
        #         'width': '400px'
        #     }
        # ),

        # fac.AntdCascader(
        #     id='persistence-cascader-demo',
        #     persistence=True,
        #     placeholder='多选回调示例：',
        #     options=[
        #         {
        #                 'value': '节点1',
        #                 'label': '节点1',
        #                 'children': [
        #                     {
        #                         'value': '节点1-1',
        #                         'label': '节点1-1'
        #                     },
        #                     {
        #                         'value': '节点1-2',
        #                         'label': '节点1-2',
        #                         'children': [
        #                             {
        #                                 'value': '节点1-2-1',
        #                                 'label': '节点1-2-1'
        #                             },
        #                             {
        #                                 'value': '节点1-2-2',
        #                                 'label': '节点1-2-2'
        #                             }
        #                         ]
        #                     }
        #                 ]
        #         },
        #         {
        #             'value': '节点2',
        #             'label': '节点2',
        #             'children': [
        #                 {
        #                     'value': '节点2-1',
        #                     'label': '节点2-1'
        #                 },
        #                 {
        #                     'value': '节点2-2',
        #                     'label': '节点2-2'
        #                 }
        #             ]
        #         }
        #     ],
        #     multiple=True,
        #     style={
        #         'width': '300px'
        #     }
        # ),

        # html.Br(),

        # fac.AntdCheckbox(
        #     id='persistence-checkbox-demo',
        #     label='开启',
        #     persistence=True
        # ),

        # fac.AntdCheckboxGroup(
        #     id='persistence-checkbox-group-demo',
        #     persistence=True,
        #     options=[
        #         {
        #             'label': f'选项{i}',
        #             'value': f'选项{i}'
        #         }
        #         for i in range(5)
        #     ]
        # ),

        # fac.AntdCollapse(
        #     fac.AntdText('测试内容'),
        #     id='persistence-collapse-demo',
        #     title='点击此处展开',
        #     persistence=True,
        #     ghost=True
        # ),

        # fac.AntdDatePicker(
        #     id='persistence-date-picker-demo',
        #     picker='date',
        #     placeholder='请选择日期',
        #     defaultPickerValue='2020/01/01',
        #     persistence=True,
        #     showTime=False
        # ),

        # fac.AntdDateRangePicker(
        #     id='persistence-date-range-picker-demo',
        #     persistence=True,
        #     showTime=True
        # ),

        # fac.AntdInput(
        #     id='persistence-input-demo',
        #     placeholder='基础的输入框',
        #     persistence=True,
        #     allowClear=True,
        #     style={
        #         'width': '200px',
        #         'marginBottom': '5px'
        #     }
        # ),

        # fac.AntdInputNumber(
        #     id='persistence-input-number-demo',
        #     placeholder='基础的输入框',
        #     persistence=True,
        #     style={
        #         'width': '200px',
        #         'marginBottom': '5px'
        #     }
        # ),


        # html.Div(
        #     fac.AntdMenu(
        #         id='persistence-menu-demo',
        #         persistence=True,
        #         menuItems=[
        #             {
        #                 'component': 'SubMenu',
        #                 'props': {
        #                     'key': f'{sub_menu}',
        #                     'title': f'子菜单{sub_menu}'
        #                 },
        #                 'children': [
        #                     {
        #                         'component': 'ItemGroup',
        #                         'props': {
        #                             'key': f'{sub_menu}-{item_group}',
        #                             'title': f'菜单项分组{sub_menu}-{item_group}'
        #                         },
        #                         'children': [
        #                             {
        #                                 'component': 'Item',
        #                                 'props': {
        #                                     'key': f'{sub_menu}-{item_group}-{item}',
        #                                     'title': f'菜单项{sub_menu}-{item_group}-{item}'
        #                                 }
        #                             }
        #                             for item in range(1, 3)
        #                         ]
        #                     }
        #                     for item_group in range(1, 3)
        #                 ]
        #             }
        #             for sub_menu in range(1, 5)
        #         ],
        #         mode='inline',
        #         theme='dark'
        #     ),
        #     style={
        #         'width': '250px'
        #     }
        # ),


        # fac.AntdPagination(
        #     id='persistence-pagination-demo',
        #     persistence=True,
        #     total=100,
        #     # defaultCurrent=2,
        #     # defaultPageSize=24
        # ),

        # fac.AntdRadioGroup(
        #     id='persistence-radio-group-demo',
        #     persistence=True,
        #     options=[
        #         {
        #             'label': f'选项{i}',
        #             'value': f'选项{i}'
        #         }
        #         for i in range(5)
        #     ]
        # ),

        # fac.AntdSwitch(
        #     id='persistence-switch-demo',
        #     persistence=True,
        # ),

        # fac.AntdTimePicker(
        #     id='persistence-time-picker-demo',
        #     persistence=True
        # ),

        # fac.AntdTimeRangePicker(
        #     id='persistence-time-range-picker-demo',
        #     persistence=True
        # ),


        # html.Div(
        #     fac.AntdTransfer(
        #         id='persistence-transfer-demo',
        #         persistence=True,
        #         dataSource=[
        #             {
        #                 'key': str(i),
        #                 'title': f'选项{i}'
        #             }
        #             for i in range(20)
        #         ]
        #     )
        # ),


        # fac.AntdTree(
        #     id='persistence-tree-demo',
        #     persistence=True,
        #     treeData=[
        #         {
        #             'title': '重庆市',
        #             'key': '重庆市',
        #             'children': [
        #                 {
        #                     'title': '渝北区',
        #                     'key': '渝北区'
        #                 },
        #                 {
        #                     'title': '江北区',
        #                     'key': '江北区'
        #                 }
        #             ]
        #         },
        #         {
        #             'title': '北京市',
        #             'key': '北京市',
        #             'children': [
        #                 {
        #                     'title': '西城区',
        #                     'key': '西城区'
        #                 },
        #                 {
        #                     'title': '东城区',
        #                     'key': '东城区'
        #                 }
        #             ]
        #         },
        #         {
        #             'title': '四川省',
        #             'key': '四川省',
        #             'children': [
        #                 {
        #                     'title': '成都市',
        #                     'key': '成都市',
        #                     'children': [
        #                         {
        #                             'title': '天府新区',
        #                             'key': '天府新区'
        #                         }
        #                     ]
        #                 }
        #             ]
        #         }
        #     ],
        #     checkable=True
        # ),


        # fac.AntdTreeSelect(
        #     id='persistence-tree-select-demo',
        #     persistence=True,
        #     treeData=[
        #         {
        #             "title": "Node1",
        #             "value": "0-0",
        #             "key": "0-0",
        #             "children": [
        #                 {
        #                     "title": "Child Node1",
        #                     "value": "0-0-0",
        #                     "key": "0-0-0"
        #                 }
        #             ]
        #         },
        #         {
        #             "title": "Node2",
        #             "value": "0-1",
        #             "key": "0-1",
        #             "children": [
        #                 {
        #                     "title": "Child Node3",
        #                     "value": "0-1-0",
        #                     "key": "0-1-0"
        #                 },
        #                 {
        #                     "title": "Child Node4",
        #                     "value": "0-1-1",
        #                     "key": "0-1-1"
        #                 },
        #                 {
        #                     "title": "Child Node5",
        #                     "value": "0-1-2",
        #                     "key": "0-1-2"
        #                 }
        #             ]
        #         }
        #     ],
        #     treeCheckable=True,
        #     style={
        #         'width': '250px'
        #     }
        # )

        fac.AntdSpin(
            fac.AntdSpace(
                id='pagination-demo-output',
                direction='vertical'
            ),
            text='回调中'
        ),
        fac.AntdPagination(
            id='pagination-demo',
            # defaultPageSize=10,
            total=100,
            # pageSizeOptions=[5, 10, 20]
        )

    ],
    style={
        'padding': '100px 200px'
    }
)


@app.callback(
    Output('pagination-demo-output', 'children'),
    [Input('pagination-demo', 'current'),
     Input('pagination-demo', 'pageSize')]
)
def pagination_callback_demo(current, pageSize):
    import time
    time.sleep(1)
    print(current, pageSize)
    if current and pageSize:
        return [
            fac.AntdText(f'内容项{i}')
            for i in range((current - 1) * pageSize, current * pageSize)
        ]

    return dash.no_update


if __name__ == '__main__':
    app.run_server(debug=True)
