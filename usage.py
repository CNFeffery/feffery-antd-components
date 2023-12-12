import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = fac.AntdConfigProvider(
    html.Div(
        [
            fac.AntdButton(
                '兼容性测试',
                id='demo-button',
                type='primary'
            ),
            html.Div(
                fac.AntdNotification(
                    message='兼容性测试',
                    type='info',
                    underCompatibilityMode=True
                ),
                id='demo-message-container'
            )
        ],
        style={
            'padding': 50
        }
    ),
    compatibilityMode=True
)


@app.callback(
    Output('demo-message-container', 'children'),
    Input('demo-button', 'nClicks'),
    prevent_initial_call=True
)
def message_test(nClicks):

    return fac.AntdNotification(
        message='兼容性测试',
        type='info',
        underCompatibilityMode=True
    )


if __name__ == '__main__':
    app.run(debug=True)
