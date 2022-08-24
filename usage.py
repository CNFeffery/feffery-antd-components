import json
import dash
import pandas as pd
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output, State

app = dash.Dash(__name__)

df = pd.DataFrame({'field1': [pd.NA]*10})

app.layout = html.Div(
    [
        fac.AntdSpin(
            [
                fac.AntdTable(
                    id='table-row-select-demo',
                    columns=[
                        {
                            'title': '字段示例1',
                            'dataIndex': '字段示例1'
                        },
                        {
                            'title': '字段示例2',
                            'dataIndex': '字段示例2'
                        },
                        {
                            'title': '字段示例3',
                            'dataIndex': '字段示例3'
                        }
                    ],
                    data=[
                        {
                            '字段示例1': i,
                            '字段示例2': i,
                            '字段示例3': i
                        }
                        for i in range(100)
                    ],
                    rowSelectionType='checkbox'
                ),

                fac.AntdSpace(
                    [
                        html.Div(
                            [
                                fac.AntdText('selectedRowKeys：', strong=True),
                                fac.AntdText(
                                    id='table-row-select-demo-selectedRowKeys-output')
                            ]
                        ),
                        html.Div(
                            [
                                fac.AntdText('selectedRows：', strong=True),
                                html.Pre(
                                    id='table-row-select-demo-selectedRows-output',
                                    style={
                                        'backgroundColor': 'rgb(250, 250, 250)'
                                    }
                                )
                            ]
                        )
                    ],
                    direction='vertical',
                    style={
                        'width': '100%'
                    }
                )
            ],
            text='回调中'
        )
    ],
    style={
        'width': '800px',
        'margin': '0 auto'
    }
)


@app.callback(
    [Output('table-row-select-demo-selectedRowKeys-output', 'children'),
     Output('table-row-select-demo-selectedRows-output', 'children')],
    [Input('table-row-select-demo', 'selectedRowKeys'),
     Input('table-row-select-demo', 'selectedRows')],
    prevent_initial_call=True
)
def table_row_select_demo_callback(selectedRowKeys, selectedRows):

    return dash.no_update
    # return str(selectedRowKeys), json.dumps(selectedRows, ensure_ascii=False, indent=4)


if __name__ == '__main__':
    app.run(debug=True)
