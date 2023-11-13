import dash
import json
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__, compress=True)

app.layout = html.Div(
    [
        fac.AntdSpace(
            [
                html.Pre(
                    id='output'
                ),
                fac.AntdColorPicker(
                    id='color-picker',
                    allowClear=True,
                    disabledAlpha=False
                )
            ],
            direction='vertical'
        )
    ],
    style={
        'padding': '50px 100px'
    }
)


@app.callback(
    Output('output', 'children'),
    Input('color-picker', 'value')
)
def demo(value):

    return json.dumps(
        dict(
            value=value
        ),
        indent=4,
        ensure_ascii=False
    )


if __name__ == '__main__':
    app.run(debug=True)
