import dash
import json
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdTreeSelect(
            id='tree-select-demo',
            treeData=[
                {
                    'key': '节点1',
                    'value': '1',
                    'title': '节点1',
                    'children': [
                        {
                            'key': f'节点1-{i}',
                            'value': f'1-{i}',
                            'title': f'节点1-{i}'
                        }
                        for i in range(1, 5)
                    ]
                },
                {
                    'key': '节点2',
                    'value': '2',
                    'title': '节点2'
                }
            ],
            placeholder='请选择',
            style={
                'width': 256
            },
            batchPropsNames=[
                'id', 'value', 'treeExpandedKeys', 'treeData'
            ]
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
    Input('tree-select-demo', 'batchPropsValues'),
    prevent_initial_call=True
)
def demo_callback(batchPropsValues):

    return json.dumps(
        batchPropsValues,
        indent=4,
        ensure_ascii=False
    )


if __name__ == '__main__':
    app.run(debug=True)
