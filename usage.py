import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output, State

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdTable(
            id='table-demo',
            columns=[
                {
                    'title': f'字段{i}',
                    'dataIndex': f'字段{i}'
                }
                for i in range(1, 11)
            ],
            data=[
                {
                    'key': f'row-{row}',
                    **{
                        f'字段{i}': 999
                        for i in range(1, 11)
                    }
                }
                for row in range(10)
            ],
            rowSelectionType='checkbox',
            bordered=True,
            enableCellClickListenColumns=[
                f'字段{i}' for i in range(1, 11)
            ]
        )
    ],
    style={
        'padding': '50px 100px'
    }
)


@app.callback(
    Output('table-demo', 'selectedRowKeys'),
    Input('table-demo', 'nDoubleClicksCell'),
    [State('table-demo', 'recentlyCellDoubleClickRecord'),
     State('table-demo', 'selectedRowKeys')],
    prevent_initial_call=True
)
def update_selected_row_keys(nDoubleClicksCell,
                             recentlyCellDoubleClickRecord,
                             selectedRowKeys):

    selectedRowKeys = selectedRowKeys or []
    if recentlyCellDoubleClickRecord['key'] not in selectedRowKeys:
        return [
            *selectedRowKeys,
            recentlyCellDoubleClickRecord['key']
        ]

    return [
        key for key in selectedRowKeys
        if key != recentlyCellDoubleClickRecord['key']
    ]


if __name__ == '__main__':
    app.run(debug=True)
