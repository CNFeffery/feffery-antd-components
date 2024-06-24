import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdSpace(
            [
                fac.AntdInput(
                    addonBefore=1,
                    addonAfter=2,
                    prefix=3,
                    suffix=4,
                    mode=mode,
                )
                for mode in [
                    'default',
                    'text-area',
                    'password',
                    'search',
                ]
            ],
            direction='vertical',
            style={'width': 300},
        )
    ],
    style={'padding': 100},
)

if __name__ == '__main__':
    app.run(debug=True)
