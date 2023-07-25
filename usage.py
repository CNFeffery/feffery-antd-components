import dash
import random
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
                for i in range(1, 4)
            ],
            data=[
                {
                    f'字段{i}': random.choice(list('abcdefgh'))
                    for i in range(1, 4)
                }
                for row in range(100)
            ],
            bordered=True,
            filterOptions={
                '字段1': {
                    'filterMode': 'tree',
                    'filterCustomTreeItems': [
                        {
                            'text': s,
                            'value': s
                        }
                        for s in list('abcdefgh')
                    ],
                    'filterSearch': True,
                    'filterMultiple': True
                }
            }
        )
    ],
    style={
        'padding': 150
    }
)


if __name__ == '__main__':
    app.run(debug=True)
