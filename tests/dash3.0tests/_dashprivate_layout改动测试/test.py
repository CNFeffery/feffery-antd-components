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
        html.Div(fac.__version__),
        fac.AntdDescriptions(
            [
                fac.AntdDescriptionItem('费弗里', label='姓名'),
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
        ),
    ],
    style=style(padding=50),
)

if __name__ == '__main__':
    app.run(debug=True)
