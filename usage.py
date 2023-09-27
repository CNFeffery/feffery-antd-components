import dash
import json
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output, State

app = dash.Dash(__name__, compress=True)

app.layout = html.Div(
    [
        fac.AntdTree(
            treeData=[
                {
                    'title': '四川省',
                    'key': '四川省',
                    'children': [
                        {
                            'title': '成都市',
                            'key': '成都市'
                        },
                        {
                            'title': '广安市',
                            'key': '广安市'
                        }
                    ]
                },
                {
                    'title': '重庆市',
                    'key': '重庆市',
                    'children': [
                        {
                            'title': '渝中区',
                            'key': '渝中区',
                            'children': [
                                {
                                    'title': '解放碑街道',
                                    'key': '解放碑街道'
                                }
                            ]
                        },
                        {
                            'title': '渝北区',
                            'key': '渝北区'
                        }
                    ]
                }
            ],
            defaultExpandAll=True
        )
    ],
    style={
        'padding': '50px 100px'
    }
)


if __name__ == '__main__':
    app.run(debug=True)
