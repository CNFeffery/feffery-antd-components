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
                    'dataIndex': 'tags示例',
                    'title': 'tags示例',
                    'renderOptions': {'renderType': 'tags'},
                },
            ],
            data=[
                {
                    '常规字段': '测试',
                    'tags示例': {
                        'tag': '测试',
                        'color': 'green',
                    },
                },
                {
                    '常规字段': '测试',
                    'tags示例': [
                        {
                            'tag': '测试',
                            'color': 'green',
                        },
                        {
                            'tag': '测试',
                            'color': 'green',
                        },
                    ],
                },
                {
                    '常规字段': '测试',
                    'tags示例': None,
                },
                {
                    '常规字段': '测试',
                    'tags示例': {},
                },
                {
                    '常规字段': '测试',
                    'tags示例': [],
                },
            ],
            bordered=True,
            style={'width': 200},
        )
    ],
    style={'padding': 50},
)

if __name__ == '__main__':
    app.run(debug=True)
