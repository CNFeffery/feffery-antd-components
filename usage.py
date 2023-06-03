import json
import dash
import random
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output, State

app = dash.Dash(__name__)

demo_value = None

app.layout = html.Div(
    [
        fac.AntdTable(
            columns=[
                {
                    'dataIndex': f'字段{i}',
                    'title': f'字段{i}'
                }
                for i in range(1, 6)
            ],
            bordered=True,
            columnsWidthResizable=True,
            data=[
                {
                    f'字段{i}': 999
                    for i in range(1, 6)
                }
            ] * 5,
            # style={
            #     'width': 'fit-content'
            # }
        )
    ],
    style={
        'padding': 50
    }
)


if __name__ == '__main__':
    app.run(debug=True)
