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
                        fac.AntdTreeSelect(
                            id='test-field1',
                            name='测试字段1',
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
                        label='测试字段1',
                        rules=[
                            {
                                'required': True,
                                'message': '必选字段',
                                'validateTrigger': 'onFocus',
                            }
                        ]
                    ),
                    fac.AntdFormItem(
                        fac.AntdButton(
                            '提交',
                            id='submit-button',
                            type='primary'
                        )
                    )
                ],
                id='demo-form'
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


@app.callback(
    Output('status-output', 'children'),
    Input('demo-form', 'formValidateStatus'),
    prevent_initial_call=True
)
def show_form_validate_status(formValidateStatus):
    return json.dumps(
        formValidateStatus,
        ensure_ascii=False,
        indent=4
    )


if __name__ == '__main__':
    app.run(debug=True)
