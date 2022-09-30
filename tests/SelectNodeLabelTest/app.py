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
        fac.AntdSelect(
            options=[
                {
                    'label': fac.AntdSpace(
                        [
                            fac.AntdText(f'选项{i}'),
                            fac.AntdTag(
                                content='信息数据所',
                                color='blue'
                            )
                        ]
                    ),
                    'value': i
                }
                for i in range(1, 10)
            ],
            mode='multiple',
            maxTagCount='responsive',
            style={
                'width': '100%'
            }
        )
    ],
    style={
        'width': '80vw',
        'margin': '0 auto',
        'paddingTop': '25px'
    }
)

if __name__ == '__main__':
    app.run(debug=True)
