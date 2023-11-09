import dash
import json
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output, ALL

app = dash.Dash(__name__, compress=True)

app.layout = html.Div(
    [
        html.Pre(id='output'),
        fac.AntdFloatButtonGroup(
            [
                fac.AntdFloatButton(
                    id={
                        'type': 'float-button',
                        'index': i
                    }
                )
                for i in range(1, 5)
            ],
            shape='square'
        )
    ],
    style={
        'padding': '50px 100px'
    }
)


@app.callback(
    Output('output', 'children'),
    Input(
        {
            'type': 'float-button',
            'index': ALL
        },
        'nClicks'
    ),
    prevent_initial_call=True
)
def demo(*args):

    return json.dumps(
        dash.ctx.triggered,
        indent=4,
        ensure_ascii=False
    )


if __name__ == '__main__':
    app.run(debug=True)
