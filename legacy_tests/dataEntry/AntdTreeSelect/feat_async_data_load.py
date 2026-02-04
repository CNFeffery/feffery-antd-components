if True:
    import sys

    sys.path.append('../../../')
    import time

    import dash
    from dash import html
    from dash.dependencies import Input, Output, State
    from feffery_dash_utils.tree_utils import TreeManager

    import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdTreeSelect(
            id='tree-select-demo',
            treeData=[
                {
                    'key': '节点1',
                    'title': '节点1',
                    'value': '节点1',
                },
                {
                    'key': '节点2',
                    'title': '节点2',
                    'value': '节点2',
                },
                {
                    'key': '节点3',
                    'title': '节点3',
                    'value': '节点3',
                    'isLeaf': True,
                },
            ],
            enableAsyncLoad=True,
            style={'width': 300},
        )
    ],
    style={'padding': 100},
)


@app.callback(
    Output('tree-select-demo', 'treeData'),
    Input('tree-select-demo', 'loadingNode'),
    State('tree-select-demo', 'treeData'),
    prevent_initial_call=True,
)
def tree_select_demo(loadingNode, treeData):
    time.sleep(0.5)
    return TreeManager.update_tree_node(
        treeData,
        node_key=loadingNode['key'],
        new_node={
            'children': [
                {
                    'key': loadingNode['key'] + '-1',
                    'title': loadingNode['key'] + '-1',
                    'value': loadingNode['key'] + '-1',
                }
            ]
        },
        mode='overlay',
    )


if __name__ == '__main__':
    app.run(debug=True)
