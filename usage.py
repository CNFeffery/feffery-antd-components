import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdTooltip(
            fac.AntdButton('测试', id='buttom-demo'),
            id='tooltip-demo',
        )
    ],
    style={'padding': 100},
)


app.clientside_callback(
    """(nClicks) => nClicks % 2 === 0 ? "demo" : null""",
    Output('tooltip-demo', 'title'),
    Input('buttom-demo', 'nClicks'),
    prevent_initial_call=True,
)


if __name__ == '__main__':
    app.run(debug=True)
