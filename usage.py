import dash
import random
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdText(
            '测试内容' * 100,
            ellipsis={
                'suffix': '😀'
            }
        ),
        fac.AntdParagraph(
            '测试内容' * 100,
            ellipsis={
                'expandable': True,
                'symbol': '😉',
                # 'suffix': '😀',
                'rows': 3
            }
        )
    ],
    style={
        'padding': 150
    }
)


if __name__ == '__main__':
    app.run(debug=True)
