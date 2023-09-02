import dash
import json
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdTree(
            id='input',
            treeData=[
                {
                    'title': '四川省',
                    'key': '四川省',
                    'children': [
                        {
                            'title': '成都市',
                            'key': '成都市',
                        },
                        {
                            'title': '广安市',
                            'key': '广安市',
                        }
                    ],
                    'contextMenu': [
                        {
                            'key': f'四川省-操作选项{i}',
                            'label': f'操作选项{i}'
                        }
                        for i in range(1, 6)
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
                                    'key': '解放碑街道',
                                }
                            ]
                        },
                        {
                            'title': '渝北区',
                            'key': '渝北区',
                        }
                    ],
                    'contextMenu': [
                        {
                            'key': f'重庆市-操作选项{i}',
                            'label': f'操作选项{i}',
                            'icon': 'antd-function'
                        }
                        for i in range(1, 6)
                    ]
                }
            ],
            defaultExpandAll=True,
            enableNodeFavorites=True
        ),
        html.Pre(
            id='output'
        )
    ],
    style={
        'padding': 50
    }
)


@app.callback(
    Output('output', 'children'),
    Input('input', 'favoritedKeys')
)
def demo(favoritedKeys):

    return json.dumps(
        dict(favoritedKeys=favoritedKeys),
        indent=4,
        ensure_ascii=False
    )


if __name__ == '__main__':
    app.run(debug=True)
