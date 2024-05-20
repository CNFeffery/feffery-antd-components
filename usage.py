import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
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
            * 10,
            bordered=True,
            summaryRowContents=[
                {
                    'content': fac.AntdText(
                        '第一行第1列总结',
                        style={'color': 'red'},
                    )
                },
                {
                    'content': '第一行第2到4列总结',
                    'colSpan': 3,
                    'align': 'center',
                },
                {
                    'content': '第一行第5列总结',
                    'align': 'right',
                },
                {
                    'content': fac.AntdText(
                        '第二行第1列总结',
                        style={'color': 'red'},
                    )
                },
                {
                    'content': '第二行第2到4列总结',
                    'colSpan': 3,
                    'align': 'center',
                },
                {
                    'content': '第二行第5列总结',
                    'align': 'right',
                },
            ],
            summaryRowFixed=True,
            maxHeight=150,
        )
    ],
    style={'padding': 50},
)

if __name__ == '__main__':
    app.run(debug=True)
