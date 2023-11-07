import json
import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__, compress=True)

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
            ] * 10000,
            bordered=True,
            virtual=True,
            maxHeight=800,
            pagination=False
        )
    ],
    style={
        'padding': '50px 100px'
    }
)


if __name__ == '__main__':
    app.run(debug=True)
