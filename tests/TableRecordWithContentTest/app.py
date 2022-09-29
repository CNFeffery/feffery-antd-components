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
                    'title': '超链接示例',
                    'dataIndex': '超链接示例',
                    'renderOptions': {
                        'renderType': 'link',
                        'renderLinkText': '点击跳转'
                    }
                },
                {
                    'title': '单元格级链接文字控制',
                    'dataIndex': '单元格级链接文字控制',
                    'renderOptions': {
                        'renderType': 'link',
                        'renderLinkText': '点击跳转'
                    }
                }
            ],
            data=[
                {
                    'key': i,
                    '超链接示例': {
                        'href': 'https://github.com/CNFeffery/feffery-antd-components'
                    },
                    '单元格级链接文字控制': {
                        'href': 'https://github.com/CNFeffery/feffery-antd-components',
                        'content': f'超链接示例{i}'
                    }
                }
                for i in range(3)
            ],
            bordered=True,
            filterOptions={
                '单元格级链接文字控制': {
                    'filterMode': 'keyword'
                }
            },
            style={
                'width': '400px'
            }
        )
    ],
    style={
        'width': '800px',
        'margin': '0 auto',
        'paddingTop': '25px'
    }
)

if __name__ == '__main__':
    app.run(debug=True)
