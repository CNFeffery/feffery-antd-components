if True:
    import sys

    sys.path.append('../../../')
    import dash
    from dash import html
    import feffery_antd_components as fac
    from feffery_dash_utils.style_utils import style

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdForm(
            [
                fac.AntdFormItem(
                    fac.AntdInput(
                        id='login-user-name',
                        placeholder='请输入用户名',
                        size='large',
                        prefix=fac.AntdIcon(
                            icon='antd-user',
                            className='global-help-text',
                        ),
                        autoComplete='off',
                    ),
                    label='用户名',
                ),
                fac.AntdFormItem(
                    fac.AntdInput(
                        id='login-password',
                        placeholder='请输入密码',
                        size='large',
                        mode='password',
                        prefix=fac.AntdIcon(
                            icon='antd-lock',
                            className='global-help-text',
                        ),
                    ),
                    label='密码',
                ),
                fac.AntdCheckbox(
                    id='login-remember-me', label='记住我'
                ),
                fac.AntdButton(
                    '登录',
                    id='login-button',
                    loadingChildren='校验中',
                    type='primary',
                    block=True,
                    size='large',
                    style=style(marginTop=18),
                ),
            ],
            id='login-form',
            enableBatchControl=True,
            layout='vertical',
            style=style(width=350),
        )
    ],
    style={'padding': 100},
)

if __name__ == '__main__':
    app.run(debug=True)
