import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdDrawer(
            placement='right',
            width=520,
            visible=True,
            loading=True,
        )
    ],
    style={'padding': 50},
)


if __name__ == '__main__':
    app.run(debug=True)
