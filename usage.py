import random
from dash import Dash, html
import feffery_antd_components as fac


app = Dash(__name__)


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
                    f'字段{j}': random.randint(1, 4)
                    for j in range(1, 6)
                }
                for i in range(10)
            ],
            bordered=True,
            sortOptions={
                'sortDataIndexes': [
                    '字段1',
                    '字段2',
                    '字段4',
                    '字段5',
                ],
                'multiple': True,
            },
            showSorterTooltipTarget='sorter-icon',
        )
    ],
    style={'padding': 100},
)

if __name__ == '__main__':
    app.run(debug=True)
