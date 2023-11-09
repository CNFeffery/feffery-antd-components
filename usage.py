import dash
from dash import Dash, html, Input, Output, State
import feffery_antd_components as fac

app = Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdFloatButton(),
        fac.AntdFloatButton(
            type='primary',
            style={
                'bottom': 100
            }
        ),
        fac.AntdFloatButton(
            icon=fac.AntdIcon(
                icon='antd-question'
            ),
            style={
                'bottom': 152
            }
        ),
        fac.AntdFloatButton(
            tooltip=fac.AntdText(
                'tooltip测试',
                style={
                    'color': 'white'
                }
            ),
            style={
                'bottom': 204
            }
        ),
        fac.AntdFloatButton(
            shape='square',
            style={
                'bottom': 256
            }
        ),
        fac.AntdFloatButton(
            description='测试结果',
            shape='square',
            style={
                'bottom': 308
            }
        ),
        fac.AntdFloatButton(
            icon=fac.AntdIcon(
                icon='antd-question'
            ),
            description='测试结果',
            shape='square',
            style={
                'bottom': 360
            }
        ),
        fac.AntdFloatButton(
            href='/demo',
            shape='square',
            style={
                'bottom': 422
            }
        ),
    ],
    style={
        'height': 3000
    }
)

if __name__ == "__main__":
    app.run(debug=True, dev_tools_ui=False)
