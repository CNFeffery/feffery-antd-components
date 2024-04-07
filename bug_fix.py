import dash
import uuid
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
                    fac.AntdSelect(
                        options=[
                            {
                                'label': f'选项{i}',
                                'value': f'选项{i}'
                            }
                            for i in range(1, 6)
                        ],
                        style={
                            'width': 200
                        },
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

    new_uuid = str(uuid.uuid4())

    return [
        fac.AntdFormItem(
            fac.AntdSelect(
                options=[
                    {
                        'label': f'选项{i}',
                        'value': f'选项{i}'
                    }
                    for i in range(1, 6)
                ],
                style={
                    'width': 200
                },
                name='表单项'+new_uuid
            ),
            label='表单项'+new_uuid
        )
    ]

if __name__ == '__main__':
    app.run(debug=True)
