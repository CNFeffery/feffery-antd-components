import time
import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdSegmented(
            id='table-size',
            options=[
                {
                    'label': size,
                    'value': size
                }
                for size in ['small', 'middle', 'large']
            ],
            value='middle'
        ),
        fac.AntdTable(
            id='demo-table',
            columns=[
                {
                    'title': f'示例字段{i}',
                    'dataIndex': f'示例字段{i}',
                    'width': 1
                }
                for i in range(1, 21)
            ],
            data=[
                {
                    f'示例字段{i}': '测试'
                    for i in range(1, 21)
                }
                for j in range(5)
            ],
            bordered=True,
            maxWidth=4080,
            pagination=False
        )
    ],
    style={
        'padding': '50px 100px'
    }
)

app.clientside_callback(
    '''(value) => value''',
    Output('demo-table', 'size'),
    Input('table-size', 'value')
)


if __name__ == '__main__':
    app.run(debug=True)
