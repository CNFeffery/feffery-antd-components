import json
import dash
import random
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output, State

app = dash.Dash(__name__)

demo_value = None

app.layout = html.Div(
    [
        fac.AntdButton(
            '打开示例抽屉',
            id='drawer-basic-demo-open',
            type='primary'
        ),

        fac.AntdDrawer(
            '示例内容',
            title='基础抽屉示例',
            id='drawer-basic-demo',
            maskStyle={
                # 'background': 'white',
                'background': 'transparent'
            }
        )
    ],
    style={
        'padding': 50
    }
)


@app.callback(
    Output('drawer-basic-demo', 'visible'),
    Input('drawer-basic-demo-open', 'nClicks'),
    prevent_initial_call=True
)
def drawer_basic_demo(nCLicks):

    return True


if __name__ == '__main__':
    app.run(debug=True)
