if True:
    import sys
    sys.path.append('../..')
    import dash
    import json
    from dash import html
    import feffery_antd_components as fac
    from dash.dependencies import Input, Output

app = dash.Dash(
    __name__,
    suppress_callback_exceptions=True
)

app.layout = html.Div(
    [
        fac.AntdTable(
            id='input',
            columns=[
                {
                    'title': f'字段{i}',
                    'dataIndex': f'字段{i}'
                }
                for i in range(5)
            ],
            data=[
                {
                    f'字段{j}': i
                    for j in range(5)
                }
                for i in range(10)
            ],
            bordered=True,
            maxHeight=200,
            enableCellClickListenColumns=['字段1', '字段3']
        ),
        html.Br(),
        html.Pre(id='output')
    ],
    style={
        'width': '800px',
        'margin': '0 auto'
    }
)


@app.callback(
    Output('output', 'children'),
    [Input('input', 'recentlyCellClickColumn'),
     Input('input', 'recentlyCellClickRecord'),
     Input('input', 'nClicksCell')]
)
def demo(recentlyCellClickColumn, recentlyCellClickRecord, nClicksCell):

    return json.dumps(
        dict(
            recentlyCellClickColumn=recentlyCellClickColumn,
            recentlyCellClickRecord=recentlyCellClickRecord,
            nClicksCell=nClicksCell
        ),
        ensure_ascii=False,
        indent=4
    )


if __name__ == '__main__':
    app.run(debug=True)
