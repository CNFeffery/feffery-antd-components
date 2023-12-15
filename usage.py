import dash
from dash import html
import feffery_antd_components as fac
from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdButton(
            '新的通知',
            id='new-notification',
            type='primary'
        ),
        html.Div(
            id='notification-container'
        )
    ],
    style={
        'padding': '50px 100px'
    }
)


@app.callback(
    Output('notification-container', 'children'),
    Input('new-notification', 'nClicks'),
    prevent_initial_call=True
)
def new_notification(nClicks):
    return [
        fac.AntdNotification(
            message='这是新的通知，nClicks={}'.format(nClicks),
            type='info'
        )
    ]


if __name__ == '__main__':
    app.run(debug=True)
