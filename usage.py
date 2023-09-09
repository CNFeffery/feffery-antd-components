import dash
import json
import numpy as np
from dash import html, dcc
from datetime import datetime
import feffery_antd_components as fac
from dash.dependencies import Input, Output, State

app = dash.Dash(__name__, compress=True)

app.layout = html.Div(
    [
        fac.AntdUpload(),
        fac.AntdDraggerUpload(),
        fac.AntdPictureUpload(),
        fac.AntdTable(
            id='table-click-event-demo',
            columns=[
                {
                    'title': f'字段{i}',
                    'dataIndex': f'字段{i}',
                    'width': '20%'
                }
                for i in range(1, 6)
            ],
            data=[
                {
                    'key': f'row-{row}',
                    **{
                        f'字段{i}': f'字段{i}第{row}行'
                        for i in range(1, 6)
                    }
                }
                for row in range(1, 6)
            ],
            bordered=True,
            enableCellClickListenColumns=[
                f'字段{i}' for i in range(1, 6, 2)
            ]
        ),

        html.Pre(
            id='table-click-event-demo-output'
        )
    ],
    style={
        'padding': '50px 100px'
    }
)


@app.callback(
    Output('table-click-event-demo-output', 'children'),
    [Input('table-click-event-demo', 'nClicksCell'),
     Input('table-click-event-demo', 'nDoubleClicksCell')],
    [State('table-click-event-demo', 'enableCellClickListenColumns'),
     State('table-click-event-demo', 'recentlyCellClickColumn'),
     State('table-click-event-demo', 'recentlyCellClickRecord'),
     State('table-click-event-demo', 'recentlyCellDoubleClickColumn'),
     State('table-click-event-demo', 'recentlyCellDoubleClickRecord')],
    prevent_initial_call=True
)
def table_click_event_demo(nClicksCell,
                           nDoubleClicksCell,
                           enableCellClickListenColumns,
                           recentlyCellClickColumn,
                           recentlyCellClickRecord,
                           recentlyCellDoubleClickColumn,
                           recentlyCellDoubleClickRecord):

    return json.dumps(
        dict(
            enableCellClickListenColumns=enableCellClickListenColumns,
            nClicksCell=nClicksCell,
            recentlyCellClickColumn=recentlyCellClickColumn,
            recentlyCellClickRecord=recentlyCellClickRecord,
            nDoubleClicksCell=nDoubleClicksCell,
            recentlyCellDoubleClickColumn=recentlyCellDoubleClickColumn,
            recentlyCellDoubleClickRecord=recentlyCellDoubleClickRecord
        ),
        indent=4,
        ensure_ascii=False
    )


if __name__ == '__main__':
    app.run(debug=True)
