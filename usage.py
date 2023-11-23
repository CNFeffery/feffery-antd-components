import time
import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdButton(
            '触发示例',
            id='spin-basic-demo-trigger',
            style={
                'marginBottom': 10
            }
        ),

        fac.AntdSpin(
            fac.AntdText(
                id='spin-basic-demo-output'
            ),
            text='回调中',
            fullscreen=True
        ),
        fac.AntdDivider(
            '使用内置色彩主题',
            innerTextOrientation='left'
        ),
        fac.AntdSpace(
            [
                fac.AntdTag(
                    content=color,
                    color=color,
                    bordered=False
                )
                for color in [
                    'magenta',
                    'red',
                    'volcano',
                    'orange',
                    'gold',
                    'lime',
                    'green',
                    'cyan',
                    'blue',
                    'geekblue',
                    'purple'
                ]
            ],
            wrap=True,
            size='small'
        ),
    ],
    style={
        'padding': '50px 100px'
    }
)


@app.callback(
    Output('spin-basic-demo-output', 'children'),
    Input('spin-basic-demo-trigger', 'nClicks'),
    prevent_initial_call=True
)
def spin_basic_demo(nClicks):

    time.sleep(2)

    return f'nClicks: {nClicks}'


if __name__ == '__main__':
    app.run(debug=True)
