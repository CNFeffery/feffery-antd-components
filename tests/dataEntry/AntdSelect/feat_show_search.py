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
        fac.AntdSpace(
            [
                fac.AntdSelect(
                    options=list('abc'),
                    style=style(width=200),
                ),
                fac.AntdSelect(
                    options=list('abc'),
                    showSearch=False,
                    style=style(width=200),
                ),
            ]
        )
    ],
    style=style(padding=50),
)

if __name__ == '__main__':
    app.run(debug=True)
