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
        fac.AntdCarousel(
            [
                fac.AntdCenter(
                    i,
                    style={
                        'color': 'white',
                        'fontSize': 36,
                        'height': 160,
                        'backgroundColor': '#364d79',
                    },
                )
                for i in range(1, 6)
            ],
            autoplay={'dotDuration': True},
        )
    ],
    style=style(padding=50),
)

if __name__ == '__main__':
    app.run(debug=True)
