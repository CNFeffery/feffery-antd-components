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
                    'dataIndex': 'copyable示例',
                    'title': 'copyable示例',
                    'renderOptions': {
                        'renderType': 'copyable'
                    },
                },
            ],
            data=[
                {
                    '常规字段': '测试',
                    'copyable示例': 'bala' * 4,
                },
                {
                    '常规字段': '测试',
                    'copyable示例': None,
                },
            ],
            bordered=True,
        )
    ],
    style={'padding': 50},
)

if __name__ == '__main__':
    app.run(debug=True)
