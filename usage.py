import json
import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__, compress=True)

app.layout = html.Div(
    [
        fac.AntdSpace(
            [
                fac.AntdDateRangePicker(
                    id='date-range-picker-input',
                    style={
                        'width': 200
                    },
                    presets=[
                        {
                            'label': f'子项{i}',
                            'value': f'子项{i}'
                        }
                        for i in range(5)
                    ]
                ),
                html.Pre(
                    id='date-range-picker-output'
                )
            ],
            direction='vertical',
            style={
                'width': '100%'
            }
        )
    ],
    style={
        'padding': '50px 100px'
    }
)


@app.callback(
    Output('date-range-picker-output', 'children'),
    Input('date-range-picker-input', 'clickedPreset'),
    prevent_initial_call=True
)
def date_range_picker_demo(clickedPreset):

    return json.dumps(
        clickedPreset,
        indent=4,
        ensure_ascii=False
    )


if __name__ == '__main__':
    app.run(debug=True)
