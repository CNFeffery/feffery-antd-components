import dash
import feffery_antd_components as fac
from dash import html, Input, Output

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdDatePicker(
            id='date_picker',
            defaultValue='2024-01-01',
            style={
                'width': 300
            }
        ),
        fac.AntdButton(
            '重置',
            id='button',
            type='primary'
        )
    ]
)


@app.callback(
    Output('date_picker', 'value'),
    Input('button', 'nClicks')
)
def reset(nClicks):

    return '2024-01-01'


if __name__ == '__main__':
    app.run(debug=True)
