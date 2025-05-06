if True:
    import sys

    sys.path.append('../../../')
    import json
    import dash
    from dash import html
    import feffery_antd_components as fac
    from dash.dependencies import Input, Output
    from feffery_dash_utils.style_utils import style

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdSpace(
            [
                fac.AntdForm(
                    [
                        fac.AntdFormItem(
                            fac.AntdInput(
                                name=f'表单项{i}',
                                enableBatchControl=i % 2
                                == 0,
                            ),
                            label=f'表单项{i}',
                        )
                        for i in range(1, 6)
                    ],
                    id='callback-listen-value-form-demo',
                    enableBatchControl=True,
                    layout='vertical',
                    values={
                        f'表单项{i}': f'这是表单项{i}的设定值'
                        for i in range(1, 6)
                        if i % 2 == 0
                    },
                ),
                html.Pre(
                    id='callback-listen-value-form-demo-output'
                ),
            ],
            direction='vertical',
            style={'width': '100%'},
        )
    ],
    style=style(padding=50),
)


@app.callback(
    Output(
        'callback-listen-value-form-demo-output', 'children'
    ),
    Input('callback-listen-value-form-demo', 'values'),
)
def callback_listen_value_demo(values):
    return json.dumps(values, ensure_ascii=False, indent=4)


if __name__ == '__main__':
    app.run(debug=True)
