import dash
import random
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
            ]
        ),
        fac.AntdForm(
            [
                fac.AntdFormItem(
                    fac.AntdCheckbox(
                        name=f'表单项{i}',
                        style={'width': 300},
                    ),
                    label=f'表单项{i}',
                    hasFeedback=True,
                )
                for i in range(50)
            ],
            id='demo-form',
            helps={
                f'表单项{i}': f'表单项{i}'
                for i in range(50)
            },
            validateStatuses={
                f'表单项{i}': 'success' for i in range(50)
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
        {f'表单项{i}': 'error' for i in range(50)},
        {f'表单项{i}': '新消息' for i in range(50)},
    ]


@app.callback(
    Output('demo-form', 'values'),
    Input('update-values', 'nClicks'),
    prevent_initial_call=True,
)
def update_values(nClicks):
    return {
        f'表单项{i}': random.uniform(1, 10) <= 2
        for i in range(50)
    }


if __name__ == '__main__':
    app.run(debug=True)
