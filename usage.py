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
                    ),
                    fac.AntdFormItem(
                        fac.AntdCheckCardGroup(
                            [
                                fac.AntdCheckCard(
                                    f'选项{i}',
                                    value=i
                                )
                                for i in range(1, 6)
                            ],
                            id='test-field3',
                            defaultValue=[3],
                            name='测试字段3',
                            multiple=True
                        )
                    ),
                    fac.AntdFormItem(
                        fac.AntdCalendar(
                            id='test-field4',
                            name='测试字段4',
                            defaultValue='2023-01-01',
                            style={
                                'width': '300px'
                            }
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
