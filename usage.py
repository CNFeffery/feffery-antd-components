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
            html.Pre(
                '表单值'
            ),
            html.Pre(
                id='demo-output'
            ),
            fac.AntdButton(
                '加载初始数据',
                id='load-form-data',
                type='primary',
            ),
            fac.AntdForm(
                [
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
                        )
                    )
                ] + [fac.AntdFormItem(
                    fac.AntdInput(
                        id=f'test-field{i}',
                    ),
                    name=f'测试字段{i}',
                    label=f'测试字段{i}',
                    validateTrigger=['onBlur' if i % 2 else 'onChange'],
                    rules=[
                        {
                            'required': True,
                            'message': '不满足手机号码校验',
                            'validateTrigger': 'onBlur' if i % 2 else 'onChange',
                            'pattern': '^(?:(?:\+|00)86)?1[3-9]\d{9}$'
                        },
                    ]
                ) for i in range(3)] + [
                    fac.AntdFormItem(
                        fac.AntdInputNumber(
                            id='test-AntdInputNumber',
                            batchFormValuesMode=True,
                            batchPropsNames=['value', 'disabled']
                        ),
                        name='AntdInputNumber',
                        label='AntdInputNumber',
                        validateTrigger='onBlur',
                        valuePropName='batchPropsValues',
                        rules=[
                            {
                                'required': True,
                                'validator': '''
                                    (_, value) => {
                                        if (value?.value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error('请输入'));
                                    }
                                '''
                            },
                        ]
                    ),
                    fac.AntdFormItem(
                        fac.AntdCheckbox(
                            id='test-AntdCheckbox',
                        ),
                        name='AntdCheckbox',
                        label='AntdCheckbox',
                        validateTrigger='onBlur',
                        valuePropName='checked',
                        rules=[
                            {
                                'required': True,
                                'type': 'boolean',
                                'validateTrigger': 'onBlur',
                                'message': '请勾选'
                            },
                        ]
                    ),
                    fac.AntdFormItem(
                        fac.AntdTransfer(
                            dataSource=[
                                {
                                    'key': i,
                                    'title': f'选项{i}'
                                }
                                for i in range(1, 10)
                            ],
                            batchFormValuesMode=True,
                            batchPropsNames=[
                                'targetKeys', 'dataSource', 'moveDirection', 'moveKeys']
                        ),
                        name='AntdTransfer',
                        label='AntdTransfer',
                        validateTrigger='onChange',
                        valuePropName='batchPropsValues',
                        rules=[
                            {
                                'required': True,
                                'validator': '''
                                    (_, value) => {
                                        if (value?.targetKeys.length > 0) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error('请选择'));
                                    }
                                '''
                            },
                        ]
                    ),
                ],
                id='demo-form',
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
    Output('demo-form', 'values'),
    Input('load-form-data', 'nClicks'),
    prevent_initial_call=True
)
def initial_form_data(nClicks):
    if nClicks:
        return {
            f'测试字段{i}': f'测试值{i}' for i in range(3)
        }
    return dash.no_update


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
    Output('demo-form', 'resetForm'),
    Input('reset-button', 'nClicks'),
    prevent_initial_call=True
)
def manual_reset_form(nClicks):
    if nClicks:
        return True
    return dash.no_update


@app.callback(
    Output('demo-output', 'children'),
    Input('demo-form', 'submitFormClicks'),
    [State('demo-form', 'values'),
     State('demo-form', 'formValidateStatus')],
    prevent_initial_call=True
)
def show_form_values(submitFormClicks, values, formValidateStatus):
    # if formValidateStatus:
    return json.dumps(
        values,
        ensure_ascii=False,
        indent=4
    )
    # return '校验失败'


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
