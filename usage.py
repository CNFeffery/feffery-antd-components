import dash
from dash import html, dcc
import feffery_antd_components as fac
from dash.dependencies import Input, Output, State

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        dcc.Store(id='clicked-row-key'),
        fac.AntdTable(
            id='demo-table',
            columns=[
                {
                    'title': f'示例字段{i}',
                    'dataIndex': f'示例字段{i}'
                }
                for i in range(1, 9)
            ],
            data=[
                {
                    f'示例字段{j}': i
                    for j in range(1, 9)
                }
                for i in range(10)
            ],
            bordered=True,
            enableCellClickListenColumns=[
                f'示例字段{i}' for i in range(1, 9)
            ]
        )
    ],
    style={
        'padding': '50px 100px'
    }
)


@app.callback(
    [Output('clicked-row-key', 'data'),
     Output('demo-table', 'conditionalStyleFuncs')],
    Input('demo-table', 'nClicksCell'),
    [State('demo-table', 'recentlyCellClickColumn'),
     State('demo-table', 'recentlyCellClickRecord'),
     State('clicked-row-key', 'data')],
    prevent_initial_call=True
)
def highlight_clicked_cell(nClicksCell,
                           recentlyCellClickColumn,
                           recentlyCellClickRecord,
                           clicked_row_key):

    if clicked_row_key:
        # 若为同一单元格反复点击
        if (
            clicked_row_key['key'] == recentlyCellClickRecord['key'] and
            clicked_row_key['column'] == recentlyCellClickColumn
        ):
            return [
                None,
                {}
            ]

        return [
            {
                'key': recentlyCellClickRecord['key'],
                'column': recentlyCellClickColumn
            },
            {
                recentlyCellClickColumn: '''
                (record, index) => {
                    if ( record.key === "%s" ) {
                        return {
                            style: {
                                backgroundColor: "#ddf4ff"
                            }
                        }
                    }
                }
                ''' % recentlyCellClickRecord['key']
            }
        ]

    print(
        {
            recentlyCellClickColumn: '''
            (record, index) => {
                console.log(record)
                if ( record.key === "%s" ) {
                    return {
                        style: {
                            backgroundColor: "#ddf4ff"
                        }
                    }
                }
            }
            ''' % recentlyCellClickRecord['key']
        }
    )

    return [
        {
            'key': recentlyCellClickRecord['key'],
            'column': recentlyCellClickColumn
        },
        {
            recentlyCellClickColumn: '''
            (record, index) => {
                console.log(record)
                if ( record.key === "%s" ) {
                    return {
                        style: {
                            backgroundColor: "#ddf4ff"
                        }
                    }
                }
            }
            ''' % recentlyCellClickRecord['key']
        }
    ]


if __name__ == '__main__':
    app.run(debug=True)
