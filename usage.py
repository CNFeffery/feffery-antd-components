import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdSpace(
            [
                *[
                    fac.AntdDatePicker(
                        placement=placement,
                        placeholder=f'placement="{placement}"',
                        style={'width': 220},
                    )
                    for placement in [
                        'bottomLeft',
                        'bottomRight',
                        'topLeft',
                        'topRight',
                    ]
                ],
                *[
                    fac.AntdTimePicker(
                        placement=placement,
                        placeholder=f'placement="{placement}"',
                        style={'width': 220},
                    )
                    for placement in [
                        'bottomLeft',
                        'bottomRight',
                        'topLeft',
                        'topRight',
                    ]
                ],
                fac.AntdMentions(
                    disabled=True,
                    options=[{'label': 'a', 'value': 'a'}],
                ),
            ],
            direction='vertical',
        )
    ],
    style={'padding': 400},
)


if __name__ == '__main__':
    app.run(debug=True)
