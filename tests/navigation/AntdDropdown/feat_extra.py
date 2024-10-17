if True:
    import sys

    sys.path.append('../../../')
    from dash import Dash, html
    import feffery_antd_components as fac
    from feffery_dash_utils.style_utils import style

app = Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdDropdown(
            title='触发点',
            menuItems=[
                {'title': '选项1', 'extra': '测试'},
                {'title': '选项2', 'extra': '测试'},
                {'isDivider': True},
                {'title': '选项3-1', 'extra': '测试'},
                {'title': '选项3-2', 'extra': '测试'},
            ],
        )
    ],
    style=style(padding=50),
)


if __name__ == '__main__':
    app.run(debug=True)
