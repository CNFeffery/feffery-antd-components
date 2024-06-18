import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdCarousel(
            [
                html.Div(
                    f'子元素{i}',
                    style={
                        'color': 'white',
                        'fontSize': '36px',
                        'height': '400px',
                        'backgroundColor': color,
                        'display': 'flex',
                        'justifyContent': 'center',
                        'alignItems': 'center',
                    },
                )
                for i, color in enumerate(
                    [
                        '#0050b3',
                        '#096dd9',
                        '#1890ff',
                        '#69c0ff',
                        '#91d5ff',
                    ]
                )
            ]
        )
    ],
    style={'padding': 50},
)


if __name__ == '__main__':
    app.run(debug=True)
