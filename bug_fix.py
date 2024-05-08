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
                    'dataIndex': 'status-badge示例',
                    'title': 'status-badge示例',
                    'renderOptions': {
                        'renderType': 'status-badge'
                    },
                },
            ],
            data=[
                {
                    '常规字段': '测试',
                    'status-badge示例': {
                        'text': '测试',
                        'status': 'processing',
                    },
                },
                {
                    '常规字段': '测试',
                    'status-badge示例': None,
                },
                {
                    '常规字段': '测试',
                    'status-badge示例': {},
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
