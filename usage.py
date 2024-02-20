import dash
import json
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output, State

app = dash.Dash(__name__)

app.layout = html.Div(
    fac.AntdSpace(
        [
            html.Pre(
                id='demo-output'
            ),
            html.Pre(
                id='status-output'
            ),
            fac.AntdForm(
                [
                    fac.AntdFormItem(
                        fac.AntdInput(
                            id='test-field1',
                            name='测试字段1',
                            value='13333333333'
                        ),
                        label='测试字段1',
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
                        fac.AntdInput(
                            id='test-field2',
                            name='测试字段2',
                            value='初始值'
                        ),
                        label='测试字段2',
                        rules=[
                            {
                                'required': True,
                                'message': '不能为空',
                                'validateTrigger': 'onChange',
                            },
                            {
                                'message': '长度不能大于5',
                                'validateTrigger': 'onChange',
                                'max': 5
                            }
                        ]
                    ),
                    fac.AntdFormItem(
                        fac.AntdInput(
                            id='test-field3',
                            name='测试字段3',
                            value='初始值123'
                        ),
                        label='测试字段3',
                        hasFeedback=True,
                        validateStatus='error',
                        rules=[
                            {
                                'required': True,
                                'message': '长度不能小于5',
                                'validateTrigger': 'onFocus',
                                'min': 5
                            }
                        ]
                    ),
                    fac.AntdFormItem(
                        fac.AntdCalendar(
                            id='test-field4',
                            name='测试字段4',
                            defaultValue='2023-01-01',
                            style={
                                'width': '300px'
                            }
                        )
                    ),
                    fac.AntdFormItem(
                        fac.AntdButton(
                            '提交',
                            id='submit-button',
                            type='primary'
                        )
                    )
                ][::-1],
                id='demo-form',
                validateStatuses={
                    '测试字段1': 'warning',
                    '测试字段2': 'error',
                    '测试字段3': 'validating'
                }
            )
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


# @app.callback(
#     Output('demo-form', 'submitForm'),
#     Input('submit-button', 'nClicks'),
#     prevent_initial_call=True
# )
# def manual_submit_form(nClicks):
#     if nClicks:
#         return True
#     return dash.no_update


# @app.callback(
#     Output('demo-output', 'children'),
#     Input('demo-form', 'submitFormClicks'),
#     [State('demo-form', 'values'),
#      State('demo-form', 'formValidateStatus')],
#     prevent_initial_call=True
# )
# def show_form_values(submitFormClicks, values, formValidateStatus):
#     if formValidateStatus:
#         return json.dumps(
#             values,
#             ensure_ascii=False,
#             indent=4
#         )
#     return '校验失败'


# @app.callback(
#     Output('status-output', 'children'),
#     Input('demo-form', 'formValidateStatus'),
#     prevent_initial_call=True
# )
# def show_form_validate_status(formValidateStatus):
#     return json.dumps(
#         formValidateStatus,
#         ensure_ascii=False,
#         indent=4
#     )


if __name__ == '__main__':
    app.run(debug=True)
