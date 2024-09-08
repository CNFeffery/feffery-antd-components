if True:
    import sys

    sys.path.append('../../../')
    import time
    import dash
    from dash import html
    import feffery_antd_components as fac
    from feffery_dash_utils.tree_utils import TreeManager
    from dash.dependencies import Input, Output, State

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdTree(
            id='tree-demo',
            treeData=[
                {
                    'key': '节点1',
                    'title': '节点1',
                },
                {
                    'key': '节点2',
                    'title': '节点2',
                    'children': [
                        {
                            'key': '节点2-1',
                            'title': '节点2-1',
                            'isLeaf': True,
                        },
                    ],
                },
                {
                    'key': '节点3',
                    'title': '节点3',
                    'isLeaf': True,
                },
            ],
            enableAsyncLoad=True,
        )
    ],
    style={'padding': 100},
)


@app.callback(
    Output('tree-demo', 'treeData'),
    Input('tree-demo', 'loadingNode'),
    State('tree-demo', 'treeData'),
    prevent_initial_call=True,
)
def tree_demo(loadingNode, treeData):
    time.sleep(0.5)
    return TreeManager.update_tree_node(
        treeData,
        node_key=loadingNode['key'],
        new_node={
            'children': [
                {
                    'key': loadingNode['key'] + '-1',
                    'title': loadingNode['key'] + '-1',
                }
            ]
        },
        mode='overlay',
    )


if __name__ == '__main__':
    app.run(debug=True)
