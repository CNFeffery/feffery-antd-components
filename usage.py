import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdButton(
            '进入全屏',
            clickExecuteJsString='document.documentElement.requestFullscreen()'
        ),
        fac.AntdButton(
            '退出全屏',
            clickExecuteJsString='document.exitFullscreen()'
        )
    ],
    style={
        'padding': '50px 100px'
    }
)

if __name__ == '__main__':
    app.run(debug=True)
