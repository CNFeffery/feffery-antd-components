import dash
from dash import html
import feffery_antd_components as fac
from feffery_dash_utils.style_utils import style

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdSpace(
            [
                fac.AntdCarousel(
                    [
                        html.Div(
                            fac.AntdCenter(
                                i,
                                style={
                                    'color': 'white',
                                    'fontSize': 36,
                                    'height': '100%',
                                    'backgroundColor': '#364d79',
                                },
                            ),
                            style={
                                'height': 160,
                                'padding': '0 8px',
                            },
                        )
                        for i in range(1, 10)
                    ],
                    arrows=True,
                    infinite=True,
                    pauseOnHover=True,
                    autoplay=True,
                    slidesToShow=3,
                    slidesToScroll=3,
                )
            ],
            direction='vertical',
            style={'width': '100%'},
        )
    ],
    style=style(padding=100),
)


if __name__ == '__main__':
    app.run(debug=True, port=8050)
