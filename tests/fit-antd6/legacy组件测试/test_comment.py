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
        fac.AntdComment(
            authorName='费弗里',
            authorNameHref='https://github.com/CNFeffery/feffery-antd-components',
            publishTime={
                'value': '2024-01-01 19:29:01',
                'format': 'YYYY-MM-DD hh:mm:ss',
            },
            commentContent='我希望feffery-components项目系列组件可以帮助更多人快速开发心仪的应用！😀',
        )
    ],
    style=style(padding=50),
)

if __name__ == '__main__':
    app.run(debug=True)
