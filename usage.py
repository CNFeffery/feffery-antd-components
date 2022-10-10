
import dash
import numpy as np
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output, State

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
                    f'字段{j}': np.random.randint(1, 5)
                    for j in range(1, 6)
                }
                for i in range(300)
            ],
            bordered=True,
            sortOptions={
                'sortDataIndexes': ['字段1', '字段2', '字段4', '字段5']
            },
            pagination={
                'position': 'topCenter'
            }
        )
    ],
    style={
        'padding': '50px'
    }
)

if __name__ == '__main__':
    app.run(debug=True)
