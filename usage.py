import dash
import json
from dash import html, dcc
import feffery_antd_components as fac
from dash.dependencies import Input, Output, State

app = dash.Dash(__name__)

app.layout = html.Div(
    fac.AntdRow(
        [
            fac.AntdCol(
                html.Pre(
                    id='demo-output'
                ),
                span=12,
                style={
                    'maxHeight': 'calc(100vh - 200px)',
                    'overflowY': 'auto'
                }
            ),
            fac.AntdCol(
                fac.AntdSpace(
                    [
                        fac.AntdCheckCard(
                            '持久化测试',
                            id='check-card-test',
                            defaultChecked=True,
                            persistence=True
                        ),
                        fac.AntdCheckCardGroup(
                            [
                                fac.AntdCheckCard(
                                    f'选项{i}',
                                    value=i
                                )
                                for i in range(1, 6)
                            ],
                            id='check-card-group-test',
                            size='small',
                            multiple=True,
                            defaultValue=[1, 2],
                            persistence=True
                        ),

                        fac.AntdTabs(
                            id='tabs-test',
                            items=[
                                {
                                    'key': f'标签页{i}',
                                    'label': f'标签页{i}',
                                    'children': html.Div(
                                        f'这是标签页{i}的内容示例',
                                        style={
                                            'display': 'flex',
                                            'justifyContent': 'center',
                                            'alignItems': 'center',
                                            'fontSize': 18,
                                            'background': f'rgba(28, 126, 214, calc(1 - 0.2 * {i}))',
                                            'height': 200
                                        }
                                    )
                                }
                                for i in range(1, 6)
                            ],
                            defaultActiveKey='标签页1',
                            persistence=True
                        ),
                        fac.AntdCalendar(
                            id='calendar-test',
                            defaultValue='2023-01-01',
                            persistence=True,
                            style={
                                'width': '300px'
                            }
                        ),
                        fac.AntdCascader(
                            id='cascader-test',
                            placeholder='请选择',
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
                            persistence=True,
                            style={
                                'width': '200px'
                            }
                        ),
                        fac.AntdCheckbox(
                            id='checkbox-test',
                            label='开启',
                            persistence=True
                        ),
                        fac.AntdCheckboxGroup(
                            id='checkbox-group-test',
                            options=[
                                {
                                    'label': f'选项{i}',
                                    'value': f'选项{i}'
                                }
                                for i in range(5)
                            ],
                            persistence=True
                        ),
                        fac.AntdCollapse(
                            fac.AntdParagraph(
                                '内容示例'*20
                            ),
                            id='collapse-test',
                            isOpen=True,
                            title='回调示例',
                            persistence=True,
                            style={
                                'width': 300
                            }
                        ),
                        fac.AntdDatePicker(
                            id='date-picker-test',
                            persistence=True,
                            style={
                                'width': 175
                            },
                        ),
                        fac.AntdDateRangePicker(
                            id='date-range-picker-test',
                            persistence=True,
                            style={
                                'width': 300
                            },
                        ),
                        fac.AntdInput(
                            id='input-test',
                            persistence=True,
                            style={
                                'width': 150
                            }
                        ),
                        fac.AntdInput(
                            id='input-password-test',
                            mode='password',
                            passwordUseMd5=True,
                            persistence=True,
                            style={
                                'width': 150
                            }
                        ),
                        fac.AntdInputNumber(
                            id='input-number-test',
                            persistence=True,
                            style={
                                'width': 150
                            }
                        ),

                        html.Div(
                            fac.AntdMenu(
                                id='menu-test',
                                persistence=True,
                                defaultSelectedKey='图标antd-home',
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
                                        'antd-home',
                                        'antd-cloud-upload',
                                        'antd-bar-chart'
                                    ]
                                ],
                                mode='inline'
                            ),
                            style={
                                'width': '250px'
                            }
                        ),
                        fac.AntdPagination(
                            id='pagination-test',
                            defaultPageSize=10,
                            total=100,
                            pageSizeOptions=[5, 10, 20],
                            showSizeChanger=True,
                            persistence=True
                        ),
                        fac.AntdRadioGroup(
                            id='radio-group-test',
                            options=[
                                {
                                    'label': f'选项{c}',
                                    'value': c
                                }
                                for c in list('abcdef')
                            ],
                            defaultValue='a',
                            persistence=True
                        ),
                        fac.AntdRate(
                            id='rate-test',
                            count=10,
                            allowHalf=True,
                            defaultValue=1,
                            persistence=True
                        ),
                        fac.AntdSegmented(
                            id='segmented-test',
                            options=[
                                {
                                    'label': f'选项{i}',
                                    'value': i
                                }
                                for i in range(1, 6)
                            ],
                            defaultValue=2,
                            persistence=True
                        ),
                        fac.AntdSelect(
                            id='select-test',
                            options=[
                                {
                                    'label': f'选项{i}',
                                    'value': f'选项{i}'
                                }
                                for i in range(1, 6)
                            ],
                            persistence=True,
                            style={
                                'width': 200
                            }
                        ),
                        fac.AntdSlider(
                            id='slider-test',
                            min=0,
                            max=100,
                            defaultValue=33,
                            persistence=True,
                            style={
                                'width': 300
                            }
                        ),
                        fac.AntdSlider(
                            id='slider-range-test',
                            range=True,
                            min=0,
                            max=100,
                            defaultValue=[10, 90],
                            persistence=True,
                            style={
                                'width': 300
                            }
                        ),
                        fac.AntdSwitch(
                            id='switch-test',
                            persistence=True
                        ),
                        fac.AntdTimePicker(
                            id='time-picker-test',
                            defaultValue='06:00:00',
                            persistence=True
                        ),
                        fac.AntdTimeRangePicker(
                            id='time-range-picker-test',
                            defaultValue=[
                                '12:00:00',
                                '13:00:00'
                            ],
                            persistence=True
                        ),
                        fac.AntdTransfer(
                            id='transfer-test',
                            dataSource=[
                                {
                                    'key': i,
                                    'title': f'选项{i}'
                                }
                                for i in range(1, 10)
                            ],
                            targetKeys=[2, 3, 4],
                            persistence=True
                        ),
                        fac.AntdTree(
                            id='tree-test',
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
                            multiple=True,
                            checkable=True,
                            persistence=True
                        ),
                        fac.AntdTreeSelect(
                            id='tree-select-test',
                            treeData=[
                                {
                                    'key': '节点1',
                                    'value': '1',
                                    'title': '节点1',
                                    'children': [
                                        {
                                            'key': f'节点1-{i}',
                                            'value': f'1-{i}',
                                            'title': f'节点1-{i}'
                                        }
                                        for i in range(1, 5)
                                    ]
                                },
                                {
                                    'key': '节点2',
                                    'value': '2',
                                    'title': '节点2'
                                }
                            ],
                            placeholder='请选择',
                            persistence=True,
                            style={
                                'width': 256
                            }
                        ),
                        fac.AntdTreeSelect(
                            id='tree-select-multiple-test',
                            treeData=[
                                {
                                    'key': '节点1',
                                    'value': '1',
                                    'title': '节点1',
                                    'children': [
                                        {
                                            'key': f'节点1-{i}',
                                            'value': f'1-{i}',
                                            'title': f'节点1-{i}'
                                        }
                                        for i in range(1, 5)
                                    ]
                                },
                                {
                                    'key': '节点2',
                                    'value': '2',
                                    'title': '节点2'
                                }
                            ],
                            placeholder='请选择',
                            multiple=True,
                            treeCheckable=True,
                            persistence=True,
                            style={
                                'width': 256
                            }
                        )
                    ][::-1],
                    direction='vertical',
                    style={
                        'width': '100%'
                    }
                ),
                span=12,
                style={
                    'maxHeight': 'calc(100vh - 200px)',
                    'overflowY': 'auto'
                }
            )
        ],
        gutter=25
    ),
    style={
        'padding': 100
    }
)


