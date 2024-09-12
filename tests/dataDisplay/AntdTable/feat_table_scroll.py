if True:
    import sys

    sys.path.append('../../../')
    import dash
    from dash import html
    from datetime import datetime
    import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdTable(
            columns=[
                {
                    'title': 'int型示例',
                    'dataIndex': 'int型示例',
                },
                {
                    'title': 'float型示例',
                    'dataIndex': 'float型示例',
                },
                {
                    'title': 'str型示例',
                    'dataIndex': 'str型示例',
                },
                {
                    'title': '日期时间示例',
                    'dataIndex': '日期时间示例',
                },
            ],
            data=[
                {
                    'int型示例': 123,
                    'float型示例': 1.23,
                    'str型示例': '示例字符',
                    '日期时间示例': datetime.now(),
                    '布尔类型示例': True,
                }
            ]
            * 100,
            maxHeight=300,
            scrollToFirstRowOnChange=False,
            bordered=True,
            maxWidth='max-content',
        )
    ],
    style={'padding': 100},
)


if __name__ == '__main__':
    app.run(debug=True)
