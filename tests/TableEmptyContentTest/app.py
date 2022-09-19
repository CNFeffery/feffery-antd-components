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
            columns=[
                {
                    'title': f'字段{i}',
                    'dataIndex': f'字段{i}'
                }
                for i in range(5)
            ],
            emptyContent=fac.AntdEmpty(
                description='暂无记录'
            )
        )
    ],
    style={
        'width': '800px',
        'margin': '0 auto'
    }
)

if __name__ == '__main__':
    app.run(debug=True)
