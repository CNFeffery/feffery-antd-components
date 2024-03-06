import json
import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = html.Div(
    fac.AntdSpace(
        [
            fac.AntdBreadcrumb(
                id='breadcrumb-demo',
                items=[
                    {
                        'title': '子项',
                        'key': f'子项{i}'
                    }
                    for i in range(1, 4)
                ]
            ),
            html.Pre(id='output')
        ],
        direction='vertical',
        style={
            'width': '100%'
        }
    ),
    style={
        'padding': '50px 100px'
    }
)


@app.callback(
    Output('output', 'children'),
    Input('breadcrumb-demo', 'clickedItem')
)
def demo(clickedItem):

    return json.dumps(
        clickedItem,
        indent=4,
        ensure_ascii=False
    )


if __name__ == '__main__':
    app.run(debug=True)
