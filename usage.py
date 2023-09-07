import dash
import json
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdTimeRangePicker(
            id='time-range-picker-demo',
            defaultValue=[
                '12:00:00',
                '13:00:00'
            ],
            batchPropsNames=[
                'id', 'value', 'format'
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
    Input('time-range-picker-demo', 'batchPropsValues'),
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
