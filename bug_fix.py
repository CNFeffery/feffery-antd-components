import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdSpace(
            [
                fac.AntdButton(
                    '新消息',
                    id='new-message',
                    type='primary'
                ),
                fac.AntdButton(
                    '新通知',
                    id='new-notification',
                    type='primary'
                )
            ]
        ),
        html.Div(id='output')
    ]
)


@app.callback(
    Output('output', 'children'),
    Input('new-message', 'nClicks'),
    prevent_initial_call=True
)
def new_message(nClicks):

    return fac.AntdMessage(
        content='新消息'
    )


@app.callback(
    Output('output', 'children', allow_duplicate=True),
    Input('new-notification', 'nClicks'),
    prevent_initial_call=True
)
def new_notification(nClicks):

    return fac.AntdNotification(
        message='新通知'
    )


if __name__ == '__main__':
    app.run(debug=True)
