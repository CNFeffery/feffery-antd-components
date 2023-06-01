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
        fac.AntdButton(
            '刷新数据',
            id='refresh-data',
            type='primary'
        ),
        fac.AntdTable(
            id='table-demo',
            columns=[
                {
                    'title': f'字段{i}',
                    'dataIndex': f'字段{i}',
                    'width': 'calc(100% / 3)'
                }
                for i in range(1, 4)
            ],
            data=[
                {
                    'key': f'row-{i}',
                    '字段1': random.uniform(0, 10),
                    '字段2': random.uniform(0, 10),
                    '字段3': random.uniform(0, 10),
                }
                for i in range(3)
            ],
            bordered=True,
            rowSelectionType='checkbox',
            selectedRowsSyncWithData=False
        ),
        html.Pre(id='output')
    ],
    style={
        'padding': 50
    }
)


@app.callback(
    Output('output', 'children'),
    [Input('table-demo', 'selectedRowKeys'),
     Input('table-demo', 'selectedRows')]
)
def demo(selectedRowKeys, selectedRows):

    return json.dumps(
        dict(
            selectedRowKeys=selectedRowKeys,
            selectedRows=selectedRows
        ),
        indent=4,
        ensure_ascii=False
    )


@app.callback(
    Output('table-demo', 'data'),
    Input('refresh-data', 'nClicks'),
    prevent_initial_call=True
)
def refresh_data(nClicks):

    return [
        {
            'key': f'row-{i}',
            '字段1': random.uniform(0, 10),
            '字段2': random.uniform(0, 10),
            '字段3': random.uniform(0, 10),
        }
        for i in range(3)
    ]


if __name__ == '__main__':
    app.run(debug=True)
