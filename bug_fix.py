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
                    'dataIndex': 'ellipsis-copyable示例',
                    'title': 'ellipsis-copyable示例',
                    'renderOptions': {
                        'renderType': 'ellipsis-copyable'
                    },
                },
            ],
            data=[
                {
                    '常规字段': '测试',
                    'ellipsis-copyable示例': 'bala' * 10,
                },
                {
                    '常规字段': '测试',
                    'ellipsis-copyable示例': None,
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
