import dash
from dash import html
import feffery_antd_components as fac
from feffery_dash_utils.style_utils import style

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdDatePicker(
            placeholder='picker="week"',
            picker='week',
            format='YYYY年第w周',
            style={'width': 175},
        )
    ],
    style=style(padding=50),
)

if __name__ == '__main__':
    app.run(debug=True)
