import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdTable(
            columns=[
                {
                    'title': 'copyable示例',
                    'dataIndex': 'copyable示例',
                    'renderOptions': {
                        'renderType': 'copyable'
                    },
                }
            ],
            data=[{'copyable示例': 'bala' * 10}],
            bordered=True,
            style={'width': 200},
        ),
        fac.AntdTable(
            columns=[
                {
                    'title': 'ellipsis示例',
                    'dataIndex': 'ellipsis示例',
                    'renderOptions': {
                        'renderType': 'ellipsis'
                    },
                }
            ],
            data=[{'ellipsis示例': 'bala' * 10}],
            bordered=True,
            style={'width': 200},
        ),
        fac.AntdTable(
            columns=[
                {
                    'title': 'ellipsis-copyable示例',
                    'dataIndex': 'ellipsis-copyable示例',
                    'renderOptions': {
                        'renderType': 'ellipsis-copyable'
                    },
                }
            ],
            data=[
                {
                    'ellipsis-copyable示例': f'内容示例{i}'
                    * 10
                }
                for i in range(1, 4)
            ],
            bordered=True,
            style={'width': 200},
        ),
        fac.AntdTable(
            columns=[
                {
                    'title': f'字段{i}',
                    'dataIndex': f'字段{i}',
                    'width': '20%',
                }
                for i in range(1, 6)
            ],
            data=[
                {
                    f'字段{i}': '示例内容'
                    for i in range(1, 6)
                }
            ]
            * 5,
            bordered=True,
            summaryRowContents=[
                {'content': '第1列总结', 'name': 'xxx'},
                {
                    'content': '第2到4列总结',
                    'colSpan': 3,
                    'align': 'center',
                    'name': 'yyy',
                },
                {
                    'content': '第5列总结',
                    'align': 'right',
                    'name': 'zzz',
                },
            ],
        ),
    ],
    style={'padding': 100},
)

if __name__ == '__main__':
    app.run(debug=True)
