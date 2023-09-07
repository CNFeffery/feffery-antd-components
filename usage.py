import dash
import json
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdMentions(
            id='mentions-demo',
            autoSize={
                'minRows': 2,
                'maxRows': 4
            },
            options=[
                {
                    'label': f'用户{c}',
                    'value': f'用户{c}'
                }
                for c in list('abcdef')
            ],
            style={
                'width': 300
            },
            batchPropsNames=[
                'id', 'value', 'options', 'selectedOptions'
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
    Input('mentions-demo', 'batchPropsValues'),
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
