import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdImage(src='test'),
        fac.AntdImageGroup([fac.AntdImage(src='test')] * 5),
    ],
    style={'padding': 50},
)

if __name__ == '__main__':
    app.run(debug=True)
