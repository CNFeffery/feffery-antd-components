import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdTable(
            columns=[
                {
                    'dataIndex': '常规字段',
                    'title': '常规字段',
                },
                {
                    'dataIndex': 'corner-mark示例',
                    'title': 'corner-mark示例',
                    'renderOptions': {
                        'renderType': 'corner-mark'
                    },
                },
            ],
            data=[
                {
                    '常规字段': '测试',
                    'corner-mark示例': {
                        'content': '角标模式',
                        'color': 'red',
                        'offsetX': -7.5,
                        'offsetY': -8.5,
                        'placement': 'top-left',
                    },
                },
                {
                    '常规字段': '测试',
                    'corner-mark示例': None,
                },
                {
                    '常规字段': '测试',
                    'corner-mark示例': {},
                },
            ],
            bordered=True,
            style={'width': 300},
        )
    ],
    style={'padding': 50},
)

if __name__ == '__main__':
    app.run(debug=True)
