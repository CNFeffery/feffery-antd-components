if True:
    import sys

    sys.path.append('../../../')
    import dash
    from dash import html
    from feffery_dash_utils.style_utils import style

    import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdTabs(
            items=[
                {
                    'key': '开启',
                    'label': '开启',
                    'children': fac.AntdHappyProvider(
                        fac.AntdSpace(
                            [
                                fac.AntdButton('测试', type='primary'),
                                fac.AntdSwitch(),
                                fac.AntdCheckbox(),
                                fac.AntdRadioGroup(options=['a', 'b', 'c']),
                            ]
                        )
                    ),
                },
                {
                    'key': '关闭',
                    'label': '关闭',
                    'children': fac.AntdHappyProvider(
                        fac.AntdSpace(
                            [
                                fac.AntdButton('测试', type='primary'),
                                fac.AntdSwitch(),
                                fac.AntdCheckbox(),
                                fac.AntdRadioGroup(options=['a', 'b', 'c']),
                            ]
                        ),
                        disabled=True,
                    ),
                },
            ]
        )
    ],
    style=style(padding=50),
)

if __name__ == '__main__':
    app.run(debug=True)
