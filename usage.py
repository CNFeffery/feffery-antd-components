import dash
import json
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdSegmentedColoring(
            id='segmented-coloring-demo',
            size='small',
            min=-10,
            max=10,
            breakpoints=[0, 1, 2, 3, 4, 5],
            colors=["#deecf9", "#71afe5",
                    "#2b88d8", "#0078d4",
                    "#106ebe"],
            batchPropsNames=[
                'id', 'min', 'max', 'breakpoints', 'colors', 'breakpoints'
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
    Input('segmented-coloring-demo', 'batchPropsValues'),
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
