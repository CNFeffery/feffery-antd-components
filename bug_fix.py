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
                    fac.AntdTreeSelect(
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
                        },
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
