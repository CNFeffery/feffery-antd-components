if True:
    import sys

    sys.path.append('../../../')
    import io
    import dash
    import pandas as pd
    from dash import html
    import feffery_antd_components as fac
    from dash.dependencies import Input, Output
    from feffery_dash_utils.style_utils import style

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdSpace(
            [
                fac.AntdSpace(
                    [
                        'False',
                        fac.AntdCopyText(
                            text='测试', tooltips=False
                        ),
                    ]
                ),
                fac.AntdSpace(
                    [
                        '文本',
                        fac.AntdCopyText(
                            text='测试',
                            tooltips=[
                                '点击复制~',
                                '复制完成~',
                            ],
                        ),
                    ]
                ),
                fac.AntdSpace(
                    [
                        '文本',
                        fac.AntdCopyText(
                            text='测试',
                            tooltips=[
                                fac.AntdText(
                                    '点击复制~', strong=True
                                ),
                                fac.AntdText(
                                    '复制完成~', strong=True
                                ),
                            ],
                        ),
                    ]
                ),
            ],
            direction='vertical',
            style=style(width='100%'),
        )
    ],
    style=style(padding=50),
)

if __name__ == '__main__':
    app.run(debug=True)
