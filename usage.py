import dash
import json
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__, compress=True)

app.layout = html.Div(
    [
        fac.AntdSpace(
            [
                fac.AntdButton(
                    '打开引导',
                    id='open-tour',
                    type='primary'
                ),
                fac.AntdSpace(
                    [
                        fac.AntdButton(
                            '第一步',
                            id='step1'
                        ),
                        fac.AntdInput(
                            className='step2',
                            placeholder='第二步'
                        )
                    ],
                    size='large'
                ),
                fac.AntdAlert(
                    id='第三步',
                    type='info',
                    message='第三步'
                )
            ],
            direction='vertical',
            style={
                'width': '100%'
            }
        ),
        fac.AntdTour(
            id='tour-demo',
            steps=[
                {
                    'targetId': 'step1',
                    'title': '我是第一步'
                },
                {
                    'targetSelector': '.step2',
                    'title': '我是第二步'
                },
                {
                    'title': '我是第三步'
                }
            ],
            type='primary',
            mask=False
        )
    ],
    style={
        'padding': '50px 100px'
    }
)


@app.callback(
    Output('tour-demo', 'open'),
    Input('open-tour', 'nClicks'),
    prevent_initial_call=True
)
def demo(nClicks):

    return True


if __name__ == '__main__':
    app.run(debug=True)
