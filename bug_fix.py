import dash
import time
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdButton(
            '更新表单项',
            id='update-form-items'
        ),
        fac.AntdForm(
            [
                fac.AntdFormItem(
                    fac.AntdCascader(
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
                        name='表单项1'
                    ),
                    label='表单项1'
                )
            ],
            id='demo-form',
            layout='vertical'
        )
    ],
    style={
        'padding': 30
    }
)

@app.callback(
    Output('demo-form', 'children'),
    Input('update-form-items', 'nClicks'),
    prevent_initial_call=True
)
def update_form_items(nClicks):
    return [
        fac.AntdFormItem(
            fac.AntdCascader(
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
                name=f'表单项{time.time()}'
            ),
            label=f'表单项{time.time()}'
        )
    ]

if __name__ == '__main__':
    app.run(debug=True)
