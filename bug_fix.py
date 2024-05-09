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
                    'dataIndex': 'image-avatar示例',
                    'title': 'image-avatar示例',
                    'renderOptions': {
                        'renderType': 'image-avatar'
                    },
                },
            ],
            data=[
                {
                    '常规字段': '测试',
                    'image-avatar示例': {
                        'src': '/_favicon.ico?v=2.16.1'
                    },
                },
                {
                    '常规字段': '测试',
                    'image-avatar示例': None,
                },
                {
                    '常规字段': '测试',
                    'image-avatar示例': {},
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
