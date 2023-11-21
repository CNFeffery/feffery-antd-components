import json
import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdTable(
            id='demo-table',
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
                    '字段1': '第一层',
                    '字段2': '第一层',
                    '字段3': '第一层',
                    'children': [
                        {
                            'key': f'row-{i}{j}',
                            '字段1': '第二层',
                            '字段2': '第二层',
                            '字段3': '第二层'
                        }
                        for j in range(3)
                    ]
                }
                for i in range(3)
            ],
            bordered=True
        ),
        html.Pre(id='output'),
        fac.AntdTransfer(
            dataSource=[
                {
                    'key': i,
                    'title': f'选项{i}'
                }
                for i in range(1, 10)
            ],
            targetKeys=[2, 3, 4],
            oneWay=False,
            selectionsIcon=fac.AntdIcon(icon='antd-setting')
        )
    ],
    style={
        'padding': '50px 100px'
    }
)


@app.callback(
    Output('output', 'children'),
    Input('demo-table', 'expandedRowKeys')
)
def demo(expandedRowKeys):

    return json.dumps(
        dict(
            expandedRowKeys=expandedRowKeys
        ),
        indent=4,
        ensure_ascii=False
    )


if __name__ == '__main__':
    app.run(debug=True)
