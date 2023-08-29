import dash
import json
from dash import html
from datetime import datetime
import feffery_antd_components as fac
from dash.dependencies import Input, Output, State

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdTree(
            id='input-demo',
            treeData=[
                {
                    'title': f'节点{i}',
                    'key': f'节点{i}'
                }
                for i in range(1, 4)
            ],
            draggable=True,
            checkable=True,
            multiple=True,
            batchPropsNames=['selectedKeys', 'checkedKeys', 'treeData'],
            style={
                'width': 200
            }
        ),
        html.Pre(id='output-demo')
    ],
    style={
        'padding': 150
    }
)


@app.callback(
    Output('output-demo', 'children'),
    Input('input-demo', 'batchPropsValues')
)
def demo(batchPropsValues):

    return json.dumps(
        batchPropsValues,
        indent=4,
        ensure_ascii=False
    )


if __name__ == '__main__':
    app.run(debug=True)
