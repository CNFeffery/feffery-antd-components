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
        fac.AntdDivider(
            '',
            innerTextOrientation='left'
        ),
        fac.AntdTabs(
            items=[
                {
                    'key': f'标签页{i}',
                    'label': f'标签页{i}',
                    'children': html.Div(
                        f'这是标签页{i}的内容示例',
                        style={
                            'display': 'flex',
                            'justifyContent': 'center',
                            'alignItems': 'center',
                            'fontSize': 18,
                            'background': f'rgba(28, 126, 214, calc(1 - 0.2 * {i}))',
                            'height': 200
                        }
                    )
                }
                for i in range(1, 6)
            ],
            indicatorSize={
                'subTractFromOrigin': True,
                'width': 10
            }
        ),
        fac.AntdDivider(
            '',
            innerTextOrientation='left'
        ),
        fac.AntdTabs(
            id='tabs-add-delete-demo',
            type='editable-card',
            items=[
                {
                    'label': f'标签页{i}',
                    'key': str(i),
                    'children': html.Div(
                        f'标签页{i}',
                        style={
                            'height': 200,
                            'fontSize': 28,
                            'display': 'flex',
                            'justifyContent': 'center',
                            'alignItems': 'center'
                        }
                    ),
                    'destroyInactiveTabPane': True,
                    'closeIcon': fac.AntdIcon(
                        icon='antd-close-circle-two-tone',
                        style={
                            'fontSize': 20,
                            'cursor': 'pointer'
                        }
                    )
                }
                for i in range(1, 6)
            ],
            tabBarRightExtraContent=fac.AntdIcon(
                id='tabs-add-delete-demo-add',
                icon='antd-plus-circle-two-tone',
                style={
                    'fontSize': 20,
                    'cursor': 'pointer'
                }
            )
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
