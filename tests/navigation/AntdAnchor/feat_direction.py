if True:
    import sys

    sys.path.append('../../../')
    from dash import Dash, html
    import feffery_antd_components as fac
    from feffery_dash_utils.style_utils import style

app = Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdAnchor(
            direction='horizontal',
            linkDict=[
                {
                    'key': f'章节{i}',
                    'title': f'章节{i}',
                    'href': f'#章节{i}',
                }
                for i in range(1, 6)
            ],
            align='left',
        ),
        *[
            html.Div(
                fac.AntdDivider(
                    f'章节{i}',
                    id=f'章节{i}',
                    innerTextOrientation='right',
                ),
                style=style(paddingBottom=800),
            )
            for i in range(1, 6)
        ],
        html.Div(style={'height': 300}),
    ],
    style=style(padding=50),
)


if __name__ == '__main__':
    app.run(debug=True)
