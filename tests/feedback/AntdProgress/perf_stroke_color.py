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
                percent=60,
                steps=5,
                strokeColor=[
                    '#389e0d',
                    '#389e0d',
                    '#f5222d',
                ],
            ),
            fac.AntdProgress(
                percent=95,
                strokeColor={
                    '0%': '#87d068',
                    '50%': '#ffe58f',
                    '100%': '#ffccc7',
                },
            ),
            fac.AntdProgress(
                percent=95,
                type='circle',
                strokeColor={
                    '0%': '#87d068',
                    '50%': '#ffe58f',
                    '100%': '#ffccc7',
                },
            ),
            fac.AntdProgress(
                percent=95,
                type='dashboard',
                strokeColor={
                    '0%': '#87d068',
                    '50%': '#ffe58f',
                    '100%': '#ffccc7',
                },
            ),
        ],
        direction='vertical',
        style=style(width='100%'),
    ),
    style=style(padding=50),
)

if __name__ == '__main__':
    app.run(debug=True)