@app.callback(
    Output('demo-output', 'children'),
    Input('check-card-test', 'checked'),
    Input('check-card-group-test', 'value'),
    Input('tabs-test', 'activeKey'),
    Input('calendar-test', 'value'),
    Input('cascader-test', 'value'),
    Input('checkbox-test', 'checked'),
    Input('checkbox-group-test', 'value'),
    Input('collapse-test', 'isOpen'),
    Input('date-picker-test', 'value'),
    Input('date-range-picker-test', 'value'),
    Input('input-test', 'value'),
    Input('input-password-test', 'md5Value'),
    Input('input-number-test', 'value'),
    Input('menu-test', 'currentKey'),
    Input('pagination-test', 'current'),
    Input('pagination-test', 'pageSize'),
    Input('radio-group-test', 'value'),
    Input('rate-test', 'value'),
    Input('segmented-test', 'value'),
    Input('select-test', 'value'),
    Input('slider-test', 'value'),
    Input('slider-test', 'value'),
    Input('slider-range-test', 'value'),
    Input('switch-test', 'checked'),
    Input('time-picker-test', 'value'),
    Input('time-range-picker-test', 'value'),
    Input('transfer-test', 'targetKeys'),
    Input('tree-test', 'selectedKeys'),
    Input('tree-test', 'checkedKeys'),
    Input('tree-test', 'expandedKeys'),
    Input('tree-test', 'halfCheckedKeys'),
    Input('tree-select-test', 'value'),
    Input('tree-select-multiple-test', 'value'),
)
def demo(*args):

    return json.dumps(
        dash.ctx.inputs_list[::-1],
        indent=4,
        ensure_ascii=False
    )


if __name__ == '__main__':
    app.run(debug=True)
