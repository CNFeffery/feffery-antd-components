import json
import dash
from dash import html
from faker import Faker
from datetime import datetime
import feffery_antd_components as fac
from dash.dependencies import Input, Output, State

faker = Faker(locale='zh_CN')

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdSwitch(
            id='switch-disabled'
        ),
        fac.AntdDivider(
            isDashed=True
        ),
        fac.AntdConfigProvider(
            fac.AntdSpace(
                [
                    fac.AntdButton(
                        '按钮测试'
                    ),
                    fac.AntdCascader(
                        options=[],
                        placeholder='级联选择测试'
                    ),
                    fac.AntdCheckbox(),
                    fac.AntdCheckboxGroup(
                        options=[
                            {
                                'label': f'选项{i}',
                                'value': f'选项{i}'
                            }
                            for i in range(5)
                        ]
                    ),
                    fac.AntdDatePicker(),
                    fac.AntdDateRangePicker(),

                    fac.AntdDropdown(
                        title='下拉选择测试',
                        menuItems=[
                            {
                                'title': '选项1'
                            },
                            {
                                'title': '选项2'
                            },
                            {
                                'isDivider': True
                            },
                            {
                                'title': '选项3-1'
                            },
                            {
                                'title': '选项3-2'
                            }
                        ]
                    ),
                    fac.AntdInput(
                        placeholder='输入框测试',
                        style={
                            'width': 200
                        }
                    ),
                    fac.AntdInputNumber(
                        placeholder='数值输入框测试',
                        style={
                            'width': 200
                        }
                    ),
                    fac.AntdMentions(
                        defaultValue='提及测试',
                        options=[
                            {
                                'label': f'用户{c}',
                                'value': f'用户{c}'
                            }
                            for c in list('abcdef')
                        ],
                        style={
                            'width': 200
                        }
                    ),
                    fac.AntdPagination(
                        defaultPageSize=10,
                        total=100
                    ),
                    fac.AntdPopconfirm(
                        fac.AntdButton(
                            '气泡确认测试',
                            type='primary'
                        ),
                        title='气泡确认测试'
                    ),
                    fac.AntdRadioGroup(
                        options=[
                            {
                                'label': f'选项{i}',
                                'value': f'选项{i}'
                            }
                            for i in range(5)
                        ],
                        defaultValue='选项1'
                    ),
                    fac.AntdRate(
                        count=10,
                        value=7.5,
                        allowHalf=True
                    ),
                    fac.AntdSegmented(
                        options=[
                            {
                                'label': f'选项{i}',
                                'value': f'选项{i}'
                            }
                            for i in range(5)
                        ],
                        defaultValue='选项1'
                    ),
                    fac.AntdSegmentedColoring(
                        size='small',
                        min=-10,
                        max=10,
                        breakpoints=[0, 1, 2, 3, 4, 5],
                        colors=["#deecf9", "#71afe5",
                                "#2b88d8", "#0078d4", "#106ebe"]
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
                    fac.AntdSlider(
                        min=0,
                        max=100,
                        defaultValue=66,
                        style={
                            'width': 200
                        }
                    ),
                    fac.AntdSwitch(),
                    fac.AntdTimePicker(),
                    fac.AntdTimeRangePicker(),
                    fac.AntdTransfer(
                        dataSource=[
                            {
                                'key': i,
                                'title': f'选项{i}'
                            }
                            for i in range(1, 10)
                        ],
                        targetKeys=[2, 3, 4],
                        style={
                            'width': 300
                        }
                    ),
                    fac.AntdTreeSelect(
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
                        style={
                            'width': 256
                        }
                    ),
                    fac.AntdCheckCard(
                        fac.AntdText(
                            '选择卡片示例' * 10
                        )
                    ),
                    fac.AntdCheckCardGroup(
                        [
                            fac.AntdCheckCard(
                                f'选项{i}',
                                value=i
                            )
                            for i in range(1, 6)
                        ],
                        defaultValue=3
                    ),
                    fac.AntdUpload(
                        buttonContent='上传测试'
                    ),
                    fac.AntdDraggerUpload(
                        text='拖拽上传测试'
                    ),
                    fac.AntdPictureUpload(
                        buttonContent='图片上传测试'
                    )
                ][::-1],
                direction='vertical',
                style={
                    'width': '100%'
                }
            ),
            id='config-provider-demo'
        )
    ],
    style={
        'padding': '25px'
    }
)


@app.callback(
    Output('config-provider-demo', 'componentDisabled'),
    Input('switch-disabled', 'checked')
)
def switch_component_disabled(checked):

    return checked


if __name__ == '__main__':
    app.run(debug=True)
