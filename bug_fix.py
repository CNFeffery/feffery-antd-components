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
                        label='表单项1',
                        name='表单项1'
                    ),
                    label='表单项1'
                ),
                fac.AntdFormItem(
                    fac.AntdSwitch(
                        name='表单项2'
                    ),
                    label='表单项2'
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

if __name__ == '__main__':
    app.run(debug=True)
