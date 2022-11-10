import dash
import json
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdSpace(
            [
                fac.AntdTree(
                    id='input',
                    draggable=True,
                    defaultExpandAll=True,
                    treeData=[
                        {
                            'title': '重庆市',
                            'key': '重庆市',
                            'children': [
                                {
                                    'title': '渝北区',
                                    'key': '渝北区'
                                },
                                {
                                    'title': '江北区',
                                    'key': '江北区',
                                    'disabled': True
                                }
                            ]
                        },
                        {
                            'title': '北京市',
                            'key': '北京市',
                            'children': [
                                {
                                    'title': '西城区',
                                    'key': '西城区'
                                },
                                {
                                    'title': '东城区',
                                    'key': '东城区'
                                }
                            ]
                        },
                        {
                            'title': '四川省',
                            'key': '四川省',
                            'children': [
                                {
                                    'title': '成都市',
                                    'key': '成都市',
                                    'children': [
                                        {
                                            'title': '天府新区',
                                            'key': '天府新区'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                ),

                html.Pre(
                    id='output'
                )
            ]
        )
    ],
    style={
        'padding': '50px'
    }
)


@app.callback(
    Output('output', 'children'),
    Input('input', 'treeData')
)
def demo(treeData):

    return json.dumps(
        treeData,
        ensure_ascii=False,
        indent=4
    )


if __name__ == '__main__':
    app.run(debug=True)
