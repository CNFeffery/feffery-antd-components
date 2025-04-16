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
        fac.AntdConfigProvider(
            [fac.AntdUpload(buttonContent='upload test')],
            algorithm='dark',
        )
    ],
    style=style(padding=50),
)

if __name__ == '__main__':
    app.run(debug=True)
