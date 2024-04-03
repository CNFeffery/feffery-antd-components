import dash
import numpy as np
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdForm(
            [
                fac.AntdFormItem(
                    fac.AntdCheckbox(
                        label=f'勾选框{i}',
                        name=f'表单项{i}'
                    ),
                    label=f'表单项{i}'
                )
                for i in range(1, 26)
            ],
            id='demo-form',
            layout='vertical',
            helps={
                '表单项1': 'help示例',
                '表单项2': '错误提示示例'
            },
            validateStatuses={
                '表单项2': 'error'
            }
        )
    ],
    style={
        'padding': 30
    }
)

if __name__ == '__main__':
    app.run(debug=True)
