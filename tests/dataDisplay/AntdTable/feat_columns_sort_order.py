if True:
    import sys

    sys.path.append('../../../')
    import dash
    import json
    import random
    from dash import html
    import feffery_antd_components as fac
    from feffery_dash_utils.style_utils import style
    from dash.dependencies import Input, Output, State

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdSpace(
            [
                fac.AntdTable(
                    id='table1',
                    columns=[
                        {
                            'title': 'int型示例',
                            'dataIndex': 'int型示例',
                            'width': '25%',
                        },
                        {
                            'title': 'float型示例',
                            'dataIndex': 'float型示例',
                            'width': '25%',
                        },
                        {
                            'title': 'str型示例',
                            'dataIndex': 'str型示例',
                            'width': '25%',
                            'defaultSortOrder': 'ascend',
                        },
                        {
                            'title': '日期时间示例',
                            'dataIndex': '日期时间示例',
                            'width': '25%',
                        },
                    ],
                    data=[
                        {
                            'int型示例': i,
                            'float型示例': round(
                                i * 0.1, 1
                            ),
                            'str型示例': f'示例字符{i}',
                            '日期时间示例': f'2099-01-0{i}',
                        }
                        for i in [4, 2, 1, 5, 3]
                    ],
                    sortOptions={
                        'sortDataIndexes': [
                            'int型示例',
                            'float型示例',
                            'str型示例',
                            '日期时间示例',
                        ]
                    },
                ),
                fac.AntdTable(
                    id='table2',
                    columns=[
                        {
                            'title': f'字段{i}',
                            'dataIndex': f'字段{i}',
                            'width': '20%',
                            'defaultSortOrder': 'ascend'
                            if i % 2 == 0
                            else 'descend',
                        }
                        for i in range(1, 6)
                    ],
                    data=[
                        {
                            f'字段{j}': random.randint(1, 4)
                            for j in range(1, 6)
                        }
                        for i in range(10)
                    ],
                    bordered=True,
                    sortOptions={
                        'sortDataIndexes': [
                            '字段1',
                            '字段2',
                            '字段4',
                            '字段5',
                        ],
                        'multiple': True,
                    },
                ),
                fac.AntdButton(
                    '获取columns',
                    id='get-columns',
                    type='primary',
                ),
                html.Pre(id='show-columns'),
            ],
            direction='vertical',
            style=style(width='100%'),
        )
    ],
    style={'padding': 100},
)


@app.callback(
    Output('show-columns', 'children'),
    Input('get-columns', 'nClicks'),
    [
        State('table1', 'columns'),
        State('table2', 'columns'),
    ],
    prevent_initial_call=True,
)
def show_columns(nClicks, table1_columns, table2_columns):
    return json.dumps(
        {
            'table1_columns': table1_columns,
            'table2_columns': table2_columns,
        },
        indent=4,
        ensure_ascii=False,
    )


if __name__ == '__main__':
    app.run(debug=True)
