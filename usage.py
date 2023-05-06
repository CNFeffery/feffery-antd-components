import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        html.Div(
            fac.AntdForm(
                [
                    fac.AntdFormItem(
                        fac.AntdInput(),
                        label='用户名'
                    ),
                    fac.AntdFormItem(
                        fac.AntdInput(
                            mode='password'
                        ),
                        label='密码'
                    ),
                    fac.AntdFormItem(
                        fac.AntdButton(
                            '登录',
                            type='primary'
                        ),
                        wrapperCol={
                            'offset': 4
                        }
                    )
                ],
                labelCol={
                    'span': 4
                },
                wrapperCol={
                    'span': 20
                },
                labelAlign='left',
                style={
                    'width': 300,
                    'margin': '0 auto'
                }
            )
        )
    ],
    style={
        'padding': '50px 100px'
    }
)


if __name__ == '__main__':
    app.run(debug=True)
