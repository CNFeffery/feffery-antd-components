import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdCarousel(
            [
                fac.AntdImage(
                    src='https://fac.feffery.tech//assets/imgs/%E6%B5%81%E6%B5%AA%E5%9C%B0%E7%90%832%E6%B5%B7%E6%8A%A5.jpg'
                ) for i in range(3)
            ],
            arrows=True
        )
    ],
    style={'padding': '50px 100px'},
)


if __name__ == '__main__':
    app.run(debug=True)
