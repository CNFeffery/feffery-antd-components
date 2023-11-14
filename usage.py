import dash
import uuid
import json
import time
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__, compress=True)

app.layout = html.Div(
    [
        fac.AntdDropdown(
            id='dropdown-demo',
            title='触发点',
            menuItems=[
                {
                    'title': '选项1',
                    'key': '选项1',
                },
                {
                    'title': '选项2',
                    'key': '选项2',
                },
                {
                    'isDivider': True
                },
                {
                    'title': '选项3-1',
                    'key': '选项3-1',
                },
                {
                    'title': '选项3-2',
                    'key': '选项3-2',
                }
            ],
            selectable=True,
            multiple=True,
            nonSelectableKeys=['选项2']
        ),
        html.Pre(
            id='output'
        )
    ],
    style={
        'padding': '50px 100px'
    }
)


@app.callback(
    Output('output', 'children'),
    [Input('dropdown-demo', 'selectedKeys'),
     Input('dropdown-demo', 'clickedKey'),
     Input('dropdown-demo', 'nClicks')]
)
def demo(selectedKeys, clickedKey, nClicks):

    return json.dumps(
        dict(
            selectedKeys=selectedKeys,
            clickedKey=clickedKey,
            nClicks=nClicks
        ),
        indent=4,
        ensure_ascii=False
    )


if __name__ == '__main__':
    app.run(debug=True)
