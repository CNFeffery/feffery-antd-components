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
                *[
                    {
                        'title': f'字段{i}',
                        'dataIndex': f'字段{i}'
                    }
                    for i in range(5)
                ],
                {
                    'title': '字段5',
                    'dataIndex': '字段5',
                    'renderOptions': {
                        'renderType': 'row-merge'
                    }
                }
            ],
            data=[
                {
                    **{
                        f'字段{j}': i
                        for j in range(5)
                    },
                    '字段5': {
                        'rowSpan': 2 if i % 2 == 0 else 0,
                        'content': int(i / 2)
                    }
                }
                for i in range(10)
            ],
            bordered=True
        )
    ],
    style={
        'width': '800px',
        'margin': '0 auto'
    }
)

if __name__ == '__main__':
    app.run(debug=True)
