if True:
    import sys

    sys.path.append('../../../')
    import dash
    from dash import html
    from feffery_dash_utils.style_utils import style

    import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    fac.AntdSpace(
        [
            fac.AntdSegmented(
                options=[
                    {
                        'value': 'sun',
                        'icon': 'antd-sun',
                    },
                    {
                        'value': 'moon',
                        'icon': 'antd-moon',
                    },
                ],
                value='sun',
                shape='round',
                size=size,
            )
            for size in ['small', 'middle', 'large']
        ],
        direction='vertical',
        style={'width': '100%'},
    ),
    style=style(padding=50),
)

if __name__ == '__main__':
    app.run(debug=True)
