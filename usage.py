
import dash
import numpy as np
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output, State

app = dash.Dash(__name__)

app.layout = html.Div(
    [

        fac.AntdDropdown(
            title='触发点',
            buttonMode=True,
            menuItems=[
                {
                    'title': '子页面1'
                },
                {
                    'title': '子页面2'
                },
                {
                    'isDivider': True
                },
                {
                    'title': '子页面3-1'
                },
                {
                    'title': '子页面3-2'
                }
            ],
            buttonProps={
                'type': 'primary'
            },
            disabled=True
        ),

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
                for i in range(3000)
            ],
            bordered=True,
            sortOptions={
                'sortDataIndexes': ['字段1', '字段2', '字段4', '字段5']
            },
            pagination={
                'position': 'bottomCenter',
                'showSizeChanger': False,
                'current': 8,
                'showQuickJumper': True
            }
        )
    ],
    style={
        'padding': '50px'
    }
)

if __name__ == '__main__':
    app.run(debug=True)
