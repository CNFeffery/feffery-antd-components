if True:
    import sys
    sys.path.append('../..')
    import os
    import dash
    from dash import html
    import feffery_antd_components as fac

app = dash.Dash(__name__)


app.layout = html.Div(
    html.Div(
        [
            fac.AntdTree(
                treeData=[
                    {
                        'title': '世界',
                        'key': '世界',
                        'icon_name': 'user',
                        'children': [
                            {
                                'title': '亚洲',
                                'key': '亚洲',
                                'children': [
                                    {
                                        'title': '中国',
                                        'key': '中国',
                                        'icon_name': 'table',
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
