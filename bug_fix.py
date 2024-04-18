import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdSpace(
            [
                fac.AntdButton(
                    '更新状态', id='update-statuses'
                ),
                fac.AntdButton(
                    '更新值', id='update-values'
                ),
                fac.AntdButton('清空值', id='clear-values'),
            ],
            style={'marginBottom': 8},
        ),
        fac.AntdForm(
            [
                fac.AntdFormItem(
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
                                        'title': f'节点1-{i}',
                                    }
                                    for i in range(1, 5)
                                ],
                            },
                            {
                                'key': '节点2',
                                'value': '2',
                                'title': '节点2',
                            },
                        ],
                        value=['1-1'],
                        placeholder='请选择',
                        name='表单项19',
                        style={'width': 256},
                    ),
                    label='表单项19',
                    hasFeedback=True,
                ),
                fac.AntdFormItem(
                    fac.AntdTransfer(
                        dataSource=[
                            {'key': i, 'title': f'选项{i}'}
                            for i in range(1, 10)
                        ],
                        targetKeys=[2, 3, 4],
                        name='表单项18',
                    ),
                    label='表单项18',
                    hasFeedback=True,
                ),
                fac.AntdFormItem(
                    fac.AntdTimeRangePicker(
                        name='表单项17',
                        value=['20:08:08', '20:48:08'],
                    ),
                    label='表单项17',
                    hasFeedback=True,
                ),
                fac.AntdFormItem(
                    fac.AntdTimePicker(
                        name='表单项16', value='20:08:08'
                    ),
                    label='表单项16',
                    hasFeedback=True,
                ),
                fac.AntdFormItem(
                    fac.AntdSwitch(
                        name='表单项15', checked=True
                    ),
                    label='表单项15',
                    hasFeedback=True,
                ),
                fac.AntdFormItem(
                    fac.AntdSlider(
                        name='表单项14',
                        min=0,
                        max=100,
                        value=66,
                    ),
                    label='表单项14',
                    hasFeedback=True,
                ),
                fac.AntdFormItem(
                    fac.AntdSelect(
                        name='表单项13',
                        value='a',
                        options=list('abc'),
                    ),
                    label='表单项13',
                    hasFeedback=True,
                ),
                fac.AntdFormItem(
                    fac.AntdRate(name='表单项12', value=4),
                    label='表单项12',
                    hasFeedback=True,
                ),
                fac.AntdFormItem(
                    fac.AntdRadioGroup(
                        name='表单项11',
                        options=list('abc'),
                        value='a',
                    ),
                    label='表单项11',
                    hasFeedback=True,
                ),
                fac.AntdFormItem(
                    fac.AntdOTP(
                        name='表单项10', value='abcdef'
                    ),
                    label='表单项10',
                    hasFeedback=True,
                ),
                fac.AntdFormItem(
                    fac.AntdMentions(
                        name='表单项9',
                        value='初始值1',
                        options=[
                            {'label': 'a', 'value': 'a'}
                        ],
                    ),
                    label='表单项9',
                    hasFeedback=True,
                ),
                fac.AntdFormItem(
                    fac.AntdInputNumber(
                        name='表单项8', value=1
                    ),
                    label='表单项8',
                    hasFeedback=True,
                ),
                fac.AntdFormItem(
                    fac.AntdInput(
                        name='表单项7', value='初始值1'
                    ),
                    label='表单项7',
                    hasFeedback=True,
                ),
                fac.AntdFormItem(
                    fac.AntdDateRangePicker(
                        name='表单项6',
                        value=['2024-04-19', '2024-04-25'],
                    ),
                    label='表单项6',
                    hasFeedback=True,
                ),
                fac.AntdFormItem(
                    fac.AntdDatePicker(
                        name='表单项5', value='2024-04-19'
                    ),
                    label='表单项5',
                    hasFeedback=True,
                ),
                fac.AntdFormItem(
                    fac.AntdColorPicker(
                        name='表单项4', value='#ff4d4f'
                    ),
                    label='表单项4',
                    hasFeedback=True,
                ),
                fac.AntdFormItem(
                    fac.AntdCheckboxGroup(
                        options=[
                            {
                                'label': f'选项{i}',
                                'value': f'选项{i}',
                            }
                            for i in range(5)
                        ],
                        name='表单项3',
                        value=['选项1'],
                    ),
                    label='表单项3',
                    hasFeedback=True,
                ),
                fac.AntdFormItem(
                    fac.AntdCheckbox(
                        name='表单项2', checked=True
                    ),
                    label='表单项1',
                    hasFeedback=True,
                ),
                fac.AntdFormItem(
                    fac.AntdCascader(
                        value=['节点1', '节点1-2'],
                        placeholder='请选择',
                        options=[
                            {
                                'value': '节点1',
                                'label': '节点1',
                                'children': [
                                    {
                                        'value': '节点1-1',
                                        'label': '节点1-1',
                                    },
                                    {
                                        'value': '节点1-2',
                                        'label': '节点1-2',
                                        'children': [
                                            {
                                                'value': '节点1-2-1',
                                                'label': '节点1-2-1',
                                            },
                                            {
                                                'value': '节点1-2-2',
                                                'label': '节点1-2-2',
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                'value': '节点2',
                                'label': '节点2',
                                'children': [
                                    {
                                        'value': '节点2-1',
                                        'label': '节点2-1',
                                    },
                                    {
                                        'value': '节点2-2',
                                        'label': '节点2-2',
                                    },
                                ],
                            },
                        ],
                        name='表单项1',
                    ),
                    label='表单项1',
                    hasFeedback=True,
                ),
            ],
            id='demo-form',
            values={
                '表单项19': ['1-2'],
                '表单项18': [1, 2, 3],
                '表单项17': ['23:08:08', '23:48:08'],
                '表单项16': '23:59:59',
                '表单项15': False,
                '表单项14': 99,
                '表单项13': 'b',
                '表单项12': 5,
                '表单项11': 'b',
                '表单项10': 'ABCDEF',
                '表单项9': '初始值2',
                '表单项8': 2,
                '表单项7': '初始值2',
                '表单项6': ['2024-04-05', '2024-04-15'],
                '表单项5': '2024-04-22',
                '表单项4': '#389e0d',
                '表单项3': ['选项2'],
                '表单项2': False,
                '表单项1': [
                    '节点1',
                    '节点1-2',
                    '节点1-2-2',
                ],
            },
            helps={
                '表单项19': '表单项19',
                '表单项18': '表单项18',
                '表单项17': '表单项17',
                '表单项16': '表单项16',
                '表单项15': '表单项15',
                '表单项14': '表单项14',
                '表单项13': '表单项13',
                '表单项12': '表单项12',
                '表单项11': '表单项11',
                '表单项10': '表单项10',
                '表单项9': '表单项9',
                '表单项8': '表单项8',
                '表单项7': '表单项7',
                '表单项6': '表单项6',
                '表单项5': '表单项5',
                '表单项4': '表单项4',
                '表单项3': '表单项3',
                '表单项2': '表单项2',
                '表单项1': '表单项1',
            },
            validateStatuses={
                '表单项19': 'success',
                '表单项18': 'success',
                '表单项17': 'success',
                '表单项16': 'success',
                '表单项15': 'success',
                '表单项14': 'success',
                '表单项13': 'success',
                '表单项12': 'success',
                '表单项11': 'success',
                '表单项9': 'success',
                '表单项8': 'success',
                '表单项7': 'success',
                '表单项6': 'success',
                '表单项5': 'success',
                '表单项4': 'success',
                '表单项3': 'success',
                '表单项2': 'success',
                '表单项1': 'success',
            },
            enableBatchControl=True,
        ),
    ],
    style={'padding': 50},
)


