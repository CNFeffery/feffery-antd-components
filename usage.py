import dash
from dash import html
import feffery_antd_components as fac
from feffery_dash_utils.style_utils import style

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdSpace(
            [
                fac.AntdDatePicker(
                    placeholder='picker="date"',
                    format='YYYY年MM月DD日',
                    style={'width': 175},
                ),
                fac.AntdDatePicker(
                    placeholder='picker="week"',
                    picker='week',
                    format='YYYY年-第w周',
                    style={'width': 175},
                ),
                fac.AntdDatePicker(
                    placeholder='picker="month"',
                    picker='month',
                    format='YYYY年MM月',
                    style={'width': 175},
                ),
                fac.AntdDatePicker(
                    placeholder='picker="year"',
                    picker='year',
                    format='YYYY年',
                    style={'width': 175},
                ),
            ],
            direction='vertical',
        )
    ],
    style=style(padding=50),
)


if __name__ == '__main__':
    app.run(debug=True)
