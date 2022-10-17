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
                    'title': '字段1',
                    'dataIndex': '字段1'
                },
                {
                    'title': 'dropdown-links',
                    'dataIndex': 'dropdown-links',
                    'renderOptions': {
                        'renderType': 'dropdown-links',
                        'dropdownProps': {
                            'title': '附件下载',
                            'trigger': 'click',
                            'placement': 'topCenter'
                        }
                    }
                }
            ],
            data=[
                {
                    '字段1': '测试',
                    'dropdown-links': [
                        {
                            'title': '附件1',
                            'href': 'https://github.com/'
                        },
                        {
                            'title': '附件2',
                            'href': 'https://github.com/'
                        }
                    ]
                }
                for i in range(10)
            ]
        )
    ],
    style={
        'width': '800px',
        'margin': '0 auto'
    }
)

if __name__ == '__main__':
    app.run(debug=True)
