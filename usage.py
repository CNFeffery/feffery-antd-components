import dash
import json
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output, State

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdSpace(
            [
                fac.AntdPopover(
                    fac.AntdButton(
                        '锚点元素'
                    ),
                    title='气泡卡片示例',
                    content='内容示例',
                    open=True,
                    permanent=True
                ),
                fac.AntdPopconfirm(
                    fac.AntdButton(
                        '触发'
                    ),
                    title='确认继续',
                    open=True,
                    permanent=True
                )
            ],
            size=100
        )
    ],
    style={
        'padding': 150
    }
)


if __name__ == '__main__':
    app.run(debug=True)
