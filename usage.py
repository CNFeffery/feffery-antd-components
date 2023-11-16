import dash
from dash import html
import feffery_antd_components as fac
from datetime import datetime, timedelta

app = dash.Dash(__name__)


def render():
    '''动态layout生成'''

    return html.Div(
        [
            fac.AntdSpace(
                [
                    fac.AntdDatePicker(
                        id='date-picker-demo',
                        style={
                            'width': 150
                        },
                        presets=[
                            {
                                'label': '前1天',
                                'value': (datetime.now() - timedelta(days=1)).strftime('%Y-%m-%d')
                            },
                            {
                                'label': '后1天',
                                'value': (datetime.now() + timedelta(days=1)).strftime('%Y-%m-%d')
                            },
                            {
                                'label': '7天前',
                                'value': (datetime.now() - timedelta(days=7)).strftime('%Y-%m-%d')
                            },
                            {
                                'label': '7天后',
                                'value': (datetime.now() + timedelta(days=7)).strftime('%Y-%m-%d')
                            }
                        ]
                    ),
                    fac.AntdDateRangePicker(
                        id='date-range-picker-demo',
                        style={
                            'width': 220
                        },
                        presets=[
                            {
                                'label': '前7天',
                                'value': [
                                    (datetime.now() - timedelta(days=7))
                                    .strftime('%Y-%m-%d'),
                                    datetime.now().strftime('%Y-%m-%d')
                                ]
                            },
                            {
                                'label': '后7天',
                                'value': [
                                    datetime.now().strftime('%Y-%m-%d'),
                                    (datetime.now() + timedelta(days=7))
                                    .strftime('%Y-%m-%d')
                                ]
                            },
                            {
                                'label': '前15天',
                                'value': [
                                    (datetime.now() - timedelta(days=15))
                                    .strftime('%Y-%m-%d'),
                                    datetime.now().strftime('%Y-%m-%d')
                                ]
                            },
                            {
                                'label': '后15天',
                                'value': [
                                    datetime.now().strftime('%Y-%m-%d'),
                                    (datetime.now() + timedelta(days=15))
                                    .strftime('%Y-%m-%d')
                                ]
                            },
                            {
                                'label': '前30天',
                                'value': [
                                    (datetime.now() - timedelta(days=30))
                                    .strftime('%Y-%m-%d'),
                                    datetime.now().strftime('%Y-%m-%d')
                                ]
                            },
                            {
                                'label': '后30天',
                                'value': [
                                    datetime.now().strftime('%Y-%m-%d'),
                                    (datetime.now() + timedelta(days=30))
                                    .strftime('%Y-%m-%d')
                                ]
                            }
                        ]
                    )
                ]
            )
        ],
        style={
            'padding': '50px 100px'
        }
    )


app.layout = render


if __name__ == '__main__':
    app.run(debug=True)
