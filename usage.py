import dash
from dash import html
import feffery_antd_components as fac
from feffery_dash_utils.style_utils import style

app = dash.Dash(__name__)

app.layout = html.Div(
    [html.Pre(fac.AntdTable.__doc__)],
    style=style(padding=50),
)

if __name__ == '__main__':
    app.run(debug=True)
