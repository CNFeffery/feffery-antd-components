import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, State, Output
import os
import json
from flask import request

app = dash.Dash(__name__)

app.layout = html.Div(
    fac.AntdSpace(
        [
            fac.AntdForm(
                [
                    fac.AntdFormItem(
                        html.Pre(id='demo-output'),
                        label='表单值',
                    ),
                    fac.AntdFormItem(
                        fac.AntdSpace(
                            [
                                fac.AntdButton(
                                    '提交',
                                    id='submit-button',
                                    type='primary',
                                ),
                                fac.AntdButton(
                                    '重置',
                                    id='reset-button',
                                )
                            ]
                        ),
                        wrapperCol={
                            'offset': 3
                        }
                    ),
                    fac.AntdFormItem(
                        fac.AntdInput(
                            id='test-field1',
                            name='AntdInput',
                            placeholder='请输入内容'
                        ),
                        label='AntdInput',
                        rules=[
                            {
                                'required': True,
                                'message': '不满足手机号码校验',
                                'validateTrigger': 'onBlur',
                                'pattern': '^(?:(?:\+|00)86)?1[3-9]\d{9}$'
                            },
                        ]
                    ),
                    fac.AntdFormItem(
                        fac.AntdInputNumber(
                            id='test-field2',
                            name='AntdInputNumber',
                            placeholder='请输入内容',
                            style={
                                'width': '100%'
                            }
                        ),
                        label='AntdInputNumber',
                        rules=[
                            {
                                'required': True,
                                'type': 'number',
                                'message': '内容不能为空',
                                'validateTrigger': 'onBlur',
                            },
                            {
                                'max': 5,
                                'type': 'number',
                                'message': '值不能大于5',
                                'validateTrigger': 'onBlur',
                            }
                        ]
                    ),
                    fac.AntdFormItem(
                        fac.AntdSelect(
                            id='test-field3',
                            name='AntdSelect',
                            placeholder='请选择',
                            options=[
                                {
                                    'label': '选项1',
                                    'value': '选项1'
                                },
                                {
                                    'label': '13333333333',
                                    'value': '13333333333'
                                }
                            ],
                            style={
                                'width': '100%'
                            }
                        ),
                        label='AntdSelect',
                        rules=[
                            {
                                'required': True,
                                'message': '长度不能小于5',
                                'validateTrigger': 'onChange',
                                'min': 5
                            }
                        ]
                    ),
                    fac.AntdFormItem(
                        fac.AntdCheckCard(
                            '选项卡片',
                            id='test-field4',
                            name='AntdCheckCard',
                            checked=False
                        ),
                        label='AntdCheckCard',
                        rules=[
                            {
                                'required': True,
                                'type': 'boolean',
                                'message': '必选字段',
                                'validateTrigger': 'onChange',
                            }
                        ]
                    ),
                    fac.AntdFormItem(
                        fac.AntdCheckCardGroup(
                            [
                                fac.AntdCheckCard(
                                    f'选择卡片组选项{i}',
                                    value=i
                                )
                                for i in range(1, 6)
                            ],
                            id='test-field5',
                            name='AntdCheckCardGroup',
                            multiple=True
                        ),
                        label='AntdCheckCardGroup',
                        rules=[
                            {
                                'required': True,
                                'type': 'array',
                                'message': '必选字段',
                                'validateTrigger': 'onChange',
                            }
                        ]
                    ),
                    fac.AntdFormItem(
                        fac.AntdCalendar(
                            id='test-field6',
                            name='AntdCalendar',
                            value=None,
                            style={
                                'width': '300px'
                            }
                        ),
                        label='AntdCalendar',
                        rules=[
                            {
                                'required': True,
                                'message': '必选字段',
                                'validateTrigger': 'onChange',
                            }
                        ]
                    ),
                    fac.AntdFormItem(
                        fac.AntdCascader(
                            id='test-field7',
                            name='AntdCascader',
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
                            ]
                        ),
                        label='AntdCascader',
                        rules=[
                            {
                                'required': True,
                                'type': 'array',
                                'message': '必选字段',
                                'validateTrigger': 'onChange',
                            }
                        ]
                    ),
                    fac.AntdFormItem(
                        fac.AntdCheckbox(
                            id='test-field8',
                            name='AntdCheckbox',
                        ),
                        label='AntdCheckbox',
                        rules=[
                            {
                                'required': True,
                                'type': 'boolean',
                                'message': '必选字段',
                                'validateTrigger': 'onChange',
                            }
                        ]
                    ),
                    fac.AntdFormItem(
                        fac.AntdCheckboxGroup(
                            id='test-field9',
                            name='AntdCheckboxGroup',
                            options=[f'选项{i}' for i in range(1, 6)]
                        ),
                        label='AntdCheckboxGroup',
                        rules=[
                            {
                                'required': True,
                                'type': 'array',
                                'message': '必选字段',
                                'validateTrigger': 'onChange',
                            }
                        ]
                    ),
                    fac.AntdFormItem(
                        fac.AntdColorPicker(
                            id='test-field10',
                            name='AntdColorPicker',
                            value=None
                        ),
                        label='AntdColorPicker',
                        rules=[
                            {
                                'required': True,
                                'message': '必选字段',
                                'validateTrigger': 'onChange',
                            }
                        ]
                    ),
                    fac.AntdFormItem(
                        fac.AntdDateRangePicker(
                            id='test-field11',
                            name='AntdDateRangePicker',
                            style={
                                'width': '100%'
                            }
                        ),
                        label='AntdDateRangePicker',
                        rules=[
                            {
                                'required': True,
                                'type': 'array',
                                'message': '必填字段',
                                'validateTrigger': 'onChange',
                            }
                        ]
                    ),
                    fac.AntdFormItem(
                        fac.AntdMentions(
                            id='test-field12',
                            name='AntdMentions',
                            options=[
                                {
                                    'label': f'用户{c}',
                                    'value': f'用户{c}'
                                }
                                for c in list('abcdef')
                            ],
                            style={
                                'width': '100%'
                            }
                        ),
                        label='AntdMentions',
                        rules=[
                            {
                                'required': True,
                                'message': '必填字段',
                                'validateTrigger': 'onChange',
                            }
                        ]
                    ),
                    fac.AntdFormItem(
                        fac.AntdRadioGroup(
                            id='test-field13',
                            name='AntdRadioGroup',
                            options=[f'选项{i}' for i in range(1, 6)]
                        ),
                        label='AntdRadioGroup',
                        rules=[
                            {
                                'required': True,
                                'message': '必选字段',
                                'validateTrigger': 'onChange',
                            }
                        ]
                    ),
                    fac.AntdFormItem(
                        fac.AntdRate(
                            id='test-field14',
                            name='AntdRate'
                        ),
                        label='AntdRate',
                        rules=[
                            {
                                'required': True,
                                'type': 'number',
                                'message': '必选字段',
                                'validateTrigger': 'onChange',
                            }
                        ]
                    ),
                    fac.AntdFormItem(
                        fac.AntdSlider(
                            id='test-field15',
                            name='AntdSlider',
                            min=0,
                            max=10,
                            style={
                                'width': '100%'
                            }
                        ),
                        label='AntdSlider',
                        rules=[
                            {
                                'required': True,
                                'type': 'number',
                                'message': '必选字段',
                                'validateTrigger': 'onChange',
                            }
                        ]
                    ),
                    fac.AntdFormItem(
                        fac.AntdSwitch(
                            id='test-field16',
                            name='AntdSwitch'
                        ),
                        label='AntdSwitch',
                        rules=[
                            {
                                'required': True,
                                'type': 'boolean',
                                'message': '必选字段',
                                'validateTrigger': 'onChange',
                            }
                        ]
                    ),
                    fac.AntdFormItem(
                        fac.AntdTimePicker(
                            id='test-field17',
                            name='AntdTimePicker',
                            style={
                                'width': '100%'
                            }
                        ),
                        label='AntdTimePicker',
                        rules=[
                            {
                                'required': True,
                                'message': '必选字段',
                                'validateTrigger': 'onChange',
                            }
                        ]
                    ),
                    fac.AntdFormItem(
                        fac.AntdTimeRangePicker(
                            id='test-field18',
                            name='AntdTimeRangePicker',
                            style={
                                'width': '100%'
                            }
                        ),
                        label='AntdTimeRangePicker',
                        rules=[
                            {
                                'required': True,
                                'type': 'array',
                                'message': '必选字段',
                                'validateTrigger': 'onChange',
                            }
                        ]
                    ),
                    fac.AntdFormItem(
                        fac.AntdTransfer(
                            id='test-field19',
                            name='AntdTransfer',
                            dataSource=[
                                {
                                    'key': i,
                                    'title': f'选项{i}'
                                }
                                for i in range(1, 10)
                            ],
                        ),
                        label='AntdTransfer',
                        rules=[
                            {
                                'required': True,
                                'type': 'array',
                                'message': '必选字段',
                                'validateTrigger': 'onChange',
                            }
                        ]
                    ),
                    fac.AntdFormItem(
                        fac.AntdTreeSelect(
                            id='test-field20',
                            name='AntdTreeSelect',
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
                                'width': '100%'
                            }
                        ),
                        label='AntdTreeSelect',
                        rules=[
                            {
                                'required': True,
                                'message': '必选字段',
                                'validateTrigger': 'onChange',
                            }
                        ]
                    ),
                    fac.AntdFormItem(
                        fac.AntdPictureUpload(
                            id='test-field21',
                            name='AntdPictureUpload',
                            apiUrl='/upload/'
                        ),
                        label='AntdPictureUpload',
                        rules=[
                            {
                                'required': True,
                                'type': 'array',
                                'message': '必选字段',
                                'validateTrigger': 'onChange',
                            }
                        ]
                    ),
                    fac.AntdFormItem(
                        fac.AntdDraggerUpload(
                            id='test-field22',
                            name='AntdDraggerUpload',
                            apiUrl='/upload/'
                        ),
                        label='AntdDraggerUpload',
                        rules=[
                            {
                                'required': True,
                                'type': 'array',
                                'message': '必选字段',
                                'validateTrigger': 'onChange',
                            }
                        ]
                    ),
                    fac.AntdFormItem(
                        fac.AntdUpload(
                            id='test-field23',
                            name='AntdUpload',
                            apiUrl='/upload/'
                        ),
                        label='AntdUpload',
                        rules=[
                            {
                                'required': True,
                                'type': 'array',
                                'message': '必选字段',
                                'validateTrigger': 'onChange',
                            }
                        ]
                    ),
                ],
                id='demo-form',
                labelCol={
                    'span': 3
                },
            ),
        ],
        direction='vertical',
        style={
            'width': '100%'
        }
    ),
    style={
        'padding': '50px 100px'
    }
)


