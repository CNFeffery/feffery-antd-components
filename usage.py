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
        fac.AntdRadioGroup(
            id='switch-locale',
            options=[
                {
                    'label': locale,
                    'value': locale
                }
                for locale in [
                    'zh-cn', 'en-us'
                ]
            ],
            optionType='button',
            defaultValue='en-us'
        ),
        fac.AntdDivider(
            isDashed=True
        ),
        fac.AntdConfigProvider(
            fac.AntdSpace(
                [
                    fac.AntdCalendar(
                        defaultValue='2023-01-01',
                        style={
                            'width': '300px'
                        }
                    ),
                    fac.AntdCascader(
                        options=[]
                    ),
                    fac.AntdComment(
                        authorName='费弗里',
                        authorNameHref='https://github.com/CNFeffery/feffery-antd-components',
                        publishTime={
                            'value': '2022-01-01 19:29:01',
                            'format': 'YYYY-MM-DD hh:mm:ss'
                        },
                        commentContent='我希望feffery-components项目系列组件可以帮助更多人快速开发心仪的应用！😀',
                        avatarProps={
                            'mode': 'image',
                            'src': '/assets/imgs/avatar-demo.jpg'
                        },
                        fromNow=True
                    ),
                    fac.AntdCopyText(
                        text='AntdCopyText复制示例',
                        beforeIcon='点我复制',
                        afterIcon='复制成功'
                    ),
                    fac.AntdDatePicker(),
                    fac.AntdDateRangePicker(),
                    fac.AntdEmpty(),
                    fac.AntdImage(
                        src='http://fac-next.feffery.tech/assets/imgs/%E6%B5%81%E6%B5%AA%E5%9C%B0%E7%90%832%E6%B5%B7%E6%8A%A5.jpg',
                        height=400
                    ),
                    fac.AntdModal(
                        visible=True,
                        renderFooter=True,
                        title='模态框测试'
                    ),
                    fac.AntdPagination(
                        defaultPageSize=10,
                        total=100
                    ),
                    fac.AntdPopconfirm(
                        fac.AntdButton(
                            '气泡确认测试'
                        ),
                        title='气泡确认测试'
                    ),
                    fac.AntdSelect(
                        placeholder='下拉选择测试',
                        options=[]
                    ),
                    fac.AntdTable(
                        columns=[
                            {
                                'title': '表格测试',
                                'dataIndex': '表格测试'
                            }
                        ],
                        bordered=True,
                        style={
                            'width': 300
                        }
                    ),
                    fac.AntdTable(
                        columns=[
                            {
                                'title': '表格测试',
                                'dataIndex': '表格测试'
                            }
                        ],
                        data=[
                            {
                                '表格测试': 999
                            }
                        ],
                        bordered=True,
                        style={
                            'width': 300
                        }
                    ),
                    fac.AntdTimePicker(),
                    fac.AntdTimeRangePicker(),
                    fac.AntdTransfer(
                        dataSource=[],
                        style={
                            'width': 500
                        }
                    ),
                    fac.AntdTreeSelect(
                        treeData=[],
                        style={
                            'width': 256
                        }
                    ),
                    fac.AntdParagraph(
                        'AntdParagraph测试',
                        copyable=True
                    ),
                    fac.AntdText(
                        'AntdText测试',
                        copyable=True
                    ),
                    fac.AntdTitle(
                        'AntdTitle测试',
                        copyable=True
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
            id='config-provider-locale-demo',
            locale='en-us'
        ),
        fac.AntdDivider(),

        fac.AntdRadioGroup(
            id='switch-size',
            options=[
                {
                    'label': size,
                    'value': size
                }
                for size in [
                    'small', 'middle', 'large'
                ]
            ],
            optionType='button',
            defaultValue='small'
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
                    fac.AntdDatePicker(),
                    fac.AntdDateRangePicker(),
                    fac.AntdInput(
                        placeholder='输入框测试',
                        style={
                            'width': 256
                        }
                    ),
                    fac.AntdInputNumber(
                        placeholder='数字输入框测试',
                        style={
                            'width': 256
                        }
                    ),
                    fac.AntdRadioGroup(
                        options=[
                            {
                                'label': f'选项{i}',
                                'value': f'选项{i}'
                            }
                            for i in range(5)
                        ],
                        defaultValue='选项1',
                        optionType='button'
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
                    fac.AntdTimePicker(),
                    fac.AntdTimeRangePicker(),
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
                ][::-1],
                direction='vertical',
                style={
                    'width': '100%'
                }
            ),
            id='config-provider-size-demo',
            componentSize='small'
        ),

        fac.AntdDivider(),

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
            id='config-provider-disabled-demo'
        )
    ],
    style={
        'padding': '25px'
    }
)


@app.callback(
    Output('config-provider-disabled-demo', 'componentDisabled'),
    Input('switch-disabled', 'checked')
)
def switch_component_disabled(checked):

    return checked


@app.callback(
    Output('config-provider-size-demo', 'componentSize'),
    Input('switch-size', 'value'),
    prevent_initial_call=True
)
def switch_component_size(value):

    return value


@app.callback(
    Output('config-provider-locale-demo', 'locale'),
    Input('switch-locale', 'value'),
    prevent_initial_call=True
)
def switch_component_locale(value):

    return value


if __name__ == '__main__':
    app.run(debug=True)
