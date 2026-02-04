if True:
    import sys

    sys.path.append('../../../')
    import dash
    from dash.dependencies import Input, Output
    from feffery_dash_utils.style_utils import style

    import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = fac.AntdConfigProvider(
    fac.AntdCenter(
        fac.AntdSpace(
            [
                fac.AntdSwitch(
                    id='switch-theme',
                    checked=True,
                    checkedChildren='dark',
                    unCheckedChildren='default',
                ),
                '测试',
            ],
            direction='vertical',
            align='center',
        ),
        style=style(height='100vh'),
    ),
    id='config-provider',
    algorithm='dark',
    token={'fontSize': 18},
)

app.clientside_callback(
    '(checked) => checked ? "dark" : "default"',
    Output('config-provider', 'algorithm'),
    Input('switch-theme', 'checked'),
)

if __name__ == '__main__':
    app.run(debug=True)
