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
        fac.AntdButton(
            '按钮测试1',
            type='link',
            className={
                'border': '2px solid red',
                '&:hover': {
                    'scale': 1.25,
                    'border': '2px solid red'
                }
            }
        ),
        fac.AntdButton(
            '按钮测试2',
            type='link',
            className={
                'border': '2px solid green',
                '&:hover': {
                    'scale': 1.25
                },
                '&:before': {
                    'content': '测试'
                }
            }
        )
    ],
    style={
        'width': '800px',
        'margin': '0 auto'
    }
)

if __name__ == '__main__':
    app.run(debug=True)
