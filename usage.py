import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdPopconfirm(
            fac.AntdButton('触发'), title='确认继续'
        )
    ],
    style={'padding': 200},
)

if __name__ == '__main__':
    app.run(debug=True)
