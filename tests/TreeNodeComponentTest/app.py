if True:
    import sys
    sys.path.append('../..')
    import os
    import dash
    from dash import html, dcc
    import feffery_antd_components as fac

app = dash.Dash(__name__)

table = fac.AntdTable(
    id='table',
    columns=[
        {
            'title': 'Age',
            'dataIndex': 'age',
        },
        {
            'title': 'Address',
            'dataIndex': 'address',
        }
    ],
    data=[
        {
            'age': 32,
            'address': 'A1',
        },
        {
            'age': 45,
            'address': 'A2',
        }
    ],
)

app.layout = html.Div(
    html.Div(
        [
            fac.AntdTree(
                treeData=[
                    {
                        'title': '世界',
                        'key': '世界',
                        'icon_name': 'user',
                        'nodeComponent': dcc.Markdown('# 世界'),
                        'children': [
                            {
                                'title': '亚洲',
                                'key': '亚洲',
                                'nodeComponent': dcc.Markdown('# 亚洲'),
                                'children': [
                                    {
                                        'title': '中国',
                                        'key': '中国',
                                        'icon': 'antd-table',
                                        'style': {
                                            'color': 'red'
                                        }
                                    },
                                    {
                                        'title': '日本',
                                        'key': '日本',
                                        'icon_name': 'database',
                                        'disabled': True
                                    }
                                ]
                            },
                            {
                                'title': '北美洲',
                                'key': '北美洲',
                                'icon_name': 'file',
                                'children': [
                                    {
                                        'title': '美国',
                                        'key': '美国',
                                        'icon_name': 'file-text',
                                        'nodeComponent': table,
                                        'style': {
                                            'color': 'green'
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            )
        ],
        style={
            'padding': '30px 0'
        }
    ),
    style={
        'width': '800px',
        'margin': '0 auto'
    }
)

if __name__ == '__main__':
    app.run(debug=True)
