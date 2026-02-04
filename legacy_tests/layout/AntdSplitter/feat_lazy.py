if True:
    import sys

    sys.path.append('../../../')
    from dash import Dash, html
    from feffery_dash_utils.style_utils import style

    import feffery_antd_components as fac

app = Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdSpace(
            [
                fac.AntdSplitter(
                    items=[
                        {
                            'children': fac.AntdCenter(
                                f'item{i}',
                                style={'height': '100%'},
                            )
                        }
                        for i in range(1, 3)
                    ],
                    lazy=True,
                    style={
                        'height': 200,
                        'boxShadow': '0 0 10px rgba(0, 0, 0, 0.1)',
                    },
                ),
                fac.AntdSplitter(
                    items=[
                        {
                            'children': fac.AntdCenter(
                                f'item{i}',
                                style={'height': '100%'},
                            )
                        }
                        for i in range(1, 4)
                    ],
                    lazy=True,
                    style={
                        'height': 200,
                        'boxShadow': '0 0 10px rgba(0, 0, 0, 0.1)',
                    },
                ),
            ],
            direction='vertical',
            style={'width': '100%'},
        )
    ],
    style=style(padding=50),
)

if __name__ == '__main__':
    app.run(debug=True)
