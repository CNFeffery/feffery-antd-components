import json
import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output, State

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdTable(
            id='demo-table',
            columns=[
                {
                    'dataIndex': f'字段{i}',
                    'title': f'字段{i}',
                }
                for i in range(5)
            ],
            data=[
                {f'字段{i}': '测试' for i in range(5)}
                for i in range(10)
            ],
            bordered=True,
            size='small',
            enableCellClickListenColumns=[
                f'字段{i}' for i in range(5)
            ],
            style={'width': 600},
        ),
        html.Pre(id='context-menu-event'),
    ],
    style={'padding': '50px 100px'},
)


@app.callback(
    Output('context-menu-event', 'children'),
    Input('demo-table', 'recentlyContextMenuClickColumn'),
    Input('demo-table', 'recentlyContextMenuClickRecord'),
    Input('demo-table', 'nContextMenuClicksCell'),
    Input('demo-table', 'cellContextMenuClickEvent'),
    prevent_initial_call=True,
)
def demo(
    recentlyContextMenuClickColumn,
    recentlyContextMenuClickRecord,
    nContextMenuClicksCell,
    cellContextMenuClickEvent,
):
    return json.dumps(
        dict(
            recentlyContextMenuClickColumn=recentlyContextMenuClickColumn,
            recentlyContextMenuClickRecord=recentlyContextMenuClickRecord,
            nContextMenuClicksCell=nContextMenuClicksCell,
            cellContextMenuClickEvent=cellContextMenuClickEvent,
        ),
        indent=4,
        ensure_ascii=False,
    )


if __name__ == '__main__':
    app.run(debug=True)
