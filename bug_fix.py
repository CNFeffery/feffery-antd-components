import dash
import feffery_antd_components as fac
from dash import Input, Output, html

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdDateRangePicker(
            id='searchTime',
            allowClear=True,
        ),
        fac.AntdButton(
            '重置',
            type='primary',
            danger=True,
            id='reload',
        ),
    ]
)


@app.callback(
    Output('searchTime', 'value'),
    Input('reload', 'nClicks'),
    prevent_initial_call=True,
)
def reload(nClicks):
    if nClicks:
        return [None, None]

    return dash.no_update


if __name__ == '__main__':
    app.run(debug=True)
