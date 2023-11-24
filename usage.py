import time
import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdTable(
            columns=[
                {
                    'title': f'字段{i}',
                    'dataIndex': f'字段{i}'
                }
                for i in range(1, 6)
            ],
            data=[
                {
                    f'字段{i}': '示例内容'
                    for i in range(1, 6)
                }
            ] * 200,
            sticky={
                'offsetHeader': 100,
                'offsetScroll': 100
            },
            pagination={
                'pageSize': 999
            },
            maxWidth=900
        )
    ],
    style={
        'padding': '50px 100px'
    }
)

if __name__ == '__main__':
    app.run(debug=True)
