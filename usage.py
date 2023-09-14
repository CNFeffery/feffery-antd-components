import dash
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = dash.html.Div(
    [
        fac.AntdSpace(
            [
                fac.AntdInput(
                    id='search-keyword',
                    placeholder='请输入搜索关键词',
                    style={
                        'width': 250
                    }
                ),
                fac.AntdTree(
                    id='demo-tree',
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
            direction='vertical',
            style={
                'width': '100%'
            }
        )
    ],
    style={
        'padding': '50px 100px'
    }
)


@app.callback(
    Output('demo-tree', 'searchKeyword'),
    Input('search-keyword', 'value')
)
def filter_tree(keyword):

    return keyword


if __name__ == '__main__':
    app.run(debug=True)
