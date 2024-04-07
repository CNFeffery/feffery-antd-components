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
                    fac.AntdMentions(
                        options=[
                            {
                                'label': f'用户{c}',
                                'value': f'用户{c}'
                            }
                            for c in list('abcdef')
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
            fac.AntdMentions(
                options=[
                    {
                        'label': f'用户{c}',
                        'value': f'用户{c}'
                    }
                    for c in list('abcdef')
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
