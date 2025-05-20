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
        fac.AntdSelect(
            options=[],
            locale='ru-ru',
            style=style(width=200),
        )
    ],
    style=style(padding=50),
)

if __name__ == '__main__':
    app.run(debug=True)
