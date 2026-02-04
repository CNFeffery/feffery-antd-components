if True:
    import sys

    sys.path.append('../../../')
    import json

    import dash
    from dash import html
    from dash.dependencies import Input, Output
    from feffery_dash_utils.style_utils import style

    import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdSpace(
            [
                fac.AntdSlider(
                    id='demo-slider',
                    min=0,
                    max=100,
                    defaultValue=[20, 30, 40, 50],
                    range={
                        'editable': True,
                        'minCount': 3,
                        'maxCount': 8,
                    },
                ),
                html.Pre(id='output'),
            ],
            direction='vertical',
            style=style(width='100%'),
        )
    ],
    style=style(padding=50),
)


@app.callback(
    Output('output', 'children'),
    Input('demo-slider', 'value'),
    prevent_initial_call=True,
)
def show_value(value):
    return json.dumps(value, ensure_ascii=False, indent=4)


if __name__ == '__main__':
    app.run(debug=True)
