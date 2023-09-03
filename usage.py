import dash
import json
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdButton(
            '滚动到节点66',
            id='button-demo'
        ),
        fac.AntdTree(
            id='tree-demo',
            treeData=[
                {
                    'title': '根节点',
                    'key': '根节点',
                    'children': [
                        {
                            'title': f'节点{i}',
                            'key': f'节点{i}'
                        }
                        for i in range(1000)
                    ]
                }
            ],
            defaultExpandAll=True,
            height=300
        )
    ],
    style={
        'padding': 50
    }
)


@app.callback(
    Output('tree-demo', 'scrollTarget'),
    Input('button-demo', 'nClicks'),
    prevent_initial_call=True
)
def demo(nClicks):

    return {
        'key': '节点66',
        'align': 'top',
        'offset': 140
    }


if __name__ == '__main__':
    app.run(debug=True)
