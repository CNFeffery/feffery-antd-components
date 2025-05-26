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
        fac.AntdImage(
            src='https://fac.feffery.tech/assets/imgs/components/AntdImage/%E7%A4%BA%E4%BE%8B%E5%9B%BE%E7%89%871.jpg',
            height=400,
        )
    ],
    style=style(padding=50),
)

if __name__ == '__main__':
    app.run(debug=True)
