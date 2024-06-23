import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdPopover(
            fac.AntdButton('测试', id='buttom-demo'),
            id='popover-demo',
            content='demo',
            trigger='click',
        )
    ],
    style={'padding': 100},
)


app.clientside_callback(
    """(nClicks) => nClicks % 2 === 0 ? "demo" : null""",
    Output('popover-demo', 'content'),
    Input('buttom-demo', 'nClicks'),
    prevent_initial_call=True,
)


if __name__ == '__main__':
    app.run(debug=True)
