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
                    'title': 'image-avatar',
                    'dataIndex': 'image-avatar',
                    'renderOptions': {
                        'renderType': 'image-avatar'
                    },
                    'width': '75px'
                }
            ],
            data=[
                {
                    '字段1': '测试',
                    'image-avatar': {
                        'src': 'https://avatars.githubusercontent.com/u/49147660?s=64&v=4',
                        'size': 48
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
