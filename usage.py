import json
import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output
from feffery_dash_utils.style_utils import style

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdSegmentedColoring(
            id='input',
            min=-10,
            max=10,
            breakpoints=[0, 1, 2, 3, 4, 5],
            colors=[
                '#deecf9',
                '#71afe5',
                '#2b88d8',
                '#0078d4',
                '#106ebe',
            ],
        ),
        html.Pre(id='output'),
    ],
    style=style(padding=100),
)


@app.callback(
    Output('output', 'children'),
    Input('input', 'colorBlockClickEvent'),
    prevent_initial_call=True,
)
def demo(colorBlockClickEvent):
    return json.dumps(
        colorBlockClickEvent, indent=4, ensure_ascii=False
    )


if __name__ == '__main__':
    app.run(debug=True, port=8050)
