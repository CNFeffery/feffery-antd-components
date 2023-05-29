import dash
import json
from datetime import datetime
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output, State

app = dash.Dash(__name__)


app.layout = html.Div(
    [
        fac.AntdSpace(
            [
                fac.AntdDateRangePicker(
                    id='demo-date-range-picker',
                    style={
                        'width': 300
                    }
                ),
                fac.AntdText(
                    id='demo-date-range-picker-open'
                )
            ],
            style={
                'width': '100%',
                'marginBottom': 25
            }
        ),

        fac.AntdSpace(
            [
                fac.AntdTimeRangePicker(
                    id='demo-time-range-picker',
                    style={
                        'width': 300
                    }
                ),
                fac.AntdText(
                    id='demo-time-range-picker-open'
                )
            ]
        )
    ],
    style={
        'padding': '50px 100px'
    }
)


@app.callback(
    Output('demo-date-range-picker-open', 'children'),
    Input('demo-date-range-picker', 'open')
)
def current_date_range_open(_open):

    return str(_open)


@app.callback(
    Output('demo-time-range-picker-open', 'children'),
    Input('demo-time-range-picker', 'open')
)
def current_time_range_open(_open):

    return str(_open)


if __name__ == '__main__':
    app.run(debug=True)
