if True:
    import sys

    sys.path.append('../../../')
    import dash
    from dash import html
    import feffery_antd_components as fac
    from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdSpace(
            [
                fac.AntdDatePicker(
                    id='date-picker-demo',
                    style={'width': 200},
                ),
                fac.AntdText(id='picker-value'),
            ],
            direction='vertical',
        )
    ],
    style={'padding': 100},
)


@app.callback(
    Output('picker-value', 'children'),
    Input('date-picker-demo', 'pickerValue'),
)
def show_picker_value(pickerValue):
    return pickerValue


if __name__ == '__main__':
    app.run(debug=True)
