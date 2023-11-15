import dash
import uuid
import json
import time
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__, compress=True)

app.layout = html.Div(
    [
        fac.AntdSpace(
            [
                fac.AntdDatePicker(
                    placeholder='picker="date"',
                    format='YYYY年MM月DD日',
                    style={
                        'width': 175
                    }
                ),
                fac.AntdDatePicker(
                    placeholder='picker="week"',
                    picker='week',
                    format='YYYY-第W周',
                    style={
                        'width': 175
                    }
                ),
                fac.AntdDatePicker(
                    placeholder='picker="month"',
                    picker='month',
                    format='YYYY-MM',
                    style={
                        'width': 175
                    }
                ),
                fac.AntdDatePicker(
                    placeholder='picker="quarter"',
                    picker='quarter',
                    format='YYYY-第Q季度',
                    style={
                        'width': 175
                    }
                ),
                fac.AntdDatePicker(
                    placeholder='picker="year"',
                    picker='year',
                    format='YYYY年',
                    style={
                        'width': 175
                    }
                )
            ],
            direction='vertical'
        ),
        fac.AntdSpace(
            [
                fac.AntdDateRangePicker(
                    placeholder=[
                        'picker="date"', ''
                    ],
                    format='YYYY年MM月DD日',
                    style={
                        'width': 300
                    }
                ),
                fac.AntdDateRangePicker(
                    placeholder=[
                        'picker="week"', ''
                    ],
                    picker='week',
                    format='YYYY-第W周',
                    style={
                        'width': 300
                    }
                ),
                fac.AntdDateRangePicker(
                    placeholder=[
                        'picker="month"', ''
                    ],
                    picker='month',
                    format='YYYY-MM',
                    style={
                        'width': 300
                    }
                ),
                fac.AntdDateRangePicker(
                    placeholder=[
                        'picker="quarter"', ''
                    ],
                    picker='quarter',
                    format='YYYY-第Q季度',
                    style={
                        'width': 300
                    }
                ),
                fac.AntdDateRangePicker(
                    placeholder=[
                        'picker="year"', ''
                    ],
                    picker='year',
                    format='YYYY年',
                    style={
                        'width': 300
                    }
                )
            ],
            direction='vertical'
        )
    ],
    style={
        'padding': '50px 100px'
    }
)

if __name__ == '__main__':
    app.run(debug=True)
