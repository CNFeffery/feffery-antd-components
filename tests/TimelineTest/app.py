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
        fac.AntdTimeline(
            items=[
                {
                    'content': [
                        fac.AntdParagraph(f'步骤{i}第1段'*50, italic=True),
                        fac.AntdParagraph(f'步骤{i}第2段'*50, italic=True)
                    ],
                    'icon': fac.AntdTooltip(
                        fac.AntdAvatar(
                            mode='text',
                            text='费弗里',
                            style={
                                'backgroundColor': 'rgb(16, 105, 246)'
                            }
                        ),
                        title=f'这是步骤{i}',
                        placement='left'
                    )
                }
                for i in range(5)
            ]
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
