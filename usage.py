import dash
import json
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdTable(
            id='demo-table1',
            columns=[
                {
                    'title': f'字段{i}',
                    'dataIndex': f'字段{i}'
                }
                for i in range(1, 6)
            ],
            data=[
                {
                    **{
                        f'字段{i}': '示例内容'
                        for i in range(1, 6)
                    },
                    'key': f'row-{row+1}'
                }
                for row in range(3)
            ],
            rowSelectionType='radio',
            rowSelectionIgnoreRowKeys=['row-2']
        ),

        fac.AntdTable(
            id='demo-table2',
            columns=[
                {
                    'title': f'字段{i}',
                    'dataIndex': f'字段{i}'
                }
                for i in range(1, 6)
            ],
            data=[
                {
                    **{
                        f'字段{i}': '示例内容'
                        for i in range(1, 6)
                    },
                    'key': f'row-{row+1}'
                }
                for row in range(3)
            ],
            rowSelectionType='checkbox',
            rowSelectionIgnoreRowKeys=['row-2']
        ),

        html.Pre(id='demo-output')
    ],
    style={
        'padding': '50px 100px'
    }
)


@app.callback(
    Output('demo-output', 'children'),
    [Input('demo-table1', 'selectedRowKeys'),
     Input('demo-table2', 'selectedRowKeys')]
)
def demo(selectedRowKeys1, selectedRowKeys2):

    return json.dumps(
        dict(
            selectedRowKeys1=selectedRowKeys1,
            selectedRowKeys2=selectedRowKeys2
        ),
        indent=4,
        ensure_ascii=False
    )


if __name__ == '__main__':
    app.run(debug=True)
