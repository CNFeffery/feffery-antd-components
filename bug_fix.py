import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdSelect(
            options=[1, 2, 3], style={'width': 200}
        )
    ],
    style={'padding': 50},
)

if __name__ == '__main__':
    app.run(debug=True)
