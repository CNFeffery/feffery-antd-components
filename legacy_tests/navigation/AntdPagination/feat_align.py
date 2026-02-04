if True:
    import sys

    sys.path.append('../../../')
    from dash import Dash, html
    from feffery_dash_utils.style_utils import style

    import feffery_antd_components as fac

app = Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdDivider("align='start'"),
        fac.AntdPagination(defaultPageSize=10, total=100, align='start'),
        fac.AntdDivider("align='center'"),
        fac.AntdPagination(defaultPageSize=10, total=100, align='center'),
        fac.AntdDivider("align='end'"),
        fac.AntdPagination(defaultPageSize=10, total=100, align='end'),
    ],
    style=style(padding=50),
)


if __name__ == '__main__':
    app.run(debug=True)
