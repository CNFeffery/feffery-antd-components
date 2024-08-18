import dash
from dash import html
import feffery_antd_components as fac
from feffery_dash_utils.style_utils import style

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        html.Div(
            [
                fac.AntdDivider(
                    'Solid',
                    variant='solid',
                    lineColor='#7cb305',
                ),
                fac.AntdDivider(
                    'Dotted',
                    variant='dotted',
                    lineColor='#7cb305',
                ),
                fac.AntdDivider(
                    'Dashed',
                    variant='dashed',
                    lineColor='#7cb305',
                ),
            ]
        ),
        html.Div(
            [
                'Solid',
                fac.AntdDivider(
                    direction='vertical',
                    variant='solid',
                    lineColor='#7cb305',
                ),
                'Dotted',
                fac.AntdDivider(
                    direction='vertical',
                    variant='dotted',
                    lineColor='#7cb305',
                ),
                'Dashed',
                fac.AntdDivider(
                    direction='vertical',
                    variant='dashed',
                    lineColor='#7cb305',
                ),
            ]
        ),
    ],
    style=style(padding=50),
)


if __name__ == '__main__':
    app.run(debug=True)