@app.callback(
    Output('demo-form', 'submitForm'),
    Input('submit-button', 'nClicks'),
    prevent_initial_call=True
)
def manual_submit_form(nClicks):
    if nClicks:
        return True
    return dash.no_update


@app.callback(
    [Output('demo-form', 'resetForm'),
     Output('test-field1', 'value'),
     Output('test-field2', 'value'),
     Output('test-field3', 'value'),
     Output('test-field4', 'checked'),
     Output('test-field5', 'value'),
     Output('test-field6', 'value'),
     Output('test-field7', 'value'),
     Output('test-field8', 'checked'),
     Output('test-field9', 'value'),
     Output('test-field10', 'value'),
     Output('test-field11', 'value'),
     Output('test-field12', 'value'),
     Output('test-field13', 'value'),
     Output('test-field14', 'value'),
     Output('test-field15', 'value'),
     Output('test-field16', 'checked'),
     Output('test-field17', 'value'),
     Output('test-field18', 'value'),
     Output('test-field19', 'targetKeys'),
     Output('test-field20', 'value'),
     Output('test-field21', 'listUploadTaskRecord'),
     Output('test-field22', 'listUploadTaskRecord'),
     Output('test-field23', 'listUploadTaskRecord')],
    Input('reset-button', 'nClicks'),
    prevent_initial_call=True
)
def manual_reset_form(nClicks):
    if nClicks:
        return [True] + [None] * 20 + [[]] * 3
    return [dash.no_update] * 24


@app.callback(
    Output('demo-output', 'children'),
    Input('demo-form', 'submitFormClicks'),
    [State('demo-form', 'values'),
     State('demo-form', 'formValidateStatus')],
    prevent_initial_call=True
)
def show_form_values(submitFormClicks, values, formValidateStatus):
    if formValidateStatus:
        return json.dumps(
            values,
            ensure_ascii=False,
            indent=4
        )
    return '校验失败'


@app.server.route('/upload/', methods=['POST'])
def upload():
    '''
    构建文件上传服务
    :return:
    '''

    # 获取上传id参数，用于指向保存路径
    uploadId = request.values.get('uploadId')

    # 获取上传的文件名称
    filename = request.files['file'].filename

    # 基于上传id，若本地不存在则会自动创建目录
    try:
        os.makedirs(os.path.join('caches', uploadId))
    except FileExistsError:
        pass

    # 流式写出文件到指定目录
    with open(os.path.join('caches', uploadId, filename), 'wb') as f:
        # 流式写出大型文件，这里的10代表10MB
        for chunk in iter(lambda: request.files['file'].read(1024 * 1024 * 10), b''):
            f.write(chunk)

    return {'filename': filename}


if __name__ == '__main__':
    app.run(debug=True)
