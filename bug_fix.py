import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output, State

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdButton(
            '更新状态',
            id='update-statuses'
        ),
        fac.AntdForm(
            [
                fac.AntdFormItem(
                    fac.AntdInput(
                        name=f'表单项{i}',
                        style={
                            'width': 300
                        }
                    ),
                    label=f'表单项{i}',
                    hasFeedback=True
                )
                for i in range(20)
            ],
            id='demo-form',
            helps={
                f'表单项{i}': f'表单项{i}'
                for i in range(20)
            },
            validateStatuses={
                f'表单项{i}': 'success'
                for i in range(20)
            }
        )
    ],
    style={
        'padding': 50
    }
)

@app.callback(
    [Output('demo-form', 'validateStatuses'),
    Output('demo-form', 'helps')],
    Input('update-statuses', 'nClicks'),
    prevent_initial_call=True
)
def update_statuses(nClicks):
    return [
        {
            f'表单项{i}': 'error'
            for i in range(20)
        },
        {
            f'表单项{i}': '新消息'
            for i in range(20)
        }
    ]

if __name__ == '__main__':
    app.run(debug=True)
