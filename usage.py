import dash
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__, compress=True)

app.layout = dash.html.Div(
    [
        fac.AntdForm(
            [
                fac.AntdFormItem(
                    fac.AntdRadioGroup(
                        id='form-item-status-switch',
                        options=[
                            {
                                'label': 'None',
                                'value': 'None'
                            },
                            {
                                'label': 'success',
                                'value': 'success',
                            },
                            {
                                'label': 'warning',
                                'value': 'warning',
                            },
                            {
                                'label': 'error',
                                'value': 'error',
                            },
                            {
                                'label': 'validating',
                                'value': 'validating',
                            }
                        ],
                        optionType='button',
                        defaultValue='None'
                    ),
                    label='切换状态'
                ),
                fac.AntdFormItem(
                    fac.AntdInput(),
                    id='form-item-status-demo',
                    label='用户名'
                )
            ],
            labelCol={
                'span': 4
            },
            wrapperCol={
                'span': 20
            },
            style={
                'width': 500,
                'margin': '0 auto'
            }
        )
    ],
    style={
        'padding': '50px 100px'
    }
)


@app.callback(
    [Output('form-item-status-demo', 'validateStatus'),
     Output('form-item-status-demo', 'help')],
    Input('form-item-status-switch', 'value')
)
def form_item_status_demo(value):
    if not value or value == 'None':
        return None, None

    return value, f'validateStatus="{value}"'


if __name__ == '__main__':
    app.run(debug=True)
