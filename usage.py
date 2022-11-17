import dash
from dash import html
from datetime import datetime
import feffery_antd_components as fac
from dash.dependencies import Input, Output, State

app = dash.Dash(
    __name__,
    suppress_callback_exceptions=True
)

tree = fac.AntdTree(
    id='tree',
    defaultExpandAll=True,
    treeData=[
        {
            'title': '重庆市',
            'key': '重庆市',
            'tooltipProps': {
                'title': '😀tooltip'
            },
            'children': [
                {
                    'title': '渝北区',
                    'key': '渝北区',
                    'tooltipProps': {
                        'title': '🥳tooltip',
                        'placement': 'right'
                    }
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
)

app.layout = html.Div(
    [
        fac.AntdSpace(
            [
                fac.AntdButton(
                    'generate tree',
                    id='generate-tree',
                    type='primary'
                ),
                fac.AntdButton(
                    'update tree tooltips',
                    id='update-tree-tooltips',
                    type='primary'
                )
            ]
        ),

        html.Div(
            id='tree-container'
        )
    ],
    style={
        'padding': '100px'
    }
)


@app.callback(
    Output('tree-container', 'children'),
    Input('generate-tree', 'nClicks'),
    prevent_initial_call=True
)
def generate_tree_demo(nClicks):

    return tree


@app.callback(
    Output('tree', 'treeData'),
    Input('update-tree-tooltips', 'nClicks'),
    State('tree', 'treeData'),
    prevent_initial_call=True
)
def update_tree_tooltips_demo(nClicks, treeData):

    treeData[0]['children'][0]['tooltipProps'] = {
        'title': '🥳tooltip ' + datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
        'placement': 'right'
    }

    return treeData


if __name__ == '__main__':
    app.run(debug=True)
