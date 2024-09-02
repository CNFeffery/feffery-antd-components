if True:
    import sys

    sys.path.append('../../../../')
    import dash
    from dash import html
    import feffery_antd_components as fac
    from feffery_dash_utils.style_utils import style

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdDescriptions(
            [
                fac.AntdDescriptionItem(
                    '费弗里', label='姓名'
                ),
                fac.AntdDescriptionItem(
                    html.A(
                        'https://github.com/CNFeffery',
                        href='https://github.com/CNFeffery',
                    ),
                    label='个人Github地址',
                ),
                fac.AntdDescriptionItem(
                    html.A(
                        'https://www.cnblogs.com/feffery/',
                        href='https://www.cnblogs.com/feffery/',
                    ),
                    label='个人博客地址',
                ),
                fac.AntdDescriptionItem(
                    html.A(
                        'http://fac.feffery.tech/',
                        href='http://fac.feffery.tech/',
                    ),
                    label='fac框架官网',
                ),
            ],
            title='描述列表示例',
            labelStyle={'fontWeight': 'bold'},
            extra=fac.AntdButton('编辑', type='primary'),
        ),
        fac.AntdDescriptions(
            items=[
                {
                    'label': fac.AntdText('姓名'),
                    'children': '费弗里',
                },
                {
                    'label': fac.AntdText('个人Github地址'),
                    'children': html.A(
                        'https://github.com/CNFeffery',
                        href='https://github.com/CNFeffery',
                    ),
                },
                {
                    'label': fac.AntdText('个人博客地址'),
                    'children': html.A(
                        'https://www.cnblogs.com/feffery/',
                        href='https://www.cnblogs.com/feffery/',
                    ),
                },
                {
                    'label': fac.AntdText('fac框架官网'),
                    'children': html.A(
                        'http://fac.feffery.tech/',
                        href='http://fac.feffery.tech/',
                    ),
                },
            ],
            title='描述列表示例',
            labelStyle={'fontWeight': 'bold'},
            bordered=True,
            extra=fac.AntdButton('编辑', type='primary'),
        ),
    ],
    style=style(padding=50),
)

if __name__ == '__main__':
    app.run(debug=True)
