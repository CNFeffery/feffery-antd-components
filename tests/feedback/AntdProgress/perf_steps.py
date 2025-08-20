if True:
    import sys

    sys.path.append('../../../')
    import dash
    from dash import html
    import feffery_antd_components as fac
    from feffery_dash_utils.style_utils import style

app = dash.Dash(__name__)

app.layout = html.Div(
    fac.AntdSpace(
        [
            fac.AntdProgress(
                percent=66,
                type='circle',
                steps={'count': 31, 'gap': 4},
                trailColor='rgba(0, 0, 0, 0.06)',
                strokeWidth=20,
            ),
            fac.AntdProgress(
                percent=66,
                type='dashboard',
                steps={'count': 31, 'gap': 4},
                trailColor='rgba(0, 0, 0, 0.06)',
                strokeWidth=20,
            ),
        ],
        direction='vertical',
        style=style(width='100%'),
    ),
    style=style(padding=50),
)

if __name__ == '__main__':
    app.run(debug=True)
