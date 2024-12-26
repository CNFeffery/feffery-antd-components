if True:
    import sys

    sys.path.append('../../../')
    import dash
    from dash import html
    import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdTable(
            columns=[
                {
                    'title': '字段1',
                    'dataIndex': '字段1',
                },
                {
                    'title': '字段2',
                    'dataIndex': '字段2',
                },
                {
                    'title': '字段3',
                    'dataIndex': '字段3',
                    'group': '组1',
                },
                {
                    'title': '字段4',
                    'dataIndex': '字段4',
                    'group': '组1',
                },
                {
                    'title': '字段5',
                    'dataIndex': '字段5',
                },
                {
                    'title': '字段6',
                    'dataIndex': '字段6',
                },
            ],
            data=[
                {
                    f'字段{i}': f'示例内容{i}'
                    for i in range(1, 7)
                }
            ]
            * 5,
            bordered=True,
            summaryRowContents=[
                {'content': '第1列总结', 'align': 'center'},
                {
                    'content': '第2到3列总结',
                    'colSpan': 2,
                    'align': 'center',
                },
                {'content': '第4列总结', 'align': 'center'},
                {
                    'content': '第5到6列总结',
                    'colSpan': 2,
                    'align': 'center',
                },
                {'content': 'xxx', 'align': 'center'},
                {
                    'content': 'xxx',
                    'colSpan': 2,
                    'align': 'center',
                },
                {'content': 'xxx', 'align': 'center'},
                {
                    'content': 'xxx',
                    'colSpan': 2,
                    'align': 'center',
                },
            ],
            rowSelectionType='radio',
            summaryRowBlankColumns=1,
        ),
    ],
    style={'padding': 100},
)


if __name__ == '__main__':
    app.run(debug=True)
