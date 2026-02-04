if True:
    import sys

    sys.path.append('../../../')
    from datetime import datetime

    import dash
    from dash import html

    import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdTable(
            columns=[
                {
                    'title': 'int型示例',
                    'dataIndex': 'int型示例',
                    'editable': True,
                    'width': '20%',
                },
                {
                    'title': 'float型示例',
                    'dataIndex': 'float型示例',
                    'editable': True,
                    'width': '20%',
                },
                {
                    'title': 'str型示例',
                    'dataIndex': 'str型示例',
                    'editable': True,
                    'width': '20%',
                },
                {
                    'title': '日期时间示例',
                    'dataIndex': '日期时间示例',
                    'editable': True,
                    'width': '20%',
                },
                {
                    'title': 'placeholder示例',
                    'dataIndex': 'placeholder示例',
                    'editable': True,
                    'width': '20%',
                    'editOptions': {
                        'placeholder': '请输入内容',
                        'disabledKeys': ['row-1', 'row-5'],
                    },
                },
            ],
            data=[
                {
                    'key': f'row-{i}',
                    'int型示例': 123,
                    'float型示例': 1.23,
                    'str型示例': '示例字符',
                    '日期时间示例': datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
                }
                for i in range(10)
            ],
            bordered=True,
        )
    ],
    style={'padding': 100},
)


if __name__ == '__main__':
    app.run(debug=True)
