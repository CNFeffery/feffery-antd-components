import dash
import json
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = html.Div(
    fac.AntdSpace(
        [
            html.Pre(
                id='demo-output'
            ),
            fac.AntdForm(
                [
                    fac.AntdFormItem(
                        fac.AntdInput(
                            id='test-field1',
                            name='测试字段1',
                            value='初始值'
                        )
                    ),
                    fac.AntdFormItem(
                        fac.AntdCheckCard(
                            '数值',
                            id='test-field2',
                            name='测试字段2',
                            checked=False
                        )
                    )
                ][::-1],
                id='demo-form'
            )
        ],
        direction='vertical',
        style={
            'width': '100%'
        }
    ),
    style={
        'padding': '50px 100px'
    }
)


@app.callback(
    Output('demo-output', 'children'),
    Input('demo-form', 'values'),
    prevent_initial_call=True
)
def demo(values):
    return json.dumps(
        values,
        ensure_ascii=False,
        indent=4
    )


if __name__ == '__main__':
    app.run(debug=True)
