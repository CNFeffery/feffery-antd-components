from dash import Dash, html
import feffery_antd_components as fac


app = Dash(__name__)


app.layout = html.Div(
    [
        fac.AntdTour(
            steps=[
                {
                    'targetId': 'step1',
                    'placement': 'right',
                    'title': '第一步',
                    'description': '这是第一步',
                },
                {
                    'targetId': 'step2',
                    'placement': 'left',
                    'title': '第二步',
                    'description': '这是第二步',
                },
                {
                    'targetId': 'step3',
                    'placement': 'right',
                    'title': '第三步',
                    'description': '这是第三步',
                },
                {
                    'targetId': 'step4',
                    'placement': 'left',
                    'title': '第四步',
                    'description': '这是第四步',
                },
                {
                    'targetId': 'step5',
                    'placement': 'top',
                    'title': '第五步',
                    'description': '这是第五步',
                },
            ],
            open=True,
            type='primary',
        ),
        fac.Fragment(
            [
                fac.AntdButton(
                    '按钮1',
                    id='step1',
                    style={
                        'position': 'fixed',
                        'left': 50,
                        'top': 50,
                    },
                ),
                fac.AntdButton(
                    '按钮2',
                    id='step2',
                    style={
                        'position': 'fixed',
                        'right': 50,
                        'top': 50,
                    },
                ),
                fac.AntdButton(
                    '按钮3',
                    id='step3',
                    style={
                        'position': 'fixed',
                        'left': 50,
                        'bottom': 50,
                    },
                ),
                fac.AntdButton(
                    '按钮4',
                    id='step4',
                    style={
                        'position': 'fixed',
                        'right': 50,
                        'bottom': 50,
                    },
                ),
                fac.AntdButton(
                    '按钮5',
                    id='step5',
                    style={
                        'position': 'fixed',
                        'left': '50%',
                        'top': '50%',
                        'transform': 'translate(-50%, -50%)',
                    },
                ),
            ]
        ),
    ],
    style={'padding': 100},
)

if __name__ == '__main__':
    app.run(debug=True)
