import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdInput(
            id='input-demo',
            emptyAsNone=True,
            allowClear=True,
            style={
                'width': 200
            }
        ),

        fac.AntdText(
            id='input-demo-output'
        )
    ],
    style={
        'padding': '50px 100px'
    }
)


@app.callback(
    Output('input-demo-output', 'children'),
    Input('input-demo', 'value')
)
def input_demo(value):

    return str(value)


if __name__ == '__main__':
    app.run(debug=True)
