import dash
import json
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdSelect(
            id='select-demo',
            options=[
                {
                    'label': f'选项{i}',
                    'value': f'选项{i}'
                }
                for i in range(1, 6)
            ],
            style={
                'width': 200
            },
            batchPropsNames=[
                'id', 'options', 'value'
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
    Input('select-demo', 'batchPropsValues'),
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