@app.callback(
    [
        Output('demo-form', 'validateStatuses'),
        Output('demo-form', 'helps'),
    ],
    Input('update-statuses', 'nClicks'),
    prevent_initial_call=True,
)
def update_statuses(nClicks):
    return [
        {
            '表单项19': 'error',
            '表单项18': 'error',
            '表单项17': 'error',
            '表单项16': 'error',
            '表单项15': 'error',
            '表单项14': 'error',
            '表单项13': 'error',
            '表单项12': 'error',
            '表单项11': 'error',
            '表单项10': 'error',
            '表单项9': 'error',
            '表单项8': 'error',
            '表单项7': 'error',
            '表单项6': 'error',
            '表单项5': 'error',
            '表单项4': 'error',
            '表单项3': 'error',
            '表单项2': 'error',
            '表单项1': 'error',
        },
        {
            '表单项19': '新消息',
            '表单项18': '新消息',
            '表单项17': '新消息',
            '表单项16': '新消息',
            '表单项15': '新消息',
            '表单项14': '新消息',
            '表单项13': '新消息',
            '表单项12': '新消息',
            '表单项11': '新消息',
            '表单项10': '新消息',
            '表单项9': '新消息',
            '表单项8': '新消息',
            '表单项7': '新消息',
            '表单项6': '新消息',
            '表单项5': '新消息',
            '表单项4': '新消息',
            '表单项3': '新消息',
            '表单项2': '新消息',
            '表单项1': '新消息',
        },
    ]


@app.callback(
    Output('demo-form', 'values'),
    Input('update-values', 'nClicks'),
    prevent_initial_call=True,
)
def update_values(nClicks):
    return {
        '表单项19': ['1-3'],
        '表单项18': [7, 8, 9],
        '表单项17': ['00:00:01', '00:00:08'],
        '表单项16': '00:00:01',
        '表单项15': True,
        '表单项14': 1,
        '表单项13': 'c',
        '表单项12': 1,
        '表单项11': 'c',
        '表单项10': '123456',
        '表单项9': '更新值',
        '表单项8': 3,
        '表单项7': '更新值',
        '表单项6': ['2024-04-06', '2024-04-16'],
        '表单项5': '2024-04-12',
        '表单项4': '#262626',
        '表单项3': ['选项2', '选项4'],
        '表单项2': True,
        '表单项1': ['节点1', '节点1-2', '节点1-2-1'],
    }


@app.callback(
    Output('demo-form', 'values', allow_duplicate=True),
    Input('clear-values', 'nClicks'),
    prevent_initial_call=True,
)
def clear_values(nClicks):
    return {}


if __name__ == '__main__':
    app.run(debug=True)
