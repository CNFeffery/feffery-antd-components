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
            ]
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
                        name=f'表单项{i}',
                    ),
                    label=f'表单项{i}',
                    hasFeedback=True,
                )
                for i in range(25)
            ],
            id='demo-form',
            helps={
                f'表单项{i}': f'表单项{i}'
                for i in range(25)
            },
            validateStatuses={
                f'表单项{i}': 'success' for i in range(25)
            },
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
        {f'表单项{i}': 'error' for i in range(25)},
        {f'表单项{i}': '新消息' for i in range(25)},
    ]


@app.callback(
    Output('demo-form', 'values'),
    Input('update-values', 'nClicks'),
    prevent_initial_call=True,
)
def update_values(nClicks):
    return {
        f'表单项{i}': ['节点1', '节点1-2', '节点1-2-1']
        for i in range(25)
    }


@app.callback(
    Output('demo-form', 'values', allow_duplicate=True),
    Input('clear-values', 'nClicks'),
    prevent_initial_call=True,
)
def clear_values(nClicks):
    return {f'表单项{i}': None for i in range(25)}


if __name__ == '__main__':
    app.run(debug=True)
