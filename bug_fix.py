
import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        html.Div(
            [
                fac.AntdButton(
                    '打开示例抽屉',
                    id='drawer-local-demo-open',
                    type='primary'
                ),
                fac.AntdDrawer(
                    '示例内容',
                    id='drawer-local-demo',
                    title='局部容器抽屉示例',
                    containerId='drawer-local-container'
                )
            ],
            id='drawer-local-container',
            style={
                'width': 800,
                'height': 400,
                'border': '1px solid #e9ecef',
                'position': 'relative',
                'padding': 25,
                'overflowX': 'hidden',
                'background': '#d9d9d9'
            }
        )
    ]
)


@app.callback(
    Output('drawer-local-demo', 'visible'),
    Input('drawer-local-demo-open', 'nClicks'),
    prevent_initial_call=True
)
def drawer_local_demo(nClicks):

    return True


if __name__ == '__main__':
    app.run(debug=True)
