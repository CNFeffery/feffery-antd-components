import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdConfigProvider(
            fac.AntdButton('测试', type='primary'),
            enableLayer=True,
        )
    ],
    style={'padding': 200},
)

if __name__ == '__main__':
    app.run(debug=True)
