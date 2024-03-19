import dash
import json
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__, compress=True)

app.layout = html.Div(
    fac.AntdSpace(
        [
            fac.AntdTable(
                id='demo-table',
                columns=[
                    {
                        'dataIndex': f'字段{i}',
                        'title': f'字段{i}'
                    }
                    for i in range(5)
                ],
                data=[
                    {
                        f'字段{i}': 'xxx'
                        for i in range(5)
                    }
                ] * 10,
                bordered=True,
                enableCellClickListenColumns=[
                    f'字段{i}' for i in range(5)
                ]
            ),
            html.Pre(id='output')
        ],
        direction='vertical',
        style={
            'width': '100%'
        }
    ),
    style={
        'padding': '50px 100px'
    }
)


@app.callback(
    Output('output', 'children'),
    [Input('demo-table', 'cellClickEvent'),
     Input('demo-table', 'cellDoubleClickEvent')]
)
def demo(cellClickEvent, cellDoubleClickEvent):

    return json.dumps(
        dict(
            cellClickEvent=cellClickEvent,
            cellDoubleClickEvent=cellDoubleClickEvent
        ),
        indent=4,
        ensure_ascii=False
    )


if __name__ == '__main__':
    app.run(debug=True)
