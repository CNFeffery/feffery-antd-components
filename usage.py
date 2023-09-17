import dash
import json
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output, State

app = dash.Dash(__name__, compress=True)

app.layout = dash.html.Div(
    [

        fac.AntdTable(
            columns=[
                {
                    'title': '字段测试',
                    'dataIndex': '字段测试'
                },
                {
                    'title': '自定义元素示例',
                    'dataIndex': '自定义元素示例'
                }
            ],
            data=[
                {
                    '字段测试': '巴拉巴拉',
                    '自定义元素示例': html.Div(
                        fac.AntdText(
                            '示例内容'*100,
                            style={
                                'textIndent': '2rem'
                            }
                        ),
                        style={
                            'maxHeight': 50,
                            'overflowY': 'auto',
                            'textAlign': 'left'
                        }
                    )
                }
            ] * 5,
            bordered=True,
            rowSelectionType='checkbox',
            style={
                'width': '100%'
            }
        )
    ],
    style={
        'padding': '50px 100px'
    }
)


if __name__ == '__main__':
    app.run(debug=True)
