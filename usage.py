import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdSlider(
            id='update-margin',
            min=0,
            max=100,
            value=16,
            style={'width': 300},
        ),
        fac.AntdDivider('分割线测试', id='divider-demo'),
        '下',
    ],
    style={'padding': 100},
)


app.clientside_callback(
    """(value) => ({ margin: `${value}px 0` })""",
    Output('divider-demo', 'style'),
    Input('update-margin', 'value'),
)


if __name__ == '__main__':
    app.run(debug=True)
