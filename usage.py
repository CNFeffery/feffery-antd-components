import dash
from dash import html, Patch
import feffery_antd_components as fac
from dash.dependencies import Input, Output, State

app = dash.Dash(__name__)

app.layout = fac.AntdConfigProvider(
    html.Div(
        [
            fac.AntdSpace(
                [
                    fac.AntdButton(
                        '添加后缀',
                        id='add-suufix',
                        type='primary'
                    ),
                    fac.AntdInput(
                        id='input-test',
                        mode='text-area'
                    )
                ],
                direction='vertical'
            ),
            fac.AntdSpace(
                [
                    fac.AntdInput(
                        id='tree-search-demo-keyword',
                        placeholder='请输入搜索关键词',
                        value='省',
                        style={
                            'width': '100%'
                        }
                    ),
                    fac.AntdTree(
                        id='tree-search-demo',
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
                        defaultExpandAll=True,
                        highlightStyle={
                            'background': '#ffffb8',
                            'padding': 0
                        }
                    )
                ],
                direction='vertical',
                style={
                    'width': '100%'
                }
            )
        ],
        style={
            'padding': 50
        }
    ),
    compatibilityMode=True
)


@app.callback(
    Output('input-test', 'value'),
    Input('add-suufix', 'nClicks'),
    State('input-test', 'value'),
    prevent_initial_call=True
)
def add_suufix(nClicks, origin_value):

    return (origin_value or '') + '-'


app.clientside_callback(
    '''(value) => value''',
    Output('tree-search-demo', 'searchKeyword'),
    Input('tree-search-demo-keyword', 'value')
)

if __name__ == '__main__':
    app.run(debug=True)
