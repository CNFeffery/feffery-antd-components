if True:
    import sys

    sys.path.append('../../../')
    import dash
    from dash import html

    import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        html.Div(
            fac.AntdTable(
                columns=[
                    {
                        'title': f'字段{i}',
                        'dataIndex': f'字段{i}',
                    }
                    for i in range(1, 6)
                ],
                data=[{f'字段{i}': '示例内容' for i in range(1, 6)}] * 3,
                maxWidth=900,
                title='maxWidth=900',
            ),
            style={'maxWidth': 700, 'margin': '0 auto'},
        ),
        fac.AntdTable(
            columns=[
                {
                    'title': f'字段{i}',
                    'dataIndex': f'字段{i}',
                }
                for i in range(1, 6)
            ],
            data=[{f'字段{i}': '示例内容' * 4 for i in range(1, 6)}] * 3,
            maxWidth='max-content',
            title='maxWidth="max-content"',
        ),
    ],
    style={'padding': 100},
)


if __name__ == '__main__':
    app.run(debug=True)
