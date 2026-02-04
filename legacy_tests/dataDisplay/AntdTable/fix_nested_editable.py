if True:
    import sys

    sys.path.append('../../../')
    from datetime import datetime

    import dash
    from dash import html
    from feffery_dash_utils.style_utils import style

    import feffery_antd_components as fac

app = dash.Dash(__name__)

normal_table = fac.AntdTable(
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
            'editOptions': {'placeholder': '请输入内容'},
        },
    ],
    data=[
        {
            'int型示例': 123,
            'float型示例': 1.23,
            'str型示例': '示例字符',
            '日期时间示例': datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
        }
    ]
    * 3,
    bordered=True,
)

nested_table = fac.AntdTable(
    id='table-click-event-demo',
    columns=[
        {
            'title': f'Column {i}',
            'dataIndex': f'column-{i}',
            'width': 'calc(100% / 3)',
            'editable': True,
        }
        for i in range(1, 4)
    ],
    data=[
        {
            'key': f'row-{i}',
            'column-1': '第一层',
            'column-2': '第一层',
            'column-3': '第一层',
            'children': [
                {
                    'key': f'row-{i}{j}',
                    'column-1': '第二层',
                    'column-2': '第二层',
                    'column-3': '第二层',
                    'children': [
                        {
                            'key': f'row-{i}{j}{k}',
                            'column-1': '第二层',
                            'column-2': '第二层',
                            'column-3': '第二层',
                        }
                        for k in range(3)
                    ],
                }
                for j in range(3)
            ],
        }
        for i in range(3)
    ],
    bordered=True,
)

app.layout = html.Div(
    [
        fac.AntdSpace(
            [normal_table, nested_table],
            direction='vertical',
            style=style(width='100%'),
        )
    ],
    style=style(padding=50),
)


if __name__ == '__main__':
    app.run(debug=True)
