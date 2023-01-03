import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = html.Div(
    [

        fac.AntdRow(
            [
                fac.AntdCol(
                    [
                        fac.AntdSpin(
                            html.Div(
                                '测试',
                                style={
                                    'height': '100%',
                                    'textAlign': 'center',
                                    'background': 'red'
                                }
                            ),
                            wrapperClassName={
                                'height': '100%'
                            }
                        )
                    ],
                    flex=1
                ),

                fac.AntdCol(
                    flex=1,
                    style={
                        'background': 'green'
                    }
                )
            ],
            style={
                'width': '400px',
                'height': '200px',
                'background': 'lightgrey'
            }
        ),

        fac.AntdAlert(
            message='测试',
            description='测试',
            banner=True
        ),

        fac.AntdAvatarGroup(
            [
                fac.AntdAvatar(
                    mode='image',
                    src='https://fac.feffery.tech/assets/imgs/avatar-demo.jpg'
                ),
                fac.AntdAvatar(
                    mode='image',
                    shape='square',
                    src='https://fac.feffery.tech/assets/imgs/avatar-demo.jpg'
                ),
                fac.AntdAvatar(
                    mode='image',
                    src='https://fac.feffery.tech/assets/imgs/avatar-demo.jpg'
                ),
                fac.AntdAvatar(
                    mode='image',
                    shape='square',
                    src='https://fac.feffery.tech/assets/imgs/avatar-demo.jpg'
                ),
                fac.AntdAvatar(
                    mode='image',
                    src='https://fac.feffery.tech/assets/imgs/avatar-demo.jpg'
                ),
                fac.AntdAvatar(
                    mode='image',
                    shape='square',
                    src='https://fac.feffery.tech/assets/imgs/avatar-demo.jpg'
                )
            ],
            maxCount=3
        )
    ],
    style={
        'padding': '100px'
    }
)

if __name__ == '__main__':
    app.run(debug=True)
